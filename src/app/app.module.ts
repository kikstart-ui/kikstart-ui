import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { UiModule, UiService } from '@kikstart/ui'

import { routes } from './app.routes'
import { config } from './app.config'

import { AppComponent } from './app.component'
import { AppLayoutComponent } from './app-layout.component'
import { App404Component } from './app-404.component'
import { AppHomeComponent } from './app-home.component'

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(routes), UiModule],
  declarations: [AppComponent, App404Component, AppHomeComponent, AppLayoutComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private ui: UiService) {
    this.ui.layout = config.layout
  }
}
