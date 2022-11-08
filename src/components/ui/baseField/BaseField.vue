<template>
  <div class="form-field">
    <div
      :class="[
        'form-field__placeholder',
        'form-placeholder',
        {
          'form-placeholder--fill': modelValue,
          'form-placeholder--focus': isInputFocus,
          'form-placeholder--hover': isInputHover && !isInputFocus,
          'form-placeholder--error': isErrored && !isInputFocus,
        }
      ]"
    >
      {{ placeholder }}
    </div>
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
      :value="modelValue"
      @input="emits('update:modelValue', ($event.target as HTMLInputElement).value)"
      @focus="onInputFocus"
      @blur="onInputBlur"
      @mouseover="isInputHover = !isInputHover"
      @mouseleave="isInputHover = !isInputHover"
    />
  </div>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits, ref } from 'vue'
  import './style.scss'

  defineProps({
    modelValue: { type: String, required: true },
    placeholder: { type: String, default: '' },
    isDisabled: { type: Boolean, default: false },
    isErrored: { type: Boolean, default: false },
    onBlur: { type: Function, default: null },
    onInput: { type: Function, default: null },
    onFocus: { type: Function, default: null },
  })

  const emits = defineEmits(['update:modelValue'])

  const isInputFocus = ref(false)
  const isInputHover = ref(false)

  const onInputFocus = () => {
    isInputFocus.value = true
    console.log('focus');
  }

  const onInputBlur = () => {
    isInputFocus.value = false
    console.log('blur');
  }
</script>
