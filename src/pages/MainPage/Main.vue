<template>
  <q-page class="row">
    <div class="main__wrapper">
      <start @on-send-open="onSendOpen" />
      <about-us />
      <our-services />
      <our-portfolio />
      <testimonial />
      <collaboration @on-send-open="onSendOpen" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
  import './style.scss'
  import Start from './Modules/Start/Start.vue'
  import AboutUs from './Modules/AboutUs/AboutUs.vue'
  import OurServices from './Modules/OurServices/OurServices.vue'
  import OurPortfolio from './Modules/OurPortfolio/OurPortfolio.vue'
  import Testimonial from './Modules/Testimonial/Testimonial.vue'
  import Collaboration from './Modules/Collaboration/Collaboration.vue'
  import { onMounted } from 'vue'
  import { useStore } from 'src/store'

  const state = useStore()

  const onSendOpen = () => {
    // eslint-disable-next-line
    state.dispatch('general/updateSendOpen', true)
  }

  const options = {
    rootMargin: '0px 0px -200px 0px',
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        ;(entry.target as HTMLElement).style.opacity = '1'
      }
    })
  }, options)

  onMounted(() => {
    const sections = document.querySelectorAll('section')

    sections.forEach((section) => {
      section.style.opacity = '0'
      section.style.transition = 'opacity 1s'
      observer.observe(section)
    })
  })
</script>
