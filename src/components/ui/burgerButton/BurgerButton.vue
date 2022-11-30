<template>
  <button
    ref="buttonRef"
    class="burger-button"
    aria-controls="primary-navigation"
    aria-expanded="false"
    @click="onButtonClick"
  >
    <svg class="burger-button__hamburger" viewBox="0 0 10 10" width="25">
      <rect class="line top" width="8" height="1" x="0.9" y="1.6" rx="0.5" />
      <rect class="line middle" width="6" height="1" x="2.1" y="4.4" rx="0.5" />
      <rect class="line bottom" width="8" height="1" x="0.9" y="7.2" rx="0.5" />
    </svg>
  </button>
</template>

<script setup lang="ts">
  import './style.scss'
  import { ref, watch } from 'vue';
  import { useStore } from 'src/store'
  import { computed } from '@vue/reactivity'

  const state = useStore()

  const isSendOpen = computed(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return (state.getters['general/getIsSendOpen'] as boolean)
  })

  const isMenuOpen = computed(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return (state.getters['general/getIsMenuOpen'] as boolean)
  })

  watch(isSendOpen, () => {
    onButtonClick()
  })

  watch(isMenuOpen, () => {
    onButtonClick()
  })

  const buttonRef = ref<HTMLElement>()

  const  onButtonClick = () => {
    if (!buttonRef.value) return

    console.log('isMenuOpen: ', isMenuOpen.value, 'isSendOpen: ', isSendOpen.value);

    // const currentState = buttonRef.value.getAttribute('data-state');

    // if (!currentState || currentState === 'closed') {
    if (isSendOpen.value || isMenuOpen.value) {
      buttonRef.value.setAttribute('data-state', 'opened');
      buttonRef.value.setAttribute('aria-expanded', 'true');
    } else {
      buttonRef.value.setAttribute('data-state', 'closed');
      buttonRef.value.setAttribute('aria-expanded', 'false');
    }
  };
</script>
