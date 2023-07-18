import { EStateType } from '../enums/state-type.enum';
import { IFormField } from './form-field.interface';
import { IFormObservables } from './form-observables.interface';

export interface IFormInput extends IFormObservables {
  fields: IFormField[];
  title?: string;
  subtitle?: string;
  summary?: string;
  primaryButtonLabel?: string;
  primaryButtonType?: EStateType;
  primaryButtonMatIcon?: string;
  primaryLocalSpinnerId?: string;
  secondaryButtonLabel?: string;
  secondaryButtonMatIcon?: string;
  skipCheckInvalidForm?: boolean;
}
