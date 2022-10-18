<template>
  <div class="modal">
    <div class="modal__bg" />
    <div class="modal__wrapper">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  import './style.scss'
</script>
