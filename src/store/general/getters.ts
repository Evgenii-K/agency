import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { GeneralStateInterface } from './state'
import { IReviews } from 'components/models'

const getters: GetterTree<GeneralStateInterface, StateInterface> = {
  getIsGeneralLoading (state): boolean {
    return state.isGeneralLoading
  },
  getIsMenuOpen (state): boolean {
    return state.isMenuOpen
  },
  getIsSendOpen (state): boolean {
    return state.isSendUsOpen
  },
  getReviews (state): IReviews[] {
    return state.reviews
  },
  getIsLoaderHidden (state): boolean {
    return state.isLoaderHidden
  },
}

export default getters
