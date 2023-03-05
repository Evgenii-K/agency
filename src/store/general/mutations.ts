import { MutationTree } from 'vuex'
import { GeneralStateInterface } from './state'

const mutation: MutationTree<GeneralStateInterface> = {
  mutateIsGeneralLoading (state: GeneralStateInterface, payload: boolean): void {
    state.isGeneralLoading = payload
  },
  mutateIsSendOpen (state: GeneralStateInterface, payload: boolean): void {
    if (payload) {
      document.body.classList.add('__hidden')
      state.isSendOpen = payload
    } else {
      document.body.classList.remove('__hidden')
      state.isMenuOpen = payload
      state.isSendOpen = payload
    }
  },
  mutateIsMenuOpen (state: GeneralStateInterface, payload: boolean): void {
    const calcPayload = state.isSendOpen ? false : payload

    if (calcPayload) {
      document.body.classList.add('__hidden')
      state.isMenuOpen = payload
    } else {
      document.body.classList.remove('__hidden')
      state.isMenuOpen = calcPayload
      state.isSendOpen = calcPayload
    }
  },
  mutateReviews (state: GeneralStateInterface, payload: []): void {
    state.reviews = payload
  }
}

export default mutation
