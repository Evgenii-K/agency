<template>
  <section class="services__wrapper">
    <div class="services__content">
      <h3 class="services__subtitle">Our Services</h3>
      <h2 class="services__title">Perfect and Fast Movement</h2>
      <div class="services__article">
        We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business
      </div>
      <div class="services__more">
        Read more
        <q-icon
          name="arrow_forward"
          class="services__arrow"
        />
      </div>
    </div>
    <div class="services__buttons">
      <services-button
        text="Social Media Management"
        color="#377DFF"
      >
        <q-icon
          name="desktop_windows"
          style="font-size: 4.2rem;"
        />
      </services-button>
      <services-button
        text="Search Engine Opimization"
        color="#FF2D2D"
      >
        <q-icon
          name="settings"
          style="font-size: 4.2rem;"
        />
      </services-button>
      <services-button
        text="Design"
        color="#7CE761"
      >
        <q-icon
          name="desktop_windows"
          style="font-size: 4.2rem;"
        />
      </services-button>
      <services-button
        text="Ads"
        color="#FFA800"
      >
        <q-icon
          name="live_tv"
          style="font-size: 4.2rem;"
        />
      </services-button>
    </div>
  </section>
</template>

<script setup lang="ts">
import './style.scss'
import ServicesButton from '../../../../components/ui/servicesButton/ServicesButton.vue'


</script>
