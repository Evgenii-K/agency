<template>
  <div class="burger-menu__links">
    <nav class="burger-menu__nav">
      <div class="burger-menu__nav-item burger-menu__nav-item--select">Home</div>
      <div class="burger-menu__nav-item">About</div>
      <div class="burger-menu__nav-item">Services</div>
      <div class="burger-menu__nav-item">Projects</div>
    </nav>
    <div class="burger-menu__languages">
      <div class="burger-menu__language burger-menu__language--select">EN</div>
      <div class="burger-menu__language">RU</div>
    </div>
  </div>
  <base-button
    :click-handler="clickHandler"
    text="Contact us"
    outline
    full-size
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
