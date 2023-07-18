import { TemplateRef } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { EFormFieldInputType } from '../enums/form-field-input-type.enum';
import { EFormFieldType } from '../enums/form-field-type.enum';
import { IFormObservables } from './form-observables.interface';

export interface IFormFieldError {
  // Type can be one of required, email, maxLength...
  type: string;
  // Message to show if error exists
  message: string;
}

export interface IBaseFormField extends IFormObservables {
  key: string;
  type?: EFormFieldType;
  formFieldId?: string;
  classes?: string;
  label?: string;
  placeholder?: string;
  validators?: ValidatorFn | ValidatorFn[] | null;
  initValue?: any;
  required?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  errors?: IFormFieldError[];
  icon?: string;
  /** Use in case of FormFieldType.ROW */
  fields?: IFormField[];
  description?: string;
  /** Template Ref */
  templateRef?: TemplateRef<any>;
  dataTemplateRef?: any;
}

export interface IInputFormField extends IBaseFormField {
  /** Set `input[type]` when type is FormFieldType.INPUT */
  inputType?: EFormFieldInputType;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  suffix?: string | TemplateRef<void>;
  prefix?: string | TemplateRef<void>;
  min?: number;
  max?: number;
}

export interface ICheckboxFormField extends IBaseFormField {}

export interface ISelectFormField extends IBaseFormField {
  /** Set options for dropdown when type is FormFieldType.SELECT */
  panelClass?: string;
}

export type IFormField = IBaseFormField | IInputFormField | ICheckboxFormField | ISelectFormField;
