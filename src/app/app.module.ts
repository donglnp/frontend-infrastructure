import { NgModule, Type } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from './atoms/button/button.module';

const modules: Type<any>[] = [ButtonModule];

@NgModule({
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, ...modules],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
