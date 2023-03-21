<template>
  <div :class="['loader', { 'loader--hidden': isHidden }]">
    <div class="loader__center">
      <div class="loader__title-block">
        <img
          class="loader__logo"
          :src="logo"
        />
        <div class="loader__title"><span>Agency</span>Creative</div>
      </div>
      <div class="loader__subtitle">will help to reach your goals.</div>
    </div>
    <div class="loader__babbles">
      <div class="loader__babble loader__babble--red" />
      <div class="loader__babble loader__babble--blue" />
      <div class="loader__babble loader__babble--red" />
      <div class="loader__babble loader__babble--blue" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import './style.scss'
  import { defineProps } from 'vue'

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
  const logo = require('src/assets/img/mainLabel.png')

  defineProps({
    isHidden: { type: Boolean, default: false },
  })
</script>
