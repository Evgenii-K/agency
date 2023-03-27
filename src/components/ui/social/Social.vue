<template>
  <a
    :href="link"
    class="social"
  >
    <q-icon
      :name="name"
      class="social__icon"
    />
  </a>
</template>

<script setup lang="ts">
  import './style.scss'
  import { defineProps } from 'vue'

  defineProps({
    name: { type: String, required: true },
    link: { type: String, required: true },
  })
</script>
