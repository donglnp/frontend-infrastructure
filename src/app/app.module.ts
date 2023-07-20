import { MatDialogModule } from '@angular/material/dialog';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { STORE_MODULE } from './shared/store/store.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, MatDialogModule, ...STORE_MODULE],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  // providers: [...STORE_PROVIDERS],
})
export class AppModule {}
