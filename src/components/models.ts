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

