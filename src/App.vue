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
import { onMounted, ref, computed } from 'vue'
import { useStore } from 'src/store'

const state = useStore()

const loaderTimeout = ref<typeof setTimeout | undefined>()
const isLoaderHidden = ref(false)

const isSendUsShown = computed(() => {
  // eslint-disable-next-line
  return state.getters['general/getIsSendOpen'] as boolean
})

const isSendUsClose = () => {
  // eslint-disable-next-line
  state.dispatch('general/switchSendOpen', false)
}

onMounted(() => {
  if (loaderTimeout.value) {
    clearTimeout(loaderTimeout.value)
  }

  loaderTimeout.value = setTimeout(() => {
    isLoaderHidden.value = true
  }, 1000)

  if (window.matchMedia('(prefers-color-scheme)').media !== 'not all' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.dataset.theme = 'dark'
  } else {
    document.body.dataset.theme = ''
  }
})
</script>
