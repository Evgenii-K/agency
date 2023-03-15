import { IReviews } from 'components/models'

export interface GeneralStateInterface {
  isGeneralLoading: boolean;
  isMenuOpen: boolean;
  isSendUsOpen: boolean;
  reviews: IReviews[];
  isLoaderHidden: boolean;
}

const state: GeneralStateInterface = {
  isGeneralLoading: true,
  isMenuOpen: false,
  isSendUsOpen: false,
  reviews: [],
  isLoaderHidden: false,
}

export default state
