<template>
  <div class="collaboration__wrapper">
    <div class="collaboration__photo-block photo-block">
      <div class="photo-block__images">
        <div class="photo-block__image" />
        <div class="photo-block__image" />
      </div>
    </div>
    <h2 class="collaboration__header">Interesting Collaboration With Us?</h2>
    <div class="collaboration__content">
      Help you to reach your business goal
    </div>
    <base-button
      :click-handler="clickHandler"
      text="Get Started"
    />
  </div>
</template>

<script setup lang="ts">
import './style.scss'
import BaseButton from 'src/components/ui/baseButton/BaseButton.vue'
// import Dots from 'src/components/ui/dots/Dots.vue'

const clickHandler = () => {
  console.log('collaboration Project');
}
</script>
