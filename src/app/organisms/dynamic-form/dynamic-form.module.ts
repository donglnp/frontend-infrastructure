import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, Type } from '@angular/core';

import { ButtonModule } from 'src/app/atoms/button/button.module';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component';
import { InputModule } from 'src/app/atoms/input/input.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

const components: Type<any>[] = [DynamicFormComponent];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PipesModule, InputModule, ButtonModule],
  declarations: [components],
  exports: [components],
})
export class DynamicFormModule {}
