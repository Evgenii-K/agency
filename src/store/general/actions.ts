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
  async loadGeneralInfo ({ dispatch }): Promise<void> {
    await dispatch('loadMenuList')
  },
  async loadReviews ({ commit }): Promise<void> {
    if (loadReviewTimeOut) {
      clearTimeout(loadReviewTimeOut)
    }
    return await new Promise<void>((resolve) => {
      loadReviewTimeOut = setTimeout(() => {
        commit('mutateReviews', reviewsJSON.reviews)
        clearTimeout(loadReviewTimeOut)
        resolve()
      }, 3500)
    })
  },
  updateReview (_, payload): void {
    const text = JSON.stringify(payload)
    const b = new Blob([text], { type: 'text/plain' });
    const url = window.URL.createObjectURL(b);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sendmessage.json';
    a.click()
  },
  updateMenu ({ commit }, payload): void {
    commit('mutateIsMenuOpen', payload)
  },
  updateSendOpen ({ commit }, payload): void {
    commit('mutateIsSendOpen', payload)
  },
  updateLoader ({ commit }, payload): void {
    commit('mutateIsLoader', payload)
  },
  updateLanguage ({ commit }, payload): void {
    commit('mutateLanguages', payload)
  }
}

export default actions
