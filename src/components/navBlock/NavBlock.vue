<template>
  <div class="nav-block__links">
    <nav class="nav-block__nav">
      <div class="nav-block__nav-item nav-block__nav-item--select">Home</div>
      <div class="nav-block__nav-item">About</div>
      <div class="nav-block__nav-item">Services</div>
      <div class="nav-block__nav-item">Projects</div>
    </nav>
    <div class="nav-block__languages">
      <div class="nav-block__language nav-block__language--select">EN</div>
      <div class="nav-block__language">RU</div>
    </div>
  </div>
  <base-button
    class="nav-block__button"
    :click-handler="clickHandler"
    text="Contact us"
    outline
  />
</template>

<script setup lang="ts">
  import './style.scss'
  import BaseButton from 'src/components/ui/baseButton/BaseButton.vue'
  import { useStore } from 'src/store'
  import { computed } from '@vue/reactivity'

  const state = useStore()

  const isSendOpen = computed(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return (state.getters['general/getIsSendOpen'] as boolean)
  })

  const clickHandler = () => {
    state.commit('general/mutateIsSendOpen', !isSendOpen.value)
  }
</script>
