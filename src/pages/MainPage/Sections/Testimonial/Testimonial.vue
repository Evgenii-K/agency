<template>
  <section class="testimonial__wrapper">
    <h3 class="testimonial__subtitle">Testimonial</h3>
    <h2 class="testimonial__title">People Talk about us</h2>
    <custom-slider :slide-items="feedbacks" :break-points="breakPoints" />
  </section>
</template>

<script setup lang="ts">
import './style.scss'
import { computed } from 'vue'
import { useStore } from 'src/store'
import { useI18n } from 'vue-i18n'
import { IReviews } from 'src/components/models'
import CustomSlider from 'src/components/CustomSlider/CustomSlider.vue'

const { locale } = useI18n({ useScope: 'global' })

const state = useStore()

const breakPoints = [
  { maxWidth: 768, count: 1, gap: 25 },
  { maxWidth: 1440, count: 2, gap: 30 },
]

const feedbacks = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const reviews = (state.getters['general/getReviews'] as IReviews[])

  return reviews.map((review, index) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const newItem = { id: review.id, avatar: require('src/assets/img/MainPage/avatar.png'), index: index + 1 }
    if (locale.value === 'ru') return { ...newItem, ...review.ru }

    return { ...newItem, ...review.en }
  })
})
</script>
