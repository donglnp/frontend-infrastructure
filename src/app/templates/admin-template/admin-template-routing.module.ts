import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
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
        redirectTo: 'forms',
      },
      {
        path: 'forms',
        component: AdminTemplateFormsComponent,
      },
      {
        path: 'input',
        component: AdminTemplateInputComponent,
      },
      {
        path: 'button',
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
