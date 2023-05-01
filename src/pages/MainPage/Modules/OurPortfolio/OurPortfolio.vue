<template>
  <section class="portfolio__wrapper">
    <h3 class="portfolio__subtitle">{{ $t('mainPage.portfolio.subtitle') }}</h3>
    <h2 class="portfolio__title">{{ $t('mainPage.portfolio.title') }}</h2>
    <div class="portfolio__article">
      {{ $t('mainPage.portfolio.article') }}
    </div>
    <div class="portfolio__works">
      <a
        v-for="work in works"
        :key="work.text"
        class="portfolio__work"
        href="#"
      >
        {{ work.text }}
      </a>
    </div>
    <base-button
      :click-handler="clickHandler"
      outline
      :text="$t('mainPage.portfolio.button')"
    />
    <dots
      class="portfolio__dots portfolio__dots--first"
      :color="dotsColor.purple"
    />
    <dots
      class="portfolio__dots portfolio__dots--second"
      :color="dotsColor.purple"
    />
  </section>
</template>

<script setup lang="ts">
  import './style.scss'
  import BaseButton from 'src/components/ui/baseButton/BaseButton.vue'
  import Dots from 'src/components/ui/dots/Dots.vue'
  import { dotsColor } from 'src/helpers/constant'
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()

  const works = [
    { text: t('mainPage.portfolio.workFirst') },
    { text: t('mainPage.portfolio.workSecond') },
    { text: t('mainPage.portfolio.workThird') },
  ]

  const clickHandler = () => {
    console.log('isPortfolioClick') // eslint-disable-line
  }
</script>
