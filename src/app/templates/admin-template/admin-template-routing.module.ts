import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { EComponentType } from 'src/app/enums/component.enum';
import { AdminTemplateButtonComponent } from './components/admin-template-button/admin-template-button.component';
import { AdminTemplateFormsComponent } from './components/admin-template-forms/admin-template-forms.component';
import { AdminTemplateInputComponent } from './components/admin-template-input/admin-template-input.component';
import { AdminTemplateComponent } from './components/admin-template.component';

const routes: Routes = [
  {
    path: '',
    component: AdminTemplateComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: EComponentType.FORMS,
      },
      {
        path: EComponentType.FORMS,
        component: AdminTemplateFormsComponent,
      },
      {
        path: EComponentType.INPUT,
        component: AdminTemplateInputComponent,
      },
      {
        path: EComponentType.BUTTON,
        component: AdminTemplateButtonComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminTemplateRoutingModule {}
