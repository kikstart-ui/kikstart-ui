import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { LayoutConsoleModule } from '@kikstart-ui/layout-console'
import { UiHeroModule } from '@kikstart-ui/ui-hero'
import { DemoLayoutIndexComponent } from './demo-layout-index.component'

@NgModule({
  declarations: [DemoLayoutIndexComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DemoLayoutIndexComponent,
      },
    ]),
    LayoutConsoleModule,
    UiHeroModule,
  ],
})
export class DemoLayoutIndexModule {}
