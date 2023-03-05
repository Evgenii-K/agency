import { IReviews } from 'components/models'

export interface GeneralStateInterface {
  isGeneralLoading: boolean;
  isSendOpen: boolean;
  isMenuOpen: boolean;
  reviews: IReviews[];
}

const state: GeneralStateInterface = {
  isGeneralLoading: true,
  isSendOpen: false,
  isMenuOpen: false,
  reviews: [],
}

export default state
