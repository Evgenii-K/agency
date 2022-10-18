<template>
  <div class="form-field">
    <label
      v-if="label"
      class="form-field__label"
    >{{ label }}</label>
    <input
      ref="userNameRef"
      :class="['form-field__input form-input', {'form-input--disabled': isDisabled, 'form-input--errored': isErrored}]"
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'Field',
  props: {
    modelValue: { type: String, required: true },
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    isDisabled: { type: Boolean, default: false },
    isErrored: { type: Boolean, default: false },
    onBlur: { type: Function, default: null },
    onInput: { type: Function, default: null },
    onFocus: { type: Function, default: null }
  },
  emits: ['update:modelValue'],
  setup () {
    return {
    }
  }
})
</script>
