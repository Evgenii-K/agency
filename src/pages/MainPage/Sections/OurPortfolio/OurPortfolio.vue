<template>
  <section class="portfolio__wrapper">
    <h3 class="portfolio__subtitle">Our Portfolio</h3>
    <h2 class="portfolio__title">What do we do</h2>
    <div class="portfolio__article">
      all projects that we have already done , proven can help to use more comfortable, then can used by client from our
      business
    </div>
    <div class="portfolio__works">
      <div v-for="work in works" :key="work.text" class="portfolio__work">
        {{ work.text }}
      </div>
    </div>
    <base-button :click-handler="clickHandler" outline text="See All Portfolio" />
    <dots class="portfolio__dots portfolio__dots--first" color="#EB00FF" />
    <dots class="portfolio__dots portfolio__dots--second" color="#EB00FF" />
  </section>
</template>

<script setup lang="ts">
import './style.scss'
import BaseButton from 'src/components/ui/baseButton/BaseButton.vue'
import Dots from 'src/components/ui/dots/Dots.vue'
const works = [
  { text: 'Design Furniture App' },
  { text: 'Cloud App' },
  { text: 'Design Byte App' },
]


const clickHandler = () => {
  console.log('isPortfolioClick')
}
</script>
