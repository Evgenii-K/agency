import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { GeneralStateInterface } from './state'
import LoadService from '../../services/LoadService'
import apiLinks from '../apiLinks.json'
import reviewsJSON from '../../json/reviews.json'

let loadReviewTimeOut: ReturnType<typeof setTimeout>

const actions: ActionTree<GeneralStateInterface, StateInterface> = {
  async loadMenuList (): Promise<void> {
    await LoadService.apiRequest((apiLinks as {[k: string]: string}).menu).then(
      result => {
        // eslint-disable-next-line no-console
        console.log('RESULT!', result)
      })
  },
  async loadGeneralInfo (context): Promise<void> {
    await context.dispatch('loadMenuList')
  },
  loadReviews (context): void {
    if (loadReviewTimeOut) {
      clearTimeout(loadReviewTimeOut)
    }
    loadReviewTimeOut = setTimeout(() => {
      context.commit('mutateReviews', reviewsJSON.reviews)
    }, 1000)
  },
  switchMenu ({ commit }, payload): void {
    commit('mutateIsMenuOpen', payload)
  },
  switchSendOpen ({ commit }, payload): void {
    commit('mutateIsSendOpen', payload)
  }
}

export default actions
