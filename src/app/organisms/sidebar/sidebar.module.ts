import { NgModule, Type } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from './sidebar.component';

const components: Type<any>[] = [SidebarComponent];

@NgModule({
  imports: [CommonModule, MatSidenavModule],
  declarations: [components],
  exports: [components],
})
export class SidebarModule {}
