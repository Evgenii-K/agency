<template>
  <section class="collaboration__wrapper">
    <div class="collaboration__photo-block photo-block">
      <div class="photo-block__images">
        <div class="photo-block__image" />
        <div class="photo-block__image" />
      </div>
      <dots class="photo-block__dots photo-block__dots--blue" :color="dotColor" :size="10" />
      <dots class="photo-block__dots photo-block__dots--red-first" color="#FF5C00" />
      <dots class="photo-block__dots photo-block__dots--red-second" color="#FF5C00" />
    </div>
    <div class="collaboration__content-block">
      <h2 class="collaboration__header">Interesting Collaboration With Us?</h2>
      <div class="collaboration__content">
        Help you to reach your business goal
      </div>
      <base-button :click-handler="clickHandler" text="Get Started" />
    </div>
  </section>
</template>

<script setup lang="ts">
import './style.scss'
import BaseButton from 'src/components/ui/baseButton/BaseButton.vue'
import Dots from 'src/components/ui/dots/Dots.vue'
import { onBeforeMount, ref, defineEmits } from 'vue'

const dotColor = ref('#377DFF')

const emit = defineEmits(['onSendOpen'])

const clickHandler = () => {
  emit('onSendOpen')
}

onBeforeMount(() => {
  if (document.body.dataset.theme === 'dark') {
    dotColor.value = '#E2E2E2'
  }
})
</script>
