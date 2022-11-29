<template>
  <div class="services-button">
    <div
      class="services-button__round"
      :style="{ backgroundColor: color }"
    >
      <slot />
    </div>
    <div class="services-button__text">
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'
  import './style.scss'

  defineProps({
    text: { type: String, required: true },
    color: { type: String, required: true },
  })
</script>
