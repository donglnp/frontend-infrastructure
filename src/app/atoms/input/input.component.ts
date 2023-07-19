import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BaseComponent } from 'src/app/core/components/base-component/base.component';
import { IInputFormField } from 'src/app/core/interfaces/form-field.interface';

@Component({
  selector: 'app-input[field]',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent extends BaseComponent {
  @ViewChild('inputRef') inputRef!: ElementRef;

  @Input() field!: IInputFormField;
  @Input() control: FormControl;

  @Output() enterEmitter = new EventEmitter();

  public form!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    super();
  }

  public onEnter() {
    this.enterEmitter.emit(this.control.value);
  }

  protected override onInit(): void {
    if (!this.control) {
      const id = this.field.key;
      this.form = this.formBuilder.group({ [id]: [null] });
      this.control = this.form.controls[id] as FormControl;
    }
  }
}
