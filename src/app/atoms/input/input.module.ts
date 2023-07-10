import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, Type } from '@angular/core';

import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const components: Type<any>[] = [InputComponent];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatFormFieldModule, MatInputModule],
  declarations: [components],
  exports: [components],
})
export class InputModule {}
