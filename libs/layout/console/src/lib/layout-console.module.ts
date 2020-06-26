import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ConsoleEmptyComponent } from './console-empty/console-empty.component'
import { ConsoleIndexComponent } from './console-index/console-index.component'
import { ConsoleLayoutComponent } from './console-layout/console-layout.component'
import { ConsoleNavbarComponent } from './console-navbar/console-navbar.component'
import { ConsolePageComponent } from './console-page/console-page.component'
import { ConsoleSidebarComponent } from './console-sidebar/console-sidebar.component'
import { ConsoleTabsComponent } from './console-tabs/console-tabs.component'
import { ConsoleThumbsComponent } from './console-thumbs/console-thumbs.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    ConsoleIndexComponent,
    ConsoleNavbarComponent,
    ConsoleSidebarComponent,
    ConsoleLayoutComponent,
    ConsoleThumbsComponent,
    ConsoleEmptyComponent,
    ConsolePageComponent,
    ConsoleTabsComponent,
  ],
  exports: [
    ConsoleNavbarComponent,
    ConsoleSidebarComponent,
    ConsoleLayoutComponent,
    ConsoleTabsComponent,
    ConsoleThumbsComponent,
    ConsoleEmptyComponent,
    ConsolePageComponent,
  ],
})
export class LayoutConsoleModule {}
