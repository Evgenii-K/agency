import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { GeneralStateInterface } from './state'
import reviewsJSON from '../../json/reviews.json'

let loadReviewTimeOut: ReturnType<typeof setTimeout>

const actions: ActionTree<GeneralStateInterface, StateInterface> = {
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
