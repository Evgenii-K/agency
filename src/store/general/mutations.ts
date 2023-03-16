import { MutationTree } from 'vuex'
import { GeneralStateInterface } from './state'

const mutation: MutationTree<GeneralStateInterface> = {
  mutateIsMenuOpen (state, payload: boolean): void {
    const calcPayload = state.isMenuOpen ? false : payload

    if (calcPayload) {
      document.body.classList.add('__hidden')
    } else {
      document.body.classList.remove('__hidden')
    }
    state.isMenuOpen = calcPayload
  },
  mutateIsSendOpen (state, payload: boolean): void {
    state.isSendUsOpen = payload
  },
  mutateReviews (state, payload: []): void {
    state.reviews = payload
  },
  mutateIsLoader (state, payload: boolean): void {
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
