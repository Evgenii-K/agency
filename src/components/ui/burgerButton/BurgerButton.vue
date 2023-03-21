<template>
  <button
    ref="buttonRef"
    class="burger-button"
    aria-controls="primary-navigation"
    aria-expanded="false"
    @click="onButtonClick"
  >
    <svg
      class="burger-button__hamburger"
      viewBox="0 0 10 10"
    >
      <rect class="line top" />
      <rect class="line middle" />
      <rect class="line bottom" />
    </svg>
  </button>
</template>

<script setup lang="ts">
  import './style.scss'
  import { ref, watch } from 'vue'
  import { useStore } from 'src/store'
  import { computed } from '@vue/reactivity'

  const state = useStore()

  const isMenuOpen = computed(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return state.getters['general/getIsMenuOpen'] as boolean
  })

  watch(isMenuOpen, () => {
    onButtonClick()
  })

  const buttonRef = ref<HTMLElement>()

  const onButtonClick = () => {
    if (!buttonRef.value) return

    if (isMenuOpen.value) {
      buttonRef.value.setAttribute('data-state', 'opened')
      buttonRef.value.setAttribute('aria-expanded', 'true')
    } else {
      buttonRef.value.setAttribute('data-state', 'closed')
      buttonRef.value.setAttribute('aria-expanded', 'false')
    }
  }
</script>
