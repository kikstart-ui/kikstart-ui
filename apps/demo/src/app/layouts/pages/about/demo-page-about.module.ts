import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { LayoutConsoleModule } from '@kikstart-ui/layout-console'
import { UiHeroModule } from '@kikstart-ui/ui-hero'
import { DemoPageAboutComponent } from './demo-page-about.component'

@NgModule({
  declarations: [DemoPageAboutComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DemoPageAboutComponent,
      },
    ]),
    LayoutConsoleModule,
    UiHeroModule,
  ],
})
export class DemoPageAboutModule {}
