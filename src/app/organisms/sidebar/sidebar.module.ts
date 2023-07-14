import { NgModule, Type } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';

const components: Type<any>[] = [SidebarComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [components],
  exports: [components],
})
export class HeaderModule {}
