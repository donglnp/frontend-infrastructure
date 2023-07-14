import { NgModule, Type } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HamburgerMenuComponent } from './hamburger-menu.component';

const components: Type<any>[] = [HamburgerMenuComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [components],
  exports: [components],
})
export class HamburgerMenuModule {}
