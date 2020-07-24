import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Auth0Module } from './auth0/auth0.module';
import { TwoGuysModule } from './two-guys/two-guys.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, Auth0Module, TwoGuysModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
