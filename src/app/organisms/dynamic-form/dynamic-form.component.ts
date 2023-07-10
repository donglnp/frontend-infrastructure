import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, OperatorFunction } from 'rxjs';
import { BaseComponent } from 'src/app/components/base-component/base.component';
import { EFormFieldType } from 'src/app/enums/form-field-type.enum';
import { IFormField } from 'src/app/interfaces/form-field.interface';
import { IFormInput } from 'src/app/interfaces/form-input.interface';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormComponent extends BaseComponent implements OnChanges {
  @Input() identification: string | undefined;
  @Input() contentTemplate: TemplateRef<any> | undefined;

  @Input() formInput!: IFormInput;
  @Input() formInitValues: any;

  @Output() primaryEmitter = new EventEmitter<any>();
  @Output() secondaryEmitter = new EventEmitter<any>();

  public form!: FormGroup;
  public EFormFieldType = EFormFieldType;

  public isPrimaryLoading = false;

  constructor(private readonly formBuilder: FormBuilder) {
    super();
  }

  public onPrimaryButtonClick(): void {
    if (this.isPrimaryDisabled()) {
      return;
    }
    // const value = ObjectUtils.deleteIfEmpty(this.form.value);
    const value = this.form?.value;
    this.transformOutput(value);
    this.primaryEmitter.next(value);
  }

  public onSecondaryButtonClick(): void {
    this.secondaryEmitter.next(null);
  }

  public clearFile(formControl: any): void {
    formControl.setValue(undefined);
  }

  public isPrimaryDisabled(): boolean {
    return this.isPrimaryLoading || !!this.form?.invalid;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formInitValues']?.currentValue) {
      this.initFormValues();
    }

    if (changes?.['formInput']) {
      const { currentValue, firstChange } = changes?.['formInput'];
      if (currentValue && !firstChange) {
        this.form?.reset();
        this.initForm();
        this.initFormValues();
      }
    }
  }

  protected override onInit(): void {
    this.initForm();
    this.initFormValues();
  }

  private initForm(): void {
    if (!this.formInput) {
      return;
    }

    const buildControlsConfig: any = (fields: IFormField[]) => {
      return fields.reduce((previousValue: any, currentValue: any) => {
        if (currentValue.type === EFormFieldType.ROW) {
          const innerConfig = buildControlsConfig(currentValue.fields);
          const fullConfig = {
            ...previousValue,
            ...innerConfig,
          };
          return fullConfig;
        }

        previousValue[currentValue.key] = [
          {
            value: currentValue.initValue,
            disabled: currentValue.disabled || false,
          },
          currentValue.validators,
        ];
        return previousValue;
      }, {});
    };

    const controlsConfig = buildControlsConfig(this.formInput.fields);
    this.form = this.formBuilder.group(controlsConfig);

    if (this.formInput?.valueChanges) {
      this.initPipe(this.form?.valueChanges, this.formInput?.valueChangesPipes).subscribe((value: any) =>
        this.formInput?.valueChanges(value, this.form)
      );
    }
    if (this.formInput?.statusChanges) {
      this.initPipe(this.form.statusChanges, this.formInput.statusChangesPipes).subscribe((status: any) =>
        this.formInput?.statusChanges(status, this.form)
      );
    }

    this.formInput?.fields?.forEach((field: IFormField) => this.initFormField(field));
  }

  private initFormField(field: IFormField | any): void {
    const control: any = this.form?.controls[field.key];
    if (field.valueChanges) {
      this.initPipe(control?.valueChanges, field.valueChangesPipes).subscribe((value: any) => field.valueChanges(value, this.form));
    }
    if (field.statusChanges) {
      this.initPipe(control?.statusChanges, field.statusChangesPipes).subscribe((status: any) => field.statusChanges(status, this.form));
    }
  }

  private initPipe(observable: Observable<any>, valueChangesPipes: OperatorFunction<any, any>[] | undefined): Observable<any> {
    if (!valueChangesPipes || valueChangesPipes.length === 0) {
      return observable;
    }

    switch (valueChangesPipes.length) {
      case 1:
        return observable.pipe(valueChangesPipes[0]);
      case 2:
        return observable.pipe(valueChangesPipes[0], valueChangesPipes[1]);
      case 3:
        return observable.pipe(valueChangesPipes[0], valueChangesPipes[1], valueChangesPipes[2]);
      case 4:
        return observable.pipe(valueChangesPipes[0], valueChangesPipes[1], valueChangesPipes[2], valueChangesPipes[3]);
      case 5:
        return observable.pipe(
          valueChangesPipes[0],
          valueChangesPipes[1],
          valueChangesPipes[2],
          valueChangesPipes[3],
          valueChangesPipes[4]
        );
      case 6:
        return observable.pipe(
          valueChangesPipes[0],
          valueChangesPipes[1],
          valueChangesPipes[2],
          valueChangesPipes[3],
          valueChangesPipes[4],
          valueChangesPipes[5]
        );
      case 7:
        return observable.pipe(
          valueChangesPipes[0],
          valueChangesPipes[1],
          valueChangesPipes[2],
          valueChangesPipes[3],
          valueChangesPipes[4],
          valueChangesPipes[5],
          valueChangesPipes[6]
        );
      case 8:
        return observable.pipe(
          valueChangesPipes[0],
          valueChangesPipes[1],
          valueChangesPipes[2],
          valueChangesPipes[3],
          valueChangesPipes[4],
          valueChangesPipes[5],
          valueChangesPipes[6],
          valueChangesPipes[7]
        );
      case 9:
        return observable.pipe(
          valueChangesPipes[0],
          valueChangesPipes[1],
          valueChangesPipes[2],
          valueChangesPipes[3],
          valueChangesPipes[4],
          valueChangesPipes[5],
          valueChangesPipes[6],
          valueChangesPipes[7],
          valueChangesPipes[8]
        );
      default:
        return observable.pipe(
          valueChangesPipes[0],
          valueChangesPipes[1],
          valueChangesPipes[2],
          valueChangesPipes[3],
          valueChangesPipes[4],
          valueChangesPipes[5],
          valueChangesPipes[6],
          valueChangesPipes[7],
          valueChangesPipes[8],
          ...valueChangesPipes.slice(9)
        );
    }
  }

  private initFormValues(): void {
    if (!this.form || !this.formInitValues) {
      return;
    }
    this.transformInput(this.formInitValues);
    this.form.patchValue(this.formInitValues);
  }

  private transformInput(data: any): void {
    this.formInput?.fields?.forEach((field: any) => {});
  }

  private transformOutput(data: any): void {
    // TODO
  }
}
