import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { NumberedCodeblockModule } from '@ctrl/ngx-numbered-codeblock'
import { ShowdownModule } from 'ngx-showdown'
import { TimeagoModule } from 'ngx-timeago'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { ModalModule } from 'ngx-bootstrap/modal'
import { ToastrModule } from 'ngx-toastr'

import { UiFormsModule } from './ui-forms.module'
import { TruncatePipe } from './pipes/truncate.pipe'

import { UiAuthComponent } from './components/ui-auth/ui-auth.component'
import { UiAvatarComponent } from './components/ui-avatar.component'
import { UiBrandComponent } from './components/ui-brand.component'
import { UiButtonComponent } from './components/ui-button.component'
import { UiCardComponent } from './components/ui-card.component'
import { UiCardBodyComponent } from './components/ui-card-body.component'
import { UiCardFooterComponent } from './components/ui-card-footer.component'
import { UiCardHeaderComponent } from './components/ui-card-header.component'
import { UiCodeComponent } from './components/ui-code.component'
import { UiCommentComponent } from './components/ui-comment.component'
import { UiCommentFormComponent } from './components/ui-comment-form.component'
import { UiContentComponent } from './components/ui-content.component'
import { UiDataComponent } from './components/ui-data.component'
import { UiDebugComponent } from './components/ui-debug.component'
import { UiDialogFormComponent } from './components/ui-dialog-form.component'
import { UiDialogProgressComponent } from './components/ui-dialog-progress.component'
import { UiDropdownComponent } from './components/ui-dropdown.component'
import { UiFormComponent } from './components/ui-form.component'
import { UiFooterComponent } from './components/ui-footer.component'
import { UiHeaderComponent } from './components/ui-header.component'
import { UiHeroComponent } from './components/ui-hero.component'
import { UiLayoutComponent } from './components/ui-layout.component'
import { UiLinkComponent } from './components/ui-link.component'
import { UiLinksComponent } from './components/ui-links.component'
import { UiListComponent } from './components/ui-list.component'
import { UiListItemComponent } from './components/ui-list-item.component'
import { UiLoadingComponent } from './components/ui-loading.component'
import { UiMarkdownComponent } from './components/ui-markdown.component'
import { UiPageSidebarComponent } from './components/ui-page-sidebar.component'
import { UiPageSidebarRouteComponent } from './components/ui-page-sidebar-route.component'
import { UiRenderComponent } from './components/ui-render.component'
import { UiSidebarComponent } from './components/ui-sidebar.component'
import { UiSidebarItemComponent } from './components/ui-sidebar-item.component'
import { UiTabsComponent } from './components/ui-tabs.component'
import { UiUserComponent } from './components/ui-user.component'

const COMPONENTS = [
  UiAuthComponent,
  UiAvatarComponent,
  UiBrandComponent,
  UiButtonComponent,
  UiCardComponent,
  UiCardBodyComponent,
  UiCardFooterComponent,
  UiCardHeaderComponent,
  UiCodeComponent,
  UiCommentComponent,
  UiCommentFormComponent,
  UiContentComponent,
  UiDataComponent,
  UiDebugComponent,
  UiDialogFormComponent,
  UiDialogProgressComponent,
  UiDropdownComponent,
  UiFormComponent,
  UiFooterComponent,
  UiHeaderComponent,
  UiHeroComponent,
  UiLayoutComponent,
  UiLinkComponent,
  UiLinksComponent,
  UiListComponent,
  UiListItemComponent,
  UiLoadingComponent,
  UiMarkdownComponent,
  UiPageSidebarComponent,
  UiPageSidebarRouteComponent,
  UiRenderComponent,
  UiSidebarComponent,
  UiSidebarItemComponent,
  UiTabsComponent,
  UiUserComponent,
]

const MODULES = [CommonModule, BsDropdownModule, ModalModule, NumberedCodeblockModule]

@NgModule({
  entryComponents: [UiDialogFormComponent, UiDialogProgressComponent],
  declarations: [TruncatePipe, ...COMPONENTS],
  imports: [
    ...MODULES,
    UiFormsModule,
    RouterModule.forChild([]),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    ShowdownModule,
    TimeagoModule.forRoot(),
    ToastrModule.forRoot({
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-top-right',
      timeOut: 3000,
    }),
  ],
  exports: [...MODULES, UiFormsModule, TimeagoModule, ...COMPONENTS, TruncatePipe, ToastrModule],
})
export class UiModule {}
