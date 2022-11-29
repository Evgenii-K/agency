<template>
  <q-page class="row">
    <!-- <Header /> -->
    <div class="main__wrapper">
      <start @on-send-click="clickHandler"/>
      <about-us />
      <our-services />
      <our-portfolio />
      <testimonial />
      <collaboration @on-send-click="clickHandler"/>
    </div>
    <!-- <Footer /> -->
  </q-page>
</template>

<script setup lang="ts">
import './style.scss'
// import Header from 'src/components/header/Header.vue'
import Start from './Sections/Start/Start.vue'
import AboutUs from './Sections/AboutUs/AboutUs.vue'
import OurServices from './Sections/OurServices/OurServices.vue'
import OurPortfolio from './Sections/OurPortfolio/OurPortfolio.vue'
import Testimonial from './Sections/Testimonial/Testimonial.vue'
import Collaboration from './Sections/Collaboration/Collaboration.vue'
// import Footer from 'src/components/footer/Footer.vue'
import { defineEmits } from 'vue'

const emit = defineEmits(['on-send-click'])

const clickHandler = () => {
  console.log('main');
  emit('on-send-click')
}

</script>
