import { NgModule, Type } from '@angular/core';

import { CommonModule } from '@angular/common';
import { EndUserTemplateComponent } from './end-user-template.component';

const components: Type<any>[] = [EndUserTemplateComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [components],
  exports: [components],
})
export class EndUserTemplateModule {}
