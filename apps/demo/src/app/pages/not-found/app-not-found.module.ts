import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { LayoutConsoleModule } from '@kikstart-ui/layout-console'
import { UiHeroModule } from '@kikstart-ui/ui-hero'
import { AppNotFoundComponent } from './app-not-found.component'

@NgModule({
  declarations: [AppNotFoundComponent],
  imports: [UiHeroModule, RouterModule.forChild([{ path: '', component: AppNotFoundComponent }]), LayoutConsoleModule],
})
export class AppNotFoundModule {}
