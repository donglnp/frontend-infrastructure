import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/core/components/base-component/base.component';
import { EFormFieldType } from 'src/app/core/enums/form-field-type.enum';
import { IFormInput } from 'src/app/core/interfaces/form-input.interface';

@Component({
  selector: 'app-admin-template-forms',
  templateUrl: './admin-template-forms.component.html',
  styleUrls: ['./admin-template-forms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminTemplateFormsComponent extends BaseComponent {
  public formData: any;

  public formInput: IFormInput = {
    fields: [
      {
        key: 'email',
        type: EFormFieldType.INPUT,
        label: 'Email',
        placeholder: 'Please Enter Email',
        validators: [Validators.email, Validators.required],
        errors: [
          {
            type: 'required',
            message: 'Please Enter Email',
          },
          {
            type: 'email',
            message: 'Wrong Email',
          },
        ],
      },
      {
        key: 'id',
        type: EFormFieldType.INPUT,
        label: 'ID',
        placeholder: 'Please Enter ID',
        required: true,
        errors: [
          {
            type: 'required',
            message: 'Please Enter ID',
          },
        ],
      },
      {
        key: 'row-checkbox',
        type: EFormFieldType.ROW,
        fields: [
          {
            key: 'id1',
            type: EFormFieldType.INPUT,
            label: 'ID 1',
            placeholder: 'Please Enter ID 1',
          },
          {
            key: 'id2',
            type: EFormFieldType.INPUT,
            label: 'ID 2',
            placeholder: 'Please Enter ID 2',
          },
          {
            key: 'id3',
            type: EFormFieldType.INPUT,
            label: 'ID 3',
            placeholder: 'Please Enter ID 3',
          },
          {
            key: 'id4',
            type: EFormFieldType.INPUT,
            label: 'ID 4',
            placeholder: 'Please Enter ID 4',
          },
        ],
      },
    ],
    primaryButtonLabel: 'Submit',
  };

  public onSubmit($event: any) {
    this.formData = JSON.stringify($event);
  }
}
