import { Ref } from 'vue';

export interface ResponseType {
  [k: string]: any; //eslint-disable-line
}

export interface ErrorForm {
  [k: string]: boolean
}

export interface FieldForm {
  value: string;
  validators: {
    [k: string]: (val: string) => boolean;
  };
  errors?: ErrorForm;
}

export interface Form {
  [k: string]: FieldForm
}

export interface UseField {
  value: Ref<string>,
  valid: Ref<boolean>,
  errors: ErrorForm,
}

export interface UseForm {
  [k: string]: UseField
}

export enum EventButton {
  // eslint-disable-next-line no-unused-vars
  MENU = 'menu',
  // eslint-disable-next-line no-unused-vars
  SEND = 'send',
}


export interface IReview {
  id: string,
  name: string,
  specialty: string,
  text: string,
  avatar: any,
  index: number,
}

export interface IReviews {
  id: string,
  ru: IReview,
  en: IReview
}

export interface MouseEventOffset {
  x: number,
  y: number,
}
export interface QuasarMouseEvent {
  isFinal: boolean,
  isFirst: boolean,
  offset: MouseEventOffset
}

export interface ISliderBreakPoints {
  maxWidth: number,
  count: number,
  gap: number,
}

export enum ELanguageName {
  // eslint-disable-next-line no-unused-vars
  EN = 'en',
  // eslint-disable-next-line no-unused-vars
  RU = 'ru',
}

export interface ILanguage {
  id: number,
  name: ELanguageName,
  selected: boolean
}
