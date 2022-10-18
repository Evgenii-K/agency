<template>
  <q-btn
    :class="['form-btn', {'form-btn--disabled': isDisabled}]"
    @click="clickHandler"
  >
    {{ text }}
  </q-btn>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'Button',
  props: {
    text: { type: String, required: true },
    clickHandler: { type: Function, required: true },
    isDisabled: { type: Boolean, default: false }
  },
  setup () {
    return {
    }
  }
})
</script>
