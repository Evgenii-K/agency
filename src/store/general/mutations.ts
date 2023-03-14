import { MutationTree } from 'vuex'
import { GeneralStateInterface } from './state'

const mutation: MutationTree<GeneralStateInterface> = {
  mutateIsMenuOpen (state: GeneralStateInterface, payload: boolean): void {
    const calcPayload = state.isMenuOpen ? false : payload

    if (calcPayload) {
      document.body.classList.add('__hidden')
    } else {
      document.body.classList.remove('__hidden')
    }
    state.isMenuOpen = calcPayload
  },
  mutateReviews (state: GeneralStateInterface, payload: []): void {
    state.reviews = payload
  }
}

export default mutation
