<template>
  <section class="services__wrapper">
    <div class="services__content">
      <h3 class="services__subtitle">{{ $t('mainPage.services.subtitle') }}</h3>
      <h2 class="services__title">{{ $t('mainPage.services.title') }}</h2>
      <div class="services__article">
        {{ $t('mainPage.services.article') }}
      </div>
      <div class="services__more">
        <a href="#">
          {{ $t('mainPage.services.link') }}
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
  import ServicesButton from 'components/ui/servicesButton/ServicesButton.vue'
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()

  const buttons = [
    {
      text: t('mainPage.services.buttonFirst'),
      color: '#377DFF',
      iconName: 'desktop_windows',
    },
    {
      text: t('mainPage.services.buttonSecond'),
      color: '#FF2D2D',
      iconName: 'settings',
    },
    {
      text: t('mainPage.services.buttonThird'),
      color: '#7CE761',
      iconName: 'fa-solid fa-pen-nib',
    },
    {
      text: t('mainPage.services.buttonFourth'),
      color: '#FFA800',
      iconName: 'live_tv',
    },
  ]
</script>
