import { FormGroup } from '@angular/forms';
import { OperatorFunction } from 'rxjs';

export class IFormObservables {
  valueChanges?: ((value: any, form?: FormGroup) => void) | any;
  valueChangesPipes?: OperatorFunction<any, any>[];
  statusChanges?: ((status: any, form?: FormGroup) => void) | any;
  statusChangesPipes?: OperatorFunction<any, any>[];
}
