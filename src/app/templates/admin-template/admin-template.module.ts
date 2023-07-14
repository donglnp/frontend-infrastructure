import { NgModule, Type } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ButtonModule } from 'src/app/atoms/button/button.module';
import { InputModule } from 'src/app/atoms/input/input.module';
import { DynamicFormModule } from 'src/app/organisms/dynamic-form/dynamic-form.module';
import { FooterModule } from 'src/app/organisms/footer/footer.module';
import { HeaderModule } from 'src/app/organisms/header/header.module';
import { SidebarModule } from 'src/app/organisms/sidebar/sidebar.module';
import { AdminTemplateRoutingModule } from './admin-template-routing.module';
import { AdminTemplateButtonComponent } from './components/admin-template-button/admin-template-button.component';
import { AdminTemplateFormsComponent } from './components/admin-template-forms/admin-template-forms.component';
import { AdminTemplateInputComponent } from './components/admin-template-input/admin-template-input.component';
import { AdminTemplateComponent } from './components/admin-template.component';

const components: Type<any>[] = [
  AdminTemplateComponent,
  AdminTemplateFormsComponent,
  AdminTemplateInputComponent,
  AdminTemplateButtonComponent,
];

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    SidebarModule,
    FooterModule,
    AdminTemplateRoutingModule,
    DynamicFormModule,
    InputModule,
    ButtonModule,
  ],
  declarations: [components],
  exports: [components],
})
export class AdminTemplateModule {}
