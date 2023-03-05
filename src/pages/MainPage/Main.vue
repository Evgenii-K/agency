<template>
  <q-page class="row">
    <div class="main__wrapper">
      <start @on-send-click="clickHandler"/>
      <about-us />
      <our-services />
      <our-portfolio />
      <testimonial />
      <collaboration @on-send-click="clickHandler"/>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import './style.scss'
import Start from './Sections/Start/Start.vue'
import AboutUs from './Sections/AboutUs/AboutUs.vue'
import OurServices from './Sections/OurServices/OurServices.vue'
import OurPortfolio from './Sections/OurPortfolio/OurPortfolio.vue'
import Testimonial from './Sections/Testimonial/Testimonial.vue'
import Collaboration from './Sections/Collaboration/Collaboration.vue'
import { defineEmits, onMounted } from 'vue'
import { useStore } from 'src/store'

const state = useStore()

const emit = defineEmits(['on-send-click'])

const clickHandler = () => {
  emit('on-send-click')
}

const options = {
  rootMargin: '0px 0px -200px 0px',
  threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      (entry.target as HTMLElement).style.opacity = '1'
    }
  });
}, options);

onMounted(() => {
  const sections = document.querySelectorAll('section')

  sections.forEach((section) => {
    section.style.opacity = '0'
    section.style.transition = 'opacity 1s'
    observer.observe(section)
  })

  void state.dispatch('general/loadReviews')
})

</script>
