import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ButtonModule } from 'src/app/atoms/button/button.module';
import { InputModule } from 'src/app/atoms/input/input.module';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { DynamicFormComponent } from './dynamic-form.component';

const components: Type<any>[] = [DynamicFormComponent];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PipesModule, InputModule, ButtonModule],
  declarations: [components],
  exports: [components],
})
export class DynamicFormModule {}
