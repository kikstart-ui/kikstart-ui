import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { LayoutConsoleModule } from '@kikstart-ui/layout-console'
import { DemoLayoutConsoleDummyComponent } from './demo-layout-console-dummy.component'
import { DemoLayoutConsoleComponent } from './demo-layout-console.component'

@NgModule({
  declarations: [DemoLayoutConsoleComponent, DemoLayoutConsoleDummyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoLayoutConsoleComponent,
        children: [{ path: '**', component: DemoLayoutConsoleDummyComponent }],
      },
    ]),
    LayoutConsoleModule,
  ],
})
export class DemoLayoutConsoleModule {}
