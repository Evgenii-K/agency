<template>
  <section class="testimonial__wrapper">
    <h3 class="testimonial__subtitle">Testimonial</h3>
    <h2 class="testimonial__title">People Talk about us</h2>
    <custom-slider
      :break-points="breakPoints"
      :autoplay="true"
      tag-name="feedback__card"
    >
      <div
        v-for="feedback in feedbacks"
        :key="feedback.index"
        class="feedback__card"
      >
        <div class="feedback__title">
          <img
            class="feedback__avatar"
            :src="feedback.avatar"
          />
          <div class="feedback__contacts">
            <div class="feedback__name">{{ feedback.name }}</div>
            <div class="feedback__role">{{ feedback.specialty }}</div>
          </div>
        </div>
        <div class="feedback__content">
          {{ feedback.text }}
        </div>
      </div>
    </custom-slider>
  </section>
</template>

<script setup lang="ts">
  import './style.scss'
  import { computed } from 'vue'
  import { useStore } from 'src/store'
  import { useI18n } from 'vue-i18n'
  import { IReviews, ELanguageName } from 'components/models'
  import CustomSlider from 'components/customSlider/CustomSlider.vue'

  const { locale } = useI18n({ useScope: 'global' })

  const state = useStore()

  const breakPoints = [
    { maxWidth: 768, count: 1, gap: 25 },
    { maxWidth: 1280, count: 2, gap: 30 },
  ]

  const feedbacks = computed(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const reviews = state.getters['general/getReviews'] as IReviews[]

    return reviews.map((review, index) => {
      const newItem = {
        id: review.id,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        avatar: require('src/assets/img/MainPage/avatar.png'),
        index: index + 1,
      }
      if (locale.value === ELanguageName.RU) return { ...newItem, ...review.ru }

      return { ...newItem, ...review.en }
    })
  })
</script>
