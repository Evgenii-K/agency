<template>
  <section class="collaboration__wrapper">
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
  </section>
</template>

<script setup lang="ts">
  import './style.scss'
  import BaseButton from 'src/components/ui/baseButton/BaseButton.vue'
  // import Dots from 'src/components/ui/dots/Dots.vue'
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
