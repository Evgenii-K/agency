<template>
  <section class="services__wrapper">
    <div class="services__content">
      <h3 class="services__subtitle">Our Services</h3>
      <h2 class="services__title">Perfect and Fast Movement</h2>
      <div class="services__article">
        We move with make a Creative Strategy for help your business goal, we
        help to improve your income by a services we have. make your content
        look interesting and make people look for your business
      </div>
      <div class="services__more">
        <a href="#">
          Read more
          <q-icon
            name="arrow_forward"
            class="services__arrow"
          />
        </a>
      </div>
    </div>
    <div class="services__buttons">
      <services-button
        v-for="button in buttons"
        :key="button.text"
        :text="button.text"
        :color="button.color"
      >
        <q-icon :name="button.iconName" />
      </services-button>
    </div>
  </section>
</template>

<script setup lang="ts">
  import './style.scss'
  import ServicesButton from '../../../../components/ui/servicesButton/ServicesButton.vue'

  const buttons = [
    {
      text: 'Social Media Management',
      color: '#377DFF',
      iconName: 'desktop_windows',
    },
    {
      text: 'Search Engine Opimization',
      color: '#FF2D2D',
      iconName: 'settings',
    },
    { text: 'Design', color: '#7CE761', iconName: 'fa-solid fa-pen-nib' },
    { text: 'Ads', color: '#FFA800', iconName: 'live_tv' },
  ]
</script>
