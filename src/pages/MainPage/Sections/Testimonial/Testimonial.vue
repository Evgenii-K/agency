<template>
  <div class="testimonial__wrapper">
    <h3 class="testimonial__subtitle">Testimonial</h3>
    <h2 class="testimonial__title">People Talk about us</h2>
    <!-- <div class="testimonial__feedbacks"> -->
      <q-carousel
        v-model="slide"
        animated
        infinite
        :autoplay="true"
        class="testimonial__feedbacks"
      >
        <q-carousel-slide
          v-for="feedback, idx in feedbacks"
          :key="idx"
          :name="idx + 1"
          class="testimonial__feedback feedback"
        >
          <div class="feedback__title">
            <img class="feedback__avatar" :src="feedback.avatar"/>
            <div class="feedback__contacts">
              <div class="feedback__name">{{ feedback.name }}</div>
              <div class="feedback__role">{{ feedback.role }}</div>
            </div>
          </div>
          <div class="feedback__content">
            {{ feedback.text }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    <!-- </div> -->
  </div>
</template>

<script setup lang="ts">
import './style.scss'
import { ref } from 'vue'

const slide = ref(1);

const feedbacks = [
  { name: 'Angel Rose', role: 'Creative Manager', text: '“ First Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit”', avatar: require('src/assets/img/MainPage/avatar.png')}, // eslint-disable-line @typescript-eslint/no-unsafe-assignment
  { name: 'Angel Rose', role: 'Creative Manager', text: '“ Second Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit”', avatar: require('src/assets/img/MainPage/avatar.png')}, // eslint-disable-line @typescript-eslint/no-unsafe-assignment
  { name: 'Angel Rose', role: 'Creative Manager', text: '“ Third Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit”', avatar: require('src/assets/img/MainPage/avatar.png')}, // eslint-disable-line @typescript-eslint/no-unsafe-assignment
]
</script>
