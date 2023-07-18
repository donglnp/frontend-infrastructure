import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BaseComponent } from 'src/app/core/components/base-component/base.component';
import { IInputFormField } from 'src/app/core/interfaces/form-field.interface';

@Component({
  selector: 'app-admin-template-input',
  templateUrl: './admin-template-input.component.html',
  styleUrls: ['./admin-template-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminTemplateInputComponent extends BaseComponent {
  public field: IInputFormField = {
    key: 'test',
    placeholder: 'input example',
  };
}
