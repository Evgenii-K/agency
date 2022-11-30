import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { GeneralStateInterface } from './state'
const getters: GetterTree<GeneralStateInterface, StateInterface> = {
  getIsGeneralLoading (state): boolean {
    return state.isGeneralLoading
  },
  getIsSendOpen (state): boolean {
    return state.isSendOpen
  },
  getIsMenuOpen (state): boolean {
    return state.isMenuOpen
  }

}

export default getters
