import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { LayoutConsoleModule } from '@kikstart-ui/layout-console'
import { WebLayoutModule } from '@kikstart-ui/layout-web'
import { UiHeroModule } from '@kikstart-ui/ui-hero'
import { UiNavbarModule } from '@kikstart-ui/ui-navbar'
import { AppHomeComponent } from './app-home.component'

@NgModule({
  declarations: [AppHomeComponent],
  imports: [
    UiHeroModule,
    UiNavbarModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppHomeComponent,
      },
    ]),
    LayoutConsoleModule,
    WebLayoutModule,
  ],
})
export class AppHomeModule {}
