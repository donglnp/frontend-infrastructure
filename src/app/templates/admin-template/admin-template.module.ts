import { NgModule, Type } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FooterModule } from 'src/app/organisms/footer/footer.module';
import { HeaderModule } from 'src/app/organisms/header/header.module';
import { SidebarModule } from 'src/app/organisms/sidebar/sidebar.module';
import { AdminTemplateComponent } from './admin-template.component';

const components: Type<any>[] = [AdminTemplateComponent];

@NgModule({
  imports: [CommonModule, HeaderModule, SidebarModule, FooterModule],
  declarations: [components],
  exports: [components],
})
export class AdminTemplateModule {}
