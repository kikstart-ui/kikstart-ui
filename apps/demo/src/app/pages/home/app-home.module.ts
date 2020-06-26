import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { LayoutConsoleModule } from '@kikstart-ui/layout-console'
import { UiHeroModule } from '@kikstart-ui/ui-hero'
import { AppHomeComponent } from './app-home.component'

@NgModule({
  declarations: [AppHomeComponent],
  imports: [UiHeroModule, RouterModule.forChild([{ path: '', component: AppHomeComponent }]), LayoutConsoleModule],
})
export class AppHomeModule {}
