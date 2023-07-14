import { NgModule, Type } from '@angular/core';

import { AdminTemplateComponent } from './admin-template.component';
import { CommonModule } from '@angular/common';

const components: Type<any>[] = [AdminTemplateComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [components],
  exports: [components],
})
export class AdminTemplateModule {}
