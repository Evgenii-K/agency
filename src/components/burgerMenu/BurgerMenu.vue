<template>
  <div :class="['burger-menu', {'burger-menu--open': isOpen}]">
    <div class="burger-menu__links">
      <nav class="burger-menu__nav">
        <div class="burger-menu__nav-item burger-menu__nav-item--select">Home</div>
        <div class="burger-menu__nav-item">About</div>
        <div class="burger-menu__nav-item">Services</div>
        <div class="burger-menu__nav-item">Projects</div>
      </nav>
      <div class="burger-menu__languages">
        <div class="burger-menu__language burger-menu__language--select">EN</div>
        <div class="burger-menu__language">RU</div>
      </div>
    </div>
    <base-button
      :click-handler="clickHandler"
      text="Contact us"
      outline
      full-size
    />
    <social-block />
  </div>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue'
  import './style.scss'
  import BaseButton from 'src/components/ui/baseButton/BaseButton.vue'
  import SocialBlock from 'src/components/socialBlock/SocialBlock.vue'

  defineProps({
    isOpen: { type: Boolean, required: true },
  })

  const emit = defineEmits(['on-send-click'])

  const clickHandler = () => {
    emit('on-send-click')
  }
</script>
