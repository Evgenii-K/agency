<template>
  <div class="header">
    <q-toolbar class="header__wrapper">
      <q-avatar class="header__logo">
        <img src="../../assets/img/Logo.png"/>
      </q-avatar>
      <burger-button />
    </q-toolbar>
  </div>
</template>

<script setup lang="ts">
  import './style.scss'
  import BurgerButton from '../ui/burgerButton/BurgerButton.vue';
</script>
