<template>
  <loader :is-hidden="isLoaderHidden" />
  <Header />
  <burger-menu />
  <router-view />
  <Footer />
  <send-us :is-open="isSendUsShown" @close="isSendUsClose" />
</template>

<script setup lang="ts">
import BurgerMenu from './components/burgerMenu/BurgerMenu.vue';
import Header from 'src/components/header/Header.vue'
import Footer from 'src/components/footer/Footer.vue'
import Loader from 'src/components/loader/Loader.vue'
import SendUs from './components/sendUs/SendUs.vue';
import { onMounted, computed } from 'vue'
import { useStore } from 'src/store'

const state = useStore()

const isSendUsShown = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return state.getters['general/getIsSendOpen'] as boolean
})

const isSendUsClose = () => {
  void state.dispatch('general/switchSendOpen', false)
}

const isLoaderHidden = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return state.getters['general/getIsLoaderHidden'] as boolean
})

const initApp = async () => {
  void state.dispatch('general/switchLoader', false)
  await state.dispatch('general/loadReviews')
  void state.dispatch('general/switchLoader', true)
}

onMounted(async () => {
  if (window.matchMedia('(prefers-color-scheme)').media !== 'not all' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.dataset.theme = 'dark'
  } else {
    document.body.dataset.theme = ''
  }

  await initApp()
})
</script>
