import { MutationTree } from 'vuex'
import { GeneralStateInterface } from './state'
import { scrollBarShow, scrollBarHidden } from 'src/features/scrollBar'

const mutation: MutationTree<GeneralStateInterface> = {
  mutateIsMenuOpen (state, payload: boolean): void {
    const calcPayload = state.isMenuOpen ? false : payload

    if (calcPayload) {
      scrollBarHidden()
      state.isMenuOpen = calcPayload
      // document.body.classList.add('__hidden')
    } else {
      // document.body.classList.remove('__hidden')
      state.isMenuOpen = calcPayload
      setTimeout(() => {
        scrollBarShow()
      }, 500)
    }
  },
  mutateIsSendOpen (state, payload: boolean): void {
    state.isSendUsOpen = payload
  },
  mutateReviews (state, payload: []): void {
    state.reviews = payload
  },
  mutateIsLoader (state, payload: boolean): void {
    if (payload) {
      state.isLoaderHidden = payload
      setTimeout(() => {
        scrollBarShow()
      }, 1000)
      return
    }
    scrollBarHidden()
    state.isLoaderHidden = payload
  },
  mutateLanguages (state, payload: string): void {
    state.languages?.map(lang => {
      lang.selected = false
      if (lang.name === payload) {
        lang.selected = true
      }
      return lang
    })
  }
}

export default mutation
