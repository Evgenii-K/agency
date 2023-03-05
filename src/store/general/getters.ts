import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { GeneralStateInterface } from './state'
import { IReviews } from 'components/models'

const getters: GetterTree<GeneralStateInterface, StateInterface> = {
  getIsGeneralLoading (state): boolean {
    return state.isGeneralLoading
  },
  getIsSendOpen (state): boolean {
    return state.isSendOpen
  },
  getIsMenuOpen (state): boolean {
    return state.isMenuOpen
  },
  getReviews (state): IReviews[] {
    return state.reviews
  }
}

export default getters
