import { ChangeDetectionStrategy, Component, Inject, LOCALE_ID } from '@angular/core';

import { EFormFieldType } from './enums/form-field-type.enum';
import { IFormInput } from './interfaces/form-input.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public formData: any;

  public formInput: IFormInput = {
    fields: [
      {
        key: 'email',
        type: EFormFieldType.INPUT,
        label: 'Email',
        placeholder: 'Please Enter Email',
        required: true,
        errors: [
          {
            type: 'required',
            message: 'Please Enter Email',
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

  constructor(@Inject(LOCALE_ID) private readonly locale: string) {
    console.log(locale);
  }

  public onSubmit($event: any) {
    this.formData = JSON.stringify($event);
  }
}
