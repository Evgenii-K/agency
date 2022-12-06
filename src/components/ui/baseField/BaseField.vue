<template>
  <div
    :class="['form-field', {'form-field--fullSize': fullSize}]"
  >
    <label
      :class="[
        'form-field__placeholder',
        'form-placeholder',
        {
          'form-placeholder--fill': modelValue,
          'form-placeholder--focus': isInputFocus,
          'form-placeholder--hover': (isInputHover || isLabelHover) && !isInputFocus,
          'form-placeholder--error': isErrored && !isInputFocus,
        }
      ]"
      :for="uniqueId"
      @mouseover="isLabelHover = !isLabelHover"
      @mouseleave="isLabelHover = !isLabelHover"
    >
      {{ placeholder }}
    </label>
    <input
      v-if="!isTextarea"
      :id="uniqueId"
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
    <textarea
      v-else
      :id="uniqueId"
      :class="[
        'form-field__input form-input form-input--noneResize',
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
    <div v-if="(isErrored && !isInputFocus)" class="form-field__error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits, ref } from 'vue'
  import './style.scss'

  defineProps({
    uniqueId: { type: String, required: true },
    modelValue: { type: String, required: true },
    placeholder: { type: String, default: '' },
    isDisabled: { type: Boolean, default: false },
    isErrored: { type: Boolean, default: false },
    errorMessage: { type: String, default: '' },
    fullSize: { type: Boolean, default: false },
    isTextarea: { type: Boolean, default: false },
  })

  const emits = defineEmits(['update:modelValue'])

  const isInputFocus = ref(false)
  const isInputHover = ref(false)
  const isLabelHover = ref(false)

  const onInputFocus = () => {
    isInputFocus.value = true
  }

  const onInputBlur = () => {
    isInputFocus.value = false
  }

</script>
