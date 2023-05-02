<template>
  <section class="collaboration__wrapper">
    <div class="collaboration__photo-block photo-block">
      <div class="photo-block__images">
<<<<<<< Updated upstream
        <div class="photo-block__image" />
        <div class="photo-block__image" />
=======
        <img
          class="photo-block__image"
          :src="require('src/assets/img/MainPage/collab-second.png')"
          :srcset="
            require('src/assets/img/MainPage/collab-second.png') +
            ' 1x, ' +
            require('src/assets/img/MainPage/collab-second@2x.png') +
            ' 2x'
          "
        />
        <img
          class="photo-block__image"
          :src="require('src/assets/img/MainPage/collab-first.png')"
          :srcset="
            require('src/assets/img/MainPage/collab-first.png') +
            ' 1x, ' +
            require('src/assets/img/MainPage/collab-first@2x.png') +
            ' 2x'
          "
        />
>>>>>>> Stashed changes
      </div>
      <dots
        class="photo-block__dots photo-block__dots--blue"
        :color="dotColor"
        :size="10"
      />
      <dots
        class="photo-block__dots photo-block__dots--red-first"
        :color="dotStaticColor"
      />
      <dots
        class="photo-block__dots photo-block__dots--red-second"
        :color="dotStaticColor"
      />
    </div>
    <div class="collaboration__content-block">
      <h2 class="collaboration__header">
        {{ $t('mainPage.collaboration.header') }}
      </h2>
      <div class="collaboration__content">
        {{ $t('mainPage.collaboration.content') }}
      </div>
      <base-button
        :click-handler="clickHandler"
        :text="$t('mainPage.collaboration.button')"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  import './style.scss'
  import BaseButton from 'src/components/ui/baseButton/BaseButton.vue'
  import Dots from 'src/components/ui/dots/Dots.vue'
  import { onBeforeMount, ref, defineEmits } from 'vue'
  import { dotsColor } from 'src/helpers/constant'

  const dotColor = ref(dotsColor.blue)
  const dotStaticColor = dotsColor.orange

  const emit = defineEmits(['onSendOpen'])

  const clickHandler = () => {
    emit('onSendOpen')
  }

  onBeforeMount(() => {
    if (document.body.dataset.theme === 'dark') {
      dotColor.value = dotsColor.gray
    }
  })
</script>
