import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UiModule, UiService } from '@kikstart/ui';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './app-layout.component';
import { appLayout } from './app.config';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(appRoutes), UiModule],
  declarations: [AppComponent, AppLayoutComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private ui: UiService) {
    this.ui.layout = appLayout;
  }
}
