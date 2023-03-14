import { IReviews } from 'components/models'

export interface GeneralStateInterface {
  isGeneralLoading: boolean;
  isMenuOpen: boolean;
  reviews: IReviews[];
}

const state: GeneralStateInterface = {
  isGeneralLoading: true,
  isMenuOpen: false,
  reviews: [],
}

export default state
