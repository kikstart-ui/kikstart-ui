import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'
import { LayoutConsoleModule } from '@kikstart-ui/layout-console'
import { LayoutWebModule } from '@kikstart-ui/layout-web'
import { UiNavbarModule } from '@kikstart-ui/ui-navbar'

import { AppLayoutComponent } from './app-layout.component'
import { AppComponent } from './app.component'

import { routes } from './app.routes'
import { DemosLayoutComponent } from './demos-layout.component'

@NgModule({
  declarations: [AppComponent, AppLayoutComponent, DemosLayoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    LayoutConsoleModule,
    LayoutWebModule,
    UiNavbarModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
