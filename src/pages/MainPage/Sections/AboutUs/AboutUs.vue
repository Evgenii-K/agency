<template>
  <section class="about-us__wrapper">
    <h3 class="about-us__subtitle">{{ $t('mainPage.aboutUs.subtitle') }}</h3>
    <h2 class="about-us__title">{{ $t('mainPage.aboutUs.title') }}</h2>
    <div class="about-us__content">
      <div class="about-us__articles">
        <div class="about-us__article">
          {{ $t('mainPage.aboutUs.article') }}
        </div>
        <div class="about-us__article">
          {{ $t('mainPage.aboutUs.article') }}
        </div>
        <div class="about-us__buttons">
          <base-button
            :click-handler="clickHandler"
            :text="$t('mainPage.aboutUs.subtitle')"
          />
          <base-button
            :click-handler="clickHandler"
            :text="$t('mainPage.aboutUs.buttonStory')"
            outline
          >
            <q-icon name="play_circle_outline" />
          </base-button>
        </div>
      </div>
      <div class="about-us__image about-us-image">
        <img
          :src="imageSrc"
          alt="about-us project"
        />
        <dots
          class="about-us-image__dots about-us-image__dots--pink"
          :color="dotColors[0]"
        />
        <dots
          class="about-us-image__dots about-us-image__dots--red"
          :color="dotColors[1]"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import './style.scss'
  import BaseButton from 'src/components/ui/baseButton/BaseButton.vue'
  import Dots from 'src/components/ui/dots/Dots.vue'

  const dotColors = ['#EB00FF', '#FF5C00']
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
  const imageSrc = require('src/assets/img/MainPage/about-us.png')

  const clickHandler = () => {
    console.log('About-us')
  }
</script>
