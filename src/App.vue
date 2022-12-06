<template>
  <loader :is-hidden="isLoaderHidden" />
  <Header :is-hidden="isSendOpen" />
  <burger-menu />
  <send-us :is-open="isSendOpen"/>
  <router-view />
  <Footer />
</template>

<script setup lang="ts">
  import BurgerMenu from './components/burgerMenu/BurgerMenu.vue';
  import SendUs from './components/sendUs/SendUs.vue';
  import Header from 'src/components/header/Header.vue'
  import Footer from 'src/components/footer/Footer.vue'
  import Loader from 'src/components/loader/Loader.vue'
  import { onMounted, ref } from 'vue'
  import { useStore } from 'src/store'
  import { computed } from '@vue/reactivity'

  const state = useStore()

  const isSendOpen = computed(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return (state.getters['general/getIsSendOpen'] as boolean)
  })

  const loaderTimeout = ref<typeof setTimeout | undefined>()
  const isLoaderHidden = ref(false)

  onMounted(() => {
    if (loaderTimeout.value) {
      clearTimeout(loaderTimeout.value)
    }

    loaderTimeout.value = setTimeout(() => {
      isLoaderHidden.value = true
    }, 1000)

    const hour = new Date().getHours()

    if (hour > 22 || hour < 8) {
      document.body.dataset.theme = 'dark'
    }
  })
</script>
