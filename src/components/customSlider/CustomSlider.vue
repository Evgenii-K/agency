<template>
  <div
    ref="slidesWrapper"
    class="custom-slider"
    :style="computedWrapperStyle"
  >
    <div
      v-touch-pan.prevent.mouse="mouseMove"
      class="custom-slider__content"
      :style="computedContentStyle"
    >
      <!-- eslint-disable vue/no-v-html -->
      <div
        v-for="slide in visibleSlides"
        :key="slide.index"
        :class="tagName"
        :style="computedCardStyle"
        v-html="slide.node.innerHTML"
      />
      <!--eslint-enable-->
    </div>
  </div>
  <div
    ref="slotWrapper"
    :style="{ display: 'none' }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
  import {
    reactive,
    ref,
    computed,
    onMounted,
    onBeforeUnmount,
    defineProps,
    PropType,
    onBeforeMount,
    nextTick,
  } from 'vue'
  import './style.scss'
  import {
    QuasarMouseEvent,
    ISliderBreakPoints,
    INodeList,
  } from 'src/components/models'
  import { MAIN_WRAPPER } from 'src/helpers/constant'

  const props = defineProps({
    breakPoints: {
      type: (Array as PropType<ISliderBreakPoints[]>) || [],
      required: false,
      default: [],
    },
    autoplay: { type: Boolean, default: false },
    tagName: { type: String, required: true },
  })

  const breakPoints = ref<ISliderBreakPoints[]>([])

  const slidesWrapper = ref<HTMLElement>() // ref на wrapper слайдера
  const slotWrapper = ref<HTMLElement>() // ref
  const slotNodes = ref<INodeList[]>([])
  const slideWidth = ref(350) // ширина одного слайда
  const currentMargin = ref(0) // текущее значение margin слайдера
  const isFirst = ref(false) // флаг начала взаимодействия пользователя со слайдером
  const isFinal = ref(true) // флаг окончания взаимодействия пользователя со слайдером
  const gap = ref(40) // расстояние между слайдами
  const padding = ref(25) // padding wrapper слайдера от края окна
  const scrollBarWidth = ref(0) // padding wrapper scroll
  const slideDelay = 0.5 // transition перелистывания
  const currentIndex = ref(3) // текущий индекс слайда
  const windowWidth = ref(window.innerWidth) // ширина окна браузера
  const currentCount = ref(3) // количество слайдов на странице
  const minVisibleSlides = ref(9) // общее минимальное количество слайдов, currentCount * 3
  const nodesHeight = ref<number[]>([]) // массив высот карточек слайдера

  let slideMoveTimeout: ReturnType<typeof setTimeout> | undefined
  let slideAutoplayTimeout: ReturnType<typeof setTimeout> | undefined

  /**
   * Отслеживаем ширину блока со слайдером
   */
  const resizeWrapperObserver = new ResizeObserver((e) => {
    windowWidth.value = window.innerWidth

    padding.value = (window.innerWidth - e[0].borderBoxSize[0].inlineSize) / 2

    scrollBarWidth.value = document.querySelector(MAIN_WRAPPER)
      ? window.innerWidth -
        (document.querySelector(MAIN_WRAPPER) as HTMLElement)?.offsetWidth
      : 0

    calculateSlideWidth()
  })

  /**
   * Определяем ширину слайда в зависимости от необходимого количество слайдов на странице
   */
  const calculateSlideWidth = () => {
    const breakPointsWidth = breakPoints.value.length
      ? breakPoints.value
          .filter((breakPoint) => breakPoint.maxWidth > windowWidth.value)
          .map((breakPoint) => breakPoint.maxWidth)
          .sort((a, b) => a - b)[0]
      : null
    const findBreakPoint = breakPointsWidth
      ? breakPoints.value.find(
          (breakPoint) => breakPoint.maxWidth === breakPointsWidth
        )
      : null

    if (findBreakPoint) {
      currentCount.value = findBreakPoint.count
      gap.value = findBreakPoint.gap
      slideStyle.gap = `${findBreakPoint.gap}px`
    } else {
      currentCount.value = 3
    }

    slideWidth.value =
      (windowWidth.value -
        scrollBarWidth.value -
        currentCount.value * gap.value) /
      currentCount.value
    slideStyle.marginLeft = setMargin(currentIndex.value)
  }

  /**
   * Рассчитываем массив слайдов
   */
  const visibleSlides = computed(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const length = slotNodes.value ? slotNodes.value.length : 0
    if (length === 0) return []

    const slides: INodeList[] = []
    let maxId
    let i =
      currentIndex.value > 0
        ? currentIndex.value - 1
        : length - Math.abs(currentIndex.value % length) - 1
    while (slides.length < minVisibleSlides.value) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const slide: INodeList = slotNodes.value[i % length]
      if (slides.find((item) => item.index === slide.index)) {
        maxId = Math.max.apply(
          null,
          slides.map((item) => item.index)
        )
        slide.index = maxId + 1
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const nextSlide: INodeList = JSON.parse(JSON.stringify(slide))
      slides.push({ ...nextSlide, node: slide.node })

      i++

      if (i === length) {
        i = 0
      }
    }

    void nextTick(() => {
      const slideNodes = document.querySelectorAll(`.${props.tagName}`)
      nodesHeight.value = []
      slideNodes.forEach((slide) =>
        nodesHeight.value.push((slide as HTMLElement).clientHeight)
      )
    })

    return slides
  })

  /**
   * Максимальная высота одной карточки
   */
  const maxHeight = computed(() => {
    return Math.max.apply(null, nodesHeight.value)
  })

  /**
   * Стили wrapper слайдера
   */
  const computedWrapperStyle = computed(() => {
    return {
      height: `${maxHeight.value}px`,
    }
  })

  /**
   * Стили одного слайда
   */
  const computedCardStyle = computed(() => {
    return {
      minWidth: `${slideWidth.value}px`,
      height: `${maxHeight.value}px`,
    }
  })

  /**
   * Рассчитываем расстояние между перелистываемыми слайдами
   * @param count число сладов на которое перелистываем
   */
  const gapBetween = (count: number) => {
    return count * gap.value - gap.value / 2
  }

  /**
   * Рассчитываем margin перемещения слайдов относительно экрана
   * @param index на какое количество сладов перемещаем
   */
  const setMargin = (index: number) => {
    return `-${index * slideWidth.value + padding.value + gapBetween(index)}px`
  }

  /**
   * Стили блока слайдера
   */
  const slideStyle = reactive({
    marginLeft: setMargin(currentIndex.value),
    gap: `${gap.value}px`,
  })

  /**
   * Добавляем к стилям блока слайда transition в зависимости от действий пользователя
   */
  const computedContentStyle = computed(() => {
    return {
      ...slideStyle,
      transition: isFinal.value
        ? `margin-left ${slideDelay}s`
        : 'margin-left 0s',
    }
  })

  /**
   * Реагируем на взаимодействие пользователя со слайдером
   * @param event мыши или от прикосновения
   */
  const mouseMove = (event: QuasarMouseEvent) => {
    const x = event.offset.x
    isFirst.value = event.isFirst
    isFinal.value = event.isFinal
    const currentOffset = +slideStyle.marginLeft.slice(0, -2)

    if (isFirst.value) {
      currentMargin.value = currentOffset
      if (slideAutoplayTimeout) clearInterval(slideAutoplayTimeout)
    }

    slideStyle.marginLeft = `${currentMargin.value + x}px`

    if (isFinal.value) {
      const count = Math.abs(
        Math.round((currentOffset + padding.value) / slideWidth.value)
      )
      nextSlide(count)
      runAutoplay()
    }
  }

  /**
   * Функция переключения слайда
   * @param count на какое количество слайдов двигаем
   */
  const nextSlide = (count: number) => {
    slideStyle.marginLeft = setMargin(count)

    const slideMove = () => {
      currentIndex.value = currentIndex.value + (count - 3)
      isFinal.value = false
      slideStyle.marginLeft = setMargin(3)
    }
    if (slideMoveTimeout) clearTimeout(slideMoveTimeout)
    slideMoveTimeout = setTimeout(slideMove, slideDelay * 1000)
  }

  /**
   * Запуск автопрокрутки слайдера
   */
  const runAutoplay = () => {
    if (props.autoplay) {
      slideAutoplayTimeout = setInterval(() => {
        isFinal.value = true
        nextSlide(4)
      }, 3000)
    }
  }

  const slotObserver = new MutationObserver(() => {
    slotNodes.value = []
    slotWrapper.value
      ?.querySelectorAll(`.${props.tagName}`)
      .forEach((node, index) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        slotNodes.value.push({ node, index: index + 1 })
      })
  })

  onBeforeMount(() => {
    if (props.breakPoints) breakPoints.value = props.breakPoints
  })

  onMounted(() => {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    if (slidesWrapper.value) resizeWrapperObserver.observe(slidesWrapper.value)
    runAutoplay()
    if (slotWrapper.value)
      slotObserver.observe(slotWrapper.value, {
        childList: true,
        subtree: true,
      })
  })

  onBeforeUnmount(() => {
    if (slidesWrapper.value)
      resizeWrapperObserver.unobserve(slidesWrapper.value)
    if (slotObserver) slotObserver.disconnect()
  })
</script>
