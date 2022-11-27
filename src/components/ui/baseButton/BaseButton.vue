<template>
  <q-btn
    :class="['form-btn', {
      'form-btn--disabled': isDisabled,
      'form-btn--outline': outline,
      'form-btn--reverse': rightIcon,
      'form-btn--fullSize': fullSize
    }]"
    @click="clickHandlerInit"
  >
    <slot/>
    {{ text }}
  </q-btn>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'
  import './style.scss'

  const props = defineProps({
    text: { type: String, required: true },
    clickHandler: { type: Function, required: true },
    isDisabled: { type: Boolean, default: false },
    outline: { type: Boolean, default: false },
    rightIcon: { type: Boolean, default: false },
    fullSize: { type: Boolean, default: false },
  })

  const clickHandlerInit = () => {
    if (typeof props.clickHandler === 'function') {
      props.clickHandler()
    }
  }
</script>
