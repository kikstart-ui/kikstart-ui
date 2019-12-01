import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UiModule } from '@kikstart/ui';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(appRoutes), UiModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
