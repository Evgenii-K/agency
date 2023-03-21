<template>
  <section class="portfolio__wrapper">
    <h3 class="portfolio__subtitle">{{ $t('mainPage.portfolio.subtitle') }}</h3>
    <h2 class="portfolio__title">{{ $t('mainPage.portfolio.title') }}</h2>
    <div class="portfolio__article">
      {{ $t('mainPage.portfolio.article') }}
    </div>
    <div class="portfolio__works">
      <div
        v-for="work in works"
        :key="work.text"
        class="portfolio__work"
      >
        {{ work.text }}
      </div>
    </div>
    <base-button
      :click-handler="clickHandler"
      outline
      :text="$t('mainPage.portfolio.button')"
    />
    <dots
      class="portfolio__dots portfolio__dots--first"
      :color="dotsColor"
    />
    <dots
      class="portfolio__dots portfolio__dots--second"
      :color="dotsColor"
    />
  </section>
</template>

<script setup lang="ts">
  import './style.scss'
  import BaseButton from 'src/components/ui/baseButton/BaseButton.vue'
  import Dots from 'src/components/ui/dots/Dots.vue'
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()

  const dotsColor = '#EB00FF'

  const works = [
    { text: t('mainPage.portfolio.workFirst') },
    { text: t('mainPage.portfolio.workSecond') },
    { text: t('mainPage.portfolio.workThird') },
  ]

  const clickHandler = () => {
    console.log('isPortfolioClick')
  }
</script>
