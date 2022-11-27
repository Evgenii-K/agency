<template>
  <div class="start__wrapper">
    <h1 class="start__header">Make your dream business goal come true</h1>
    <div class="start__content">
      when you need us for improve your business, then come with us to help your business have reach it, you just sit and feel that goal.
    </div>
    <base-button
      :click-handler="clickHandler"
      text="Start Project"
    />
    <div class="start__image start-image">
      <img src="../../../../assets/img/MainPage/Start.png" alt="Start project" />
      <div class="start-image__done">
        <ul>
          <li>
            <q-icon
              name="fa fa-star"
              class="start-image__star"
            />
            &nbsp;Great Project
          </li>
          <li>
            800+&nbsp;<span>Done</span>
          </li>
        </ul>
      </div>
      <dots
        class="start-image__dots start-image__dots--red"
        color="#FF5C00"
      />
      <dots class="start-image__dots start-image__dots--blue" />
      <div class="start-image__review start-review">
        <div class="start-review__header">
          <img src="../../../../assets/img/MainPage/Bill.png" class="review__logo"/>
          <div class="start-review__title">
            Bill Adams
            <div class="start-review__subtitle">
              CEO UpTech
            </div>
          </div>
        </div>
        “ This team is really the best in its field,I don't regret working with them, and will come back again thanks “
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import './style.scss'
import { defineEmits } from 'vue'
import BaseButton from 'src/components/ui/baseButton/BaseButton.vue'
import Dots from 'src/components/ui/dots/Dots.vue'

const emit = defineEmits(['on-send-click'])

const clickHandler = () => {
  console.log('start');
  emit('on-send-click')
}
</script>
