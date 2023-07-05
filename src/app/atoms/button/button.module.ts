import { NgModule, Type } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from './button.component';

const components: Type<any>[] = [ButtonComponent];

@NgModule({
  imports: [CommonModule, MatButtonModule, MatDividerModule, MatIconModule],
  declarations: [components],
  exports: [components],
})
export class ButtonModule {}
