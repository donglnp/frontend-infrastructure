import { NgModule, Type } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormModule } from './organisms/dynamic-form/dynamic-form.module';
import { AdminTemplateModule } from './templates/admin-template/admin-template.module';

const modules: Type<any>[] = [DynamicFormModule, AdminTemplateModule];

@NgModule({
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, ...modules],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
