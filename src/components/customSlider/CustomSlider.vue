<template>
  <div ref="slidesWrapper" class="feedback__wrapper">
    <div v-touch-pan.prevent.mouse="mouseMove" class="slider__feedback feedback" :style="computedFeedbackStyle">
      <div v-for="feedback in visibleSlides" :key="feedback.index" class="feedback__card"
        :style="{ ...computedCardStyle }">
        <div class="feedback__title">
          <img class="feedback__avatar" :src="feedback.avatar" />
          <div class="feedback__contacts">
            <div class="feedback__name">{{ feedback.name }}</div>
            <div class="feedback__role">{{ feedback.specialty }}</div>
          </div>
        </div>
        <div class="feedback__content">
          {{ feedback.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed, onMounted, onBeforeUnmount, defineProps, PropType, onBeforeMount, watch } from 'vue'
import './style.scss'
import { QuasarMouseEvent, ISliderBreakPoints, IReview } from 'src/components/models'

const props = defineProps({
  slideItems: { type: Array as PropType<IReview[]>, default: null },
  breakPoints: { type: Array as PropType<ISliderBreakPoints[]> || [], required: false, default: [] }
})

const feedbacks = reactive<IReview[]>([])

watch(() => props.slideItems, (review) => {
  review.forEach(item => {
    feedbacks.push(item);
  })
});

const breakPoints = ref<ISliderBreakPoints[]>([])

const slidesWrapper = ref<HTMLElement>() // ref на wrapper слайдера
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

let slideMoveTimeout: ReturnType<typeof setTimeout> | undefined

/**
 * Отслеживаем ширину блока со слайдером
 */
const resizeWrapperObserver = new ResizeObserver(e => {
  windowWidth.value = window.innerWidth

  padding.value = (window.innerWidth - e[0].borderBoxSize[0].inlineSize) / 2

  scrollBarWidth.value = document.querySelector('#q-app') ? (window.innerWidth - (document.querySelector('#q-app') as HTMLElement)?.offsetWidth) : 0

  calculateSlideWidth()
})


/**
 * Определяем ширину слайда в зависимости от необходимого количество слайдов на странице
 */
const calculateSlideWidth = () => {
  const breakPointsWidth = breakPoints.value.length ? breakPoints.value.filter(breakPoint => breakPoint.maxWidth > windowWidth.value).map(breakPoint => breakPoint.maxWidth).sort((a, b) => a - b)[0] : null
  const findBreakPoint = breakPointsWidth ? breakPoints.value.find(breakPoint => breakPoint.maxWidth === breakPointsWidth) : null

  if (findBreakPoint) {
    currentCount.value = findBreakPoint.count
    gap.value = findBreakPoint.gap
    feedbackStyle.gap = `${findBreakPoint.gap}px`
  } else {
    currentCount.value = 3
  }

  slideWidth.value = ((windowWidth.value - scrollBarWidth.value) - currentCount.value * gap.value) / currentCount.value
  feedbackStyle.marginLeft = setMargin(currentIndex.value)
}

/**
 * Стили одного слайда
 */
const computedCardStyle = computed(() => {
  return { minWidth: `${slideWidth.value}px` }
})

/**
 * Рассчитываем массив слайдов
 */
const visibleSlides = computed(() => {
  const length = feedbacks.length
  if (length === 0) return []

  const slides: IReview[] = []
  let maxId;
  let i = currentIndex.value > 0 ? currentIndex.value - 1 : (length - Math.abs(currentIndex.value % length)) - 1;
  while (slides.length < minVisibleSlides.value) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const slide: IReview = feedbacks[i % length]
    if (slides.find(item => item.index === slide.index)) {
      maxId = Math.max.apply(null, slides.map(item => item.index));
      slide.index = maxId + 1
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const nextSlide: IReview = JSON.parse(JSON.stringify(slide))
    slides.push(nextSlide)

    i++

    if (i === length) {
      i = 0
    }
  }
  return slides
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
const feedbackStyle = reactive({
  marginLeft: setMargin(currentIndex.value),
  gap: `${gap.value}px`,
})

/**
 * Добавляем к стилям блока слайда transition в зависимости от действий пользователя
 */
const computedFeedbackStyle = computed(() => {
  return {
    ...feedbackStyle,
    transition: isFinal.value ? `margin-left ${slideDelay}s` : 'margin-left 0s',
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
  const currentOffset = +feedbackStyle.marginLeft.slice(0, -2)

  if (isFirst.value) {
    currentMargin.value = currentOffset
  }

  feedbackStyle.marginLeft = `${currentMargin.value + x}px`

  if (isFinal.value) {
    const count = Math.abs(Math.round((currentOffset + padding.value) / slideWidth.value))
    feedbackStyle.marginLeft = setMargin(count)
    const slideMove = () => {
      currentIndex.value = currentIndex.value + (count - 3)
      isFinal.value = false
      feedbackStyle.marginLeft = setMargin(3)
    }
    if (slideMoveTimeout) clearTimeout(slideMoveTimeout)
    slideMoveTimeout = setTimeout(slideMove, slideDelay * 1000)
  }
}

onBeforeMount(() => {
  if (props.breakPoints) breakPoints.value = props.breakPoints
})

onMounted(() => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  if (slidesWrapper.value) resizeWrapperObserver.observe(slidesWrapper.value)
})

onBeforeUnmount(() => {
  if (slidesWrapper.value) resizeWrapperObserver.unobserve(slidesWrapper.value)
})

</script>
