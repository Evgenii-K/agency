import { IReviews } from 'components/models'

export interface GeneralStateInterface {
  isGeneralLoading: boolean;
  isMenuOpen: boolean;
  isSendUsOpen: boolean;
  reviews: IReviews[];
}

const state: GeneralStateInterface = {
  isGeneralLoading: true,
  isMenuOpen: false,
  isSendUsOpen: false,
  reviews: [],
}

export default state
