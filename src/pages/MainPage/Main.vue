<template>
  <q-page class="row">
    <div class="main__wrapper">
      <Header />
      <start />
      <about-us />
      <our-services />
      <our-portfolio />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import './style.scss'
import Header from 'src/components/header/Header.vue'
import Start from './Sections/Start/Start.vue'
import AboutUs from './Sections/AboutUs/AboutUs.vue'
import OurServices from './Sections/OurServices/OurServices.vue'
import OurPortfolio from './Sections/OurPortfolio/OurPortfolio.vue'

</script>
