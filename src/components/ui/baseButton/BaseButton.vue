<template>
  <q-btn
    :class="styles"
    @click="clickHandlerInit"
  >
    {{ text }}
  </q-btn>
</template>

<script setup lang="ts">
  import { defineProps, computed } from 'vue'
  import './style.scss'

  const props = defineProps({
    text: { type: String, required: true },
    clickHandler: { type: Function, required: true },
    isDisabled: { type: Boolean, default: false },
    isOutline: { type: Boolean, default: false },
  })

  const clickHandlerInit = () => {
    if (typeof props.clickHandler === 'function') {
      props.clickHandler()
    }
  }

  const styles = computed(() => [
    'form-btn',
    { 'form-btn--disabled': props.isDisabled },
  ])
</script>
