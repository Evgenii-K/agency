import { IReviews, ILanguage, ELanguageName } from 'components/models'

export interface GeneralStateInterface {
  isGeneralLoading: boolean;
  isMenuOpen: boolean;
  isSendUsOpen: boolean;
  reviews: IReviews[];
  isLoaderHidden: boolean;
  languages: ILanguage[];
}

const state: GeneralStateInterface = {
  isGeneralLoading: true,
  isMenuOpen: false,
  isSendUsOpen: false,
  reviews: [],
  isLoaderHidden: false,
  languages: [
    { id: 0, name: ELanguageName.EN, selected: true },
    { id: 1, name: ELanguageName.RU, selected: false },
  ]
}

export default state
