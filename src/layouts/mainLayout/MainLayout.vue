<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
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
  import useController from './controller'

  const { onMountedCallback } = useController()

  onMounted(onMountedCallback)
</script>
