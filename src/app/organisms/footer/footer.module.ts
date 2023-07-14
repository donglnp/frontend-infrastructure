import { NgModule, Type } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';

const components: Type<any>[] = [FooterComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [components],
  exports: [components],
})
export class FooterModule {}
