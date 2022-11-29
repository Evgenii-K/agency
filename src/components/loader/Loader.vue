<template>
  <div :class="['loader', {'loader--hidden': isHidden }]">
    <div class="loader__title-block">
      <img class="loader__logo" src="../../assets/img/mainLabel.png" />
      <div class="loader__title"><span>Agency</span>Creative</div>
    </div>
    <div class="loader__subtitle">will help to reach your goals. </div>
    <div class="loader__babble loader__babble--red" />
    <div class="loader__babble loader__babble--blue" />
    <div class="loader__babble loader__babble--red" />
    <div class="loader__babble loader__babble--blue" />
  </div>
</template>

<script setup lang="ts">
  import './style.scss'
  import { defineProps } from 'vue'

  defineProps({
    isHidden: { type: Boolean, default: false },
  })

</script>
