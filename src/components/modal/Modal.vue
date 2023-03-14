<template>
  <div :class="['popup', { 'popup__active': isPopupShow }]" @click="clickOutside">
    <div class="popup__body">
      <div class="popup__wrapper" :style="{ minWidth: minWidth }">
        <div class="popup__header">
          <burger-button @click="popupClose" />
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
import { onMounted, ref, defineProps, defineEmits, onBeforeUnmount, computed, watch } from 'vue'
import BurgerButton from 'src/components/ui/burgerButton/BurgerButton.vue';

const emit = defineEmits(['close'])
const mainWrapper = '#q-app'

const props = defineProps({
  isPopupShow: { type: Boolean, default: false },
  minWidth: { type: String, default: '800px' },
})

const body = ref<HTMLElement | null>(null)

watch(() => props.isPopupShow, () => {
  if (props.isPopupShow) {
    return scrollBarHidden()
  }
  setTimeout(() => {
    scrollBarShow()
  }, 500);
})

const onKeyDown = (event: KeyboardEvent) => {
  if (event.key === '27') emit('close')
}

const scrollBarWidth = computed(() => {
  if (document.querySelector(mainWrapper)) {
    return `${window.innerWidth - (document.querySelector(mainWrapper) as HTMLElement)?.offsetWidth}px`
  }
  return '0px'
})

const popupClose = () => {
  emit('close')
}

const clickOutside = (event: MouseEvent) => {
  if (event && event.target && !(event.target as HTMLElement)?.closest('.popup__content')) {
    emit('close')
  }
}

const scrollBarHidden = () => {
  if (body.value) {
    body.value.style.paddingRight = scrollBarWidth.value
    body.value.style.overflow = 'hidden';
  }
}
const scrollBarShow = () => {
  if (body.value) {
    body.value.style.paddingRight = '0px'
    body.value.style.overflow = 'auto'
  }
}

onMounted(() => {
  body.value = document.querySelector('body')
  document.addEventListener('keydown', onKeyDown)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeyDown)
})
</script>
