<template>
  <div :class="['header', 'q-page-container', { 'header--hidden': isHidden }]">
    <div class="header__wrapper">
      <a
        href="/"
        class="header__label"
      >
        <q-avatar class="header__logo">
          <img src="../../assets/img/header-logo.png" />
        </q-avatar>
        <div class="header__name">Agency<span>Creative</span></div>
      </a>
      <div class="header__nav">
        <nav-block />
      </div>
      <burger-button
        class="header__button"
        @click="clickHandler"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'
  import './style.scss'
  import BurgerButton from '../ui/burgerButton/BurgerButton.vue'
  import NavBlock from '../navBlock/NavBlock.vue'
  import { useStore } from 'src/store'
  import { computed } from '@vue/reactivity'

  defineProps({
    isHidden: { type: Boolean, default: false },
  })

  const state = useStore()

  const isMenuOpen = computed(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return state.getters['general/getIsMenuOpen'] as boolean
  })

  const clickHandler = () => {
    void state.dispatch('general/updateMenu', !isMenuOpen.value)
  }
</script>
