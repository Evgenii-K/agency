<template>
  <loader :is-hidden="isLoaderHidden" />
  <Header />
  <burger-menu />
  <router-view />
  <Footer />
</template>

<script setup lang="ts">
import BurgerMenu from './components/burgerMenu/BurgerMenu.vue';
import Header from 'src/components/header/Header.vue'
import Footer from 'src/components/footer/Footer.vue'
import Loader from 'src/components/loader/Loader.vue'
import { onMounted, ref } from 'vue'

const loaderTimeout = ref<typeof setTimeout | undefined>()
const isLoaderHidden = ref(false)

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
