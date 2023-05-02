<template>
  <section
    ref="wrapper"
    class="start__wrapper"
  >
    <h1 class="start__header">{{ $t('mainPage.start.title') }}</h1>
    <div class="start__content">
      <span>{{ $t('mainPage.start.contentFirst') }}</span>
      <span>{{ $t('mainPage.start.contentSecond') }}</span>
    </div>
    <base-button
      :click-handler="clickHandler"
      :text="$t('mainPage.start.startProject')"
    />
    <div class="start__image start-image">
      <img
        :src="require('src/assets/img/MainPage/start.png')"
        :srcset="
          require('src/assets/img/MainPage/start.png') +
          ' 1x, ' +
          require('src/assets/img/MainPage/start@2x.png') +
          ' 2x'
        "
        alt="Start project"
      />
      <div class="start-image__done">
        <ul>
          <li>
            <q-icon
              name="fa fa-star"
              class="start-image__star"
            />
            &nbsp;{{ $t('mainPage.start.greatProject') }}
          </li>
          <li>
            800+&nbsp;<span>{{ $t('mainPage.start.done') }}</span>
          </li>
        </ul>
      </div>
      <dots
        class="start-image__dots start-image__dots--red"
        :color="dotsColor.orange"
      />
      <dots class="start-image__dots start-image__dots--blue" />
      <div class="start-image__review start-review">
        <div class="start-review__header">
          <img
            :src="require('src/assets/img/MainPage/bill.png')"
            :srcset="
              require('src/assets/img/MainPage/bill.png') +
              ' 1x, ' +
              require('src/assets/img/MainPage/bill@2x.png') +
              ' 2x'
            "
            class="review__logo"
          />
          <div class="start-review__title">
            {{ $t('mainPage.start.billAdams') }}
            <div class="start-review__subtitle">
              {{ $t('mainPage.start.CEOUpTech') }}
            </div>
          </div>
        </div>
        {{ $t('mainPage.start.ceoComment') }}
      </div>
    </div>
    <div
      v-for="point in pointsPosition"
      :key="point.id"
      :class="['start__babble', `start__babble--${point.color}`]"
      :style="{
        top: `${point.top}px`,
        right: `${point.right}px`,
      }"
    />
  </section>
</template>

<script setup lang="ts">
  import './style.scss'
  import BaseButton from 'src/components/ui/baseButton/BaseButton.vue'
  import Dots from 'src/components/ui/dots/Dots.vue'
  import { onMounted, ref, reactive, defineEmits, onBeforeUnmount } from 'vue'
  import { Particle } from 'src/features/particle'
  import { dotsColor } from 'src/helpers/constant'

  interface IPointsPosition {
    id: number
    top: number
    right: number
    color: string
    particle: Particle | null
  }

  const wrapper = ref<HTMLElement>()

  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const width = entry.contentBoxSize
        ? entry.contentBoxSize[0].inlineSize
        : entry.contentRect.width
      const height = entry.contentBoxSize
        ? entry.contentBoxSize[0].blockSize
        : entry.contentRect.height

      pointsPosition.forEach((point) => {
        if (point.particle) {
          point.particle.nextMax = { height, width }
        }
      })
    }
  })

  const pointsPosition = reactive<IPointsPosition[]>([
    { id: 1, top: 0, right: 15, color: 'red', particle: null },
    { id: 2, top: 80, right: 80, color: 'red', particle: null },
    { id: 3, top: 30, right: 95, color: 'blue', particle: null },
    { id: 4, top: 60, right: 30, color: 'blue', particle: null },
  ])

  const setPointsPositions = (position: number) => {
    return (position * window.innerWidth) / 100
  }

  const emit = defineEmits(['onSendOpen'])

  const clickHandler = () => {
    emit('onSendOpen')
  }

  const loop = (): void => {
    pointsPosition.forEach((point) => {
      if (point.particle) {
        point.particle.position()
        const { top, right } = point.particle.currentPosition
        point.top = top
        point.right = right
      }
    })
  }

  let loopInterval: ReturnType<typeof setInterval>

  onMounted(() => {
    pointsPosition.forEach((point) => {
      point.particle = new Particle({
        top: setPointsPositions(point.top),
        right: setPointsPositions(point.right),
        height: window.innerWidth,
        width: window.innerHeight,
        velocity: 2,
      })
    })
    if (wrapper.value) {
      resizeObserver.observe(wrapper.value)
    }
    loopInterval = setInterval(() => {
      loop()
    }, 100)
  })

  onBeforeUnmount(() => {
    if (loopInterval) {
      clearInterval(loopInterval)
    }
  })
</script>
