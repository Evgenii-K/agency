<template>
  <div class="nav-block__links">
    <nav class="nav-block__nav">
      <div class="nav-block__nav-item nav-block__nav-item--select">{{ $t('nav.home') }}</div>
      <div class="nav-block__nav-item">{{ $t('nav.about') }}</div>
      <div class="nav-block__nav-item">{{ $t('nav.services') }}</div>
      <div class="nav-block__nav-item">{{ $t('nav.projects') }}</div>
    </nav>
    <div class="nav-block__languages">
      <div
        v-for="lang in languages"
        :key="lang.id"
        :class="['nav-block__language', {'nav-block__language--select': lang.selected }]"
        @click="onLangClick(lang.id)"
      >
        {{ lang.name }}
      </div>
    </div>
  </div>
  <base-button
    class="nav-block__button"
    :click-handler="clickHandler"
    :text="$t('nav.contactUs')"
    outline
  />
</template>

<script setup lang="ts">
  import './style.scss'
  import BaseButton from 'src/components/ui/baseButton/BaseButton.vue'
  import { useStore } from 'src/store'
  import { computed } from '@vue/reactivity'
  import { reactive } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { locale } = useI18n({ useScope: 'global' })

  const state = useStore()

  const languages = reactive([
    { id: 0, name: 'en', selected: true },
    { id: 1, name: 'ru', selected: false },
  ])

  const isSendOpen = computed(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return (state.getters['general/getIsSendOpen'] as boolean)
  })

  const clickHandler = () => {
    state.commit('general/mutateIsSendOpen', !isSendOpen.value)
  }

  const onLangClick = (id: number) => {
    languages.map(lang => {
      lang.selected = false
      if (lang.id === id) {
        lang.selected = true
        locale.value = lang.name
      }
      return lang
    })
  }
</script>
