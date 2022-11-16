<template>
  <div class="portfolio__wrapper">
    <h3 class="portfolio__subtitle">Our Portfolio</h3>
    <h2 class="portfolio__title">What do we do</h2>
    <div class="portfolio__article">
      all projects that we have already done , proven can help to use more comfortable, then can used by client from our business
    </div>
    <div class="portfolio__works">
      <div
        v-for="work in works"
        :key="work.text"
        class="portfolio__work"
        :style="work.background"
      >
        {{ work.text }}
      </div>
    </div>
    <base-button
      :click-handler="clickHandler"
      outline
      text="See All Portfolio"
    />
  </div>
</template>

<script setup lang="ts">
import './style.scss'
import BaseButton from 'src/components/ui/baseButton/BaseButton.vue'

const works = [
  { text: 'Design Furniture App', background: { backgroundImage: "url('../../../../assets/img/MainPage/work_cloud.png')"}},
  { text: 'Cloud App', background: '../../../../assets/img/MainPage/work_cloud.png'},
  { text: 'Design Byte App', background: '../../../../assets/img/MainPage/work_byte.png'},

]

const clickHandler = () => {
  console.log('Portfolio');
}
</script>
