<template>
  <div
    :class="['popup', { popup__active: isPopupShow }]"
    @click="clickOutside"
  >
    <div class="popup__body">
      <div class="popup__wrapper">
        <div class="popup__header">
          <div
            class="popup__button"
            @click="popupClose"
          />
        </div>
        <div class="popup__content">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import './style.scss'
  import {
    onMounted,
    defineProps,
    defineEmits,
    onBeforeUnmount,
    watch,
  } from 'vue'
  import { scrollBarShow, scrollBarHidden } from 'src/features/scrollBar'

  const emit = defineEmits(['close'])

  const props = defineProps({
    isPopupShow: { type: Boolean, default: false },
  })

  watch(
    () => props.isPopupShow,
    () => {
      if (props.isPopupShow) {
        return scrollBarHidden()
      }
      setTimeout(() => {
        scrollBarShow()
      }, 500)
    }
  )

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === '27') emit('close')
  }

  const popupClose = () => {
    emit('close')
  }

  const clickOutside = (event: MouseEvent) => {
    if (
      event &&
      event.target &&
      !(event.target as HTMLElement)?.closest('.popup__content')
    ) {
      emit('close')
    }
  }

  onMounted(() => {
    document.addEventListener('keydown', onKeyDown)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('keydown', onKeyDown)
  })
</script>
