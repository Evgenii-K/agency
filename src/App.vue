<template>
  <Header @on-menu-click="onClick(EventButton.MENU)" />
  <burger-menu
    :is-open="isMenuOpen"
    @on-send-click="onClick(EventButton.SEND)"
  />
  <send-us :is-open="isSendOpen"/>
  <router-view @on-send-click="onClick(EventButton.SEND)"/>
  <Footer />
</template>

<script setup lang="ts">
  import BurgerMenu from './components/burgerMenu/BurgerMenu.vue';
  import SendUs from './components/sendUs/SendUs.vue';
  import Header from 'src/components/header/Header.vue'
  import Footer from 'src/components/footer/Footer.vue'
  import { ref } from 'vue'
  import { EventButton } from 'src/components/models'

  const isMenuOpen = ref(false)
  const isSendOpen = ref(false)

  const onClick = (type: EventButton) => {
    const value = type === EventButton.MENU ? isMenuOpen.value : isSendOpen.value

    if (value) {
      isSendOpen.value = false
      isMenuOpen.value = false
      document.body.classList.remove('__hidden')
    } else {
      document.body.classList.add('__hidden')
      type === EventButton.MENU ? isMenuOpen.value = true : isSendOpen.value = true
      console.log('object', isSendOpen.value);
    }
  }
</script>
