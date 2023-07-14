import { NgModule, Type } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LocalSpinnerComponent } from './local-spinner.component';

const components: Type<any>[] = [LocalSpinnerComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [components],
  exports: [components],
})
export class LocalSpinnerModule {}
