<template>
  <section class="start__wrapper">
    <h1 class="start__header">{{ $t('mainPage.start.title') }}</h1>
    <div class="start__content">
      <span>{{ $t('mainPage.start.contentFirst') }}</span>
      <span>{{ $t('mainPage.start.contentSecond') }}</span>
    </div>
    <base-button
      :click-handler="clickHandler"
      :text="$t('mainPage.start.startProject')"
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
            &nbsp;{{ $t('mainPage.start.greatProject') }}
          </li>
          <li>
            800+&nbsp;<span>{{ $t('mainPage.start.done') }}</span>
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
            {{ $t('mainPage.start.billAdams') }}
            <div class="start-review__subtitle">
              {{ $t('mainPage.start.CEOUpTech') }}
            </div>
          </div>
        </div>
        {{ $t('mainPage.start.ceoComment') }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import './style.scss'
  import BaseButton from 'src/components/ui/baseButton/BaseButton.vue'
  import Dots from 'src/components/ui/dots/Dots.vue'
  import { useStore } from 'src/store'
  import { computed } from '@vue/reactivity'

  const state = useStore()

  const isSendOpen = computed(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return (state.getters['general/getIsSendOpen'] as boolean)
  })

  const clickHandler = () => {
    state.commit('general/mutateIsSendOpen', !isSendOpen.value)
  }
</script>
