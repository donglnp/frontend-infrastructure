import { NgModule, Type } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';

const components: Type<any>[] = [LoadingComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [components],
  exports: [components],
})
export class LoadingModule {}
