<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="j-fixed-element">
      <Loader v-if="IsGeneralLoading" />

      <router-view v-slot="{ Component }">
        <component
          :is="Component"
          :key="Component.name"
        />
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

import { defineComponent, onMounted } from 'vue'
import Loader from 'components/loader/Loader.vue'
import useController from './controller'

export default defineComponent({
  name: 'MainLayout',
  components: { Loader },
  setup () {
    const {
      IsGeneralLoading,
      onMountedCallback
    } = useController()

    onMounted(onMountedCallback)

    return {
      IsGeneralLoading
    }
  }
})
</script>
