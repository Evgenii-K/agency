export interface GeneralStateInterface {
  isGeneralLoading: boolean;
  isSendOpen: boolean;
  isMenuOpen: boolean;
}

const state: GeneralStateInterface = {
  isGeneralLoading: true,
  isSendOpen: false,
  isMenuOpen: false,
}

export default state
