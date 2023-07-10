import { NgModule, Type } from '@angular/core';

import { ButtonComponent } from './button.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

const components: Type<any>[] = [ButtonComponent];

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [components],
  exports: [components],
})
export class ButtonModule {}
