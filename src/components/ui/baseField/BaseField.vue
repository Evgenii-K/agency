<template>
  <div class="form-field">
    <label
      v-if="label"
      class="form-field__label"
    >
      {{ label }}
    </label>
    <input
      ref="userNameRef"
      :class="[
        'form-field__input form-input',
        {
          'form-input--disabled': isDisabled,
          'form-input--errored': isErrored,
        },
      ]"
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      @input="
        emits('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
  </div>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue'
  import './style.scss'

  defineProps({
    modelValue: { type: String, required: true },
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    isDisabled: { type: Boolean, default: false },
    isErrored: { type: Boolean, default: false },
    onBlur: { type: Function, default: null },
    onInput: { type: Function, default: null },
    onFocus: { type: Function, default: null },
  })

  const emits = defineEmits(['update:modelValue'])
</script>
