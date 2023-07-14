import { NgModule, Type } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

const components: Type<any>[] = [HeaderComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [components],
  exports: [components],
})
export class HeaderModule {}
