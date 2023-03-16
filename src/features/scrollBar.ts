import { ref, computed } from 'vue'
import { MAIN_WRAPPER } from 'src/helpers/constant'

const body = ref<HTMLElement | null>(null)

body.value = document.querySelector('body')

const scrollBarWidth = computed(() => {
  if (document.querySelector(MAIN_WRAPPER)) {
    return `${
      window.innerWidth -
      (document.querySelector(MAIN_WRAPPER) as HTMLElement)?.offsetWidth
    }px`
  }
  return '0px'
})

const scrollBarHidden = () => {
  if (body.value) {
    body.value.style.paddingRight = scrollBarWidth.value
    body.value.style.overflowY = 'hidden'
  }
}
const scrollBarShow = () => {
  if (body.value) {
    body.value.style.paddingRight = '0px'
    body.value.style.overflowY = 'auto'
  }
}

export { scrollBarShow, scrollBarHidden }
