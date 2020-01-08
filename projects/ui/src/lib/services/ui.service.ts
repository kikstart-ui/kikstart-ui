import { Meta, Title } from '@angular/platform-browser'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { cloneDeep } from 'lodash'
import { BehaviorSubject, Observable } from 'rxjs'

import { ToastrService } from 'ngx-toastr'
import { BsModalService } from 'ngx-bootstrap'
import { FormlyFieldConfig } from '@ngx-formly/core'

import { UiDialogFormComponent } from '../components/ui-dialog-form.component'
import { UiDialogProgressComponent } from '../components/ui-dialog-progress.component'
import { UiLayout } from '../interfaces/ui-layout'

interface SiteDialogFormParams {
  handler?: (data) => Observable<any>
  fields: FormlyFieldConfig[]
  model?: any
  title?: string
}

@Injectable({ providedIn: 'root' })
export class UiService {
  private layoutSubject = new BehaviorSubject<UiLayout>(null)

  set layout(layout: UiLayout) {
    this.layoutSubject.next(layout)
  }

  get layout(): UiLayout {
    return this.layoutSubject.getValue()
  }

  constructor(
    private meta: Meta,
    private modal: BsModalService,
    private router: Router,
    private title: Title,
    private toast: ToastrService,
  ) {}

  openForm({ model, title, handler, fields }: SiteDialogFormParams) {
    this.modal.show(UiDialogFormComponent, {
      initialState: {
        model: cloneDeep(model),
        fields: cloneDeep(fields),
        title,
        handler,
      },
    })
  }

  openProgress() {
    return this.modal.show(UiDialogProgressComponent, {
      initialState: {
        title: 'Loading...',
      },
    })
  }

  toastSuccess(message = 'OK :)', title?: string) {
    return this.toast.success(message, title)
  }

  toastError(message = 'Something went wrong :(', title?: string) {
    return this.toast.error(message, title)
  }

  isRouteActive(url: string, exact = false): boolean {
    return this.router.isActive(url, exact)
  }

  setMetaData(config?: { description?: string; image?: string; title?: string }) {
    config = config || {}
    const brand = this.layout.brand || null
    const appTitle =
      [brand.name, brand.product].join(` ${brand.separator} `) + ' - ' + brand.description

    // Get the description from the config, or use the default App Description
    const description = config.description || brand.description

    // Get the image from the config or use the App Image;
    const image = config.image || brand.logo

    // Get the title from the config and append the App Title, or just use the App Title
    const title = config.title ? `${config.title} - ${appTitle}` : appTitle

    // Set the Application Title
    this.title.setTitle(title)

    const tags = [
      { name: 'description', content: description },
      { name: 'theme-color', content: brand.color || '#333333' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:image', content: image },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'apple-mobile-web-app-title', content: title },
      { name: 'apple-touch-startup-image', content: image },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
    ]

    tags.forEach(tag => this.meta.updateTag(tag))
  }
}
