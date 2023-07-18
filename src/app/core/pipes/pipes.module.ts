import { NgModule, Type } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';

const components: Type<any>[] = [FilterPipe];

@NgModule({
  imports: [CommonModule],
  declarations: [components],
  exports: [components],
})
export class PipesModule {}
