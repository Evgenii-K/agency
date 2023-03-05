<template>
  <section class="testimonial__wrapper">
    <h3 class="testimonial__subtitle">Testimonial</h3>
    <h2 class="testimonial__title">People Talk about us</h2>
    <q-carousel
      v-model="slide"
      animated
      infinite
      :autoplay="true"
      class="testimonial__feedbacks"
    >
      <q-carousel-slide
        v-for="feedback in feedbacks"
        :key="feedback.id"
        :name="feedback.id + 1"
        class="testimonial__feedback feedback"
      >
        <div class="feedback__title">
          <img class="feedback__avatar" :src="feedback.avatar"/>
          <div class="feedback__contacts">
            <div class="feedback__name">{{ feedback.name }}</div>
            <div class="feedback__role">{{ feedback.specialty }}</div>
          </div>
        </div>
        <div class="feedback__content">
          {{ feedback.text }}
        </div>
      </q-carousel-slide>
    </q-carousel>
  </section>
</template>

<script setup lang="ts">
import './style.scss'
import { ref, computed } from 'vue'
import { useStore } from 'src/store'
import { useI18n } from 'vue-i18n'
import { IReviews } from 'src/components/models'

const { locale } = useI18n({ useScope: 'global' })

const slide = ref(1);

const state = useStore()

const feedbacks = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const reviews = (state.getters['general/getReviews'] as IReviews[])

  return reviews.map(review => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const newItem = { id: review.id, avatar: require('src/assets/img/MainPage/avatar.png') }
    if (locale.value === 'ru' ) return {...newItem, ...review.ru}

    return {...newItem, ...review.en}
  })
})
</script>
