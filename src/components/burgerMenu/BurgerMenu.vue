<template>
  <div :class="['burger-menu', {'burger-menu--open': isMenuOpen}]">
    <nav-block />
    <social-block />
  </div>
</template>

<script setup lang="ts">
  import './style.scss'
  import NavBlock from '../navBlock/NavBlock.vue';
  import SocialBlock from 'src/components/socialBlock/SocialBlock.vue'
  import { useStore } from 'src/store'
  import { computed } from '@vue/reactivity'

  const state = useStore()

  const isMenuOpen = computed(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return (state.getters['general/getIsMenuOpen'] as boolean)
  })
</script>
