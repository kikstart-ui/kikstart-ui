import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { NumberedCodeblockModule } from '@ctrl/ngx-numbered-codeblock'
import { TimeagoModule } from 'ngx-timeago'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { ModalModule } from 'ngx-bootstrap/modal'
import { TabsModule } from 'ngx-bootstrap/tabs'
import { ToastrModule } from 'ngx-toastr'

import { TruncatePipe } from './pipes/truncate.pipe'

import { UiAuthComponent } from './components/ui-auth/ui-auth.component'
import { UiCodeComponent } from './components/ui-code.component'
import { UiCommentComponent } from './components/ui-comment.component'
import { UiCommentFormComponent } from './components/ui-comment-form.component'
import { UiContentComponent } from './components/ui-content.component'
import { UiDialogFormComponent } from './components/ui-dialog-form.component'
import { UiDialogProgressComponent } from './components/ui-dialog-progress.component'
import { UiDropdownComponent } from './components/ui-dropdown.component'
import { UiFormComponent } from './components/ui-form.component'
import { UiHeaderComponent } from './components/ui-header.component'
import { UiHeroComponent } from './components/ui-hero.component'
import { UiLayoutComponent } from './components/ui-layout.component'
import { UiListComponent } from './components/ui-list.component'
import { UiListItemComponent } from './components/ui-list-item.component'
import { UiLoadingComponent } from './components/ui-loading.component'
import { UiPageSidebarComponent } from './components/ui-page-sidebar.component'
import { UiPageSidebarRouteComponent } from './components/ui-page-sidebar-route.component'
import { UiRenderComponent } from './components/ui-render.component'
import { UiSidebarComponent } from './components/ui-sidebar.component'
import { UiSidebarItemComponent } from './components/ui-sidebar-item.component'
import { UiTabsComponent } from './components/ui-tabs.component'
import { UiUserComponent } from './components/ui-user.component'

import { UiAvatarModule } from './components/ui-avatar/ui-avatar.module'
import { UiBrandModule } from './components/ui-brand/ui-brand.module'
import { UiButtonModule } from './components/ui-button/ui-button.module'
import { UiCardModule } from './components/ui-card/ui-card.module'
import { UiDataModule } from './components/ui-data/ui-data.module'
import { UiDebugModule } from './components/ui-debug/ui-debug.module'
import { UiFooterModule } from './components/ui-footer/ui-footer.module'
import { UiFormsModule } from './ui-forms.module'
import { UiLabelModule } from './components/ui-label/ui-label.module'
import { UiLinkModule } from './components/ui-link/ui-link.module'
import { UiLinksModule } from './components/ui-links/ui-links.module'
import { UiLoadingIconModule } from './components/ui-loading-icon/ui-loading-icon.module'
import { UiNoDataModule } from './components/ui-no-data/ui-no-data.module'

const COMPONENTS = [
  UiAuthComponent,
  UiCodeComponent,
  UiCommentComponent,
  UiCommentFormComponent,
  UiContentComponent,
  UiDialogFormComponent,
  UiDialogProgressComponent,
  UiDropdownComponent,
  UiFormComponent,
  UiHeaderComponent,
  UiHeroComponent,
  UiLayoutComponent,
  UiListComponent,
  UiListItemComponent,
  UiLoadingComponent,
  UiPageSidebarComponent,
  UiPageSidebarRouteComponent,
  UiRenderComponent,
  UiSidebarComponent,
  UiSidebarItemComponent,
  UiTabsComponent,
  UiUserComponent,
]

const EXPORT_MODULES = [
  CommonModule,
  BsDropdownModule,
  ModalModule,
  TabsModule,
  NumberedCodeblockModule,
  // Ui Modules will be exported until version 2
  UiAvatarModule,
  UiBrandModule,
  UiButtonModule,
  UiCardModule,
  UiDebugModule,
  UiFooterModule,
  UiFormsModule,
  UiLabelModule,
  UiLinkModule,
  UiLinksModule,
  UiLoadingIconModule,
  UiNoDataModule,
]

@NgModule({
  entryComponents: [UiDialogFormComponent, UiDialogProgressComponent],
  declarations: [TruncatePipe, ...COMPONENTS],
  imports: [
    ...EXPORT_MODULES,
    RouterModule.forChild([]),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    TimeagoModule.forRoot(),
    ToastrModule.forRoot({
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-top-center',
      timeOut: 3000,
    }),
  ],
  exports: [
    ...EXPORT_MODULES,
    ...COMPONENTS,
    UiFormsModule,
    TimeagoModule,
    TruncatePipe,
    ToastrModule,
    UiDataModule,
  ],
})
export class UiModule {}
