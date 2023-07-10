import { NgModule, Type } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicFormModule } from './organisms/dynamic-form/dynamic-form.module';

const modules: Type<any>[] = [DynamicFormModule];

@NgModule({
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, ...modules],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
