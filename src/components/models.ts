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
