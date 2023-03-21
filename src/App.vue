<template>
  <loader :is-hidden="isLoaderHidden" />
  <Header />
  <burger-menu />
  <router-view />
  <Footer />
  <send-us
    :is-open="isSendUsShown"
    @close="isSendUsClose"
  />
</template>

<script setup lang="ts">
  import BurgerMenu from 'components/burgerMenu/BurgerMenu.vue'
  import Header from 'components/header/Header.vue'
  import Footer from 'components/footer/Footer.vue'
  import Loader from 'components/loader/Loader.vue'
  import SendUs from 'components/sendUs/SendUs.vue'
  import { onMounted, computed, watch } from 'vue'
  import { useStore } from 'src/store'
  import { ILanguage } from 'components/models'
  import { useI18n } from 'vue-i18n'
  const { locale } = useI18n({ useScope: 'global' })

  const state = useStore()

  const isSendUsShown = computed(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return state.getters['general/getIsSendOpen'] as boolean
  })

  const isSendUsClose = () => {
    void state.dispatch('general/updateSendOpen', false)
  }

  const isLoaderHidden = computed(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return state.getters['general/getIsLoaderHidden'] as boolean
  })

  const languages = computed(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return state.getters['general/getLanguages'] as ILanguage[]
  })

  watch(
    () => languages,
    () => {
      changeLanguage()
    },
    { deep: true }
  )

  const changeLanguage = () => {
    const currentSelected = languages.value.find((lang) => lang.selected)?.name
    if (!currentSelected) return
    locale.value = currentSelected
  }

  onMounted(() => {
    if (
      window.matchMedia('(prefers-color-scheme)').media !== 'not all' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.body.dataset.theme = 'dark'
    } else {
      document.body.dataset.theme = ''
    }

    const userLang = navigator.language || navigator.language

    if (userLang && typeof userLang === 'string') {
      const currentLangName = userLang.slice(0, 2)

      void state.dispatch('general/updateLanguage', currentLangName)
      changeLanguage()
    }
  })
</script>
