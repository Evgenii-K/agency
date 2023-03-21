<template>
  <div class="social">
    <q-icon
      :name="name"
      class="social__icon"
    />
  </div>
</template>

<script setup lang="ts">
  import './style.scss'
  import { defineProps } from 'vue'

  defineProps({
    name: { type: String, required: true },
  })
</script>
