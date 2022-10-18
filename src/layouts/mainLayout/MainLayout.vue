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

<script setup lang="ts">
  import { onMounted } from 'vue'
  import Loader from 'components/loader/Loader.vue'
  import useController from './controller'

  const { IsGeneralLoading, onMountedCallback } = useController()

  onMounted(onMountedCallback)
</script>
