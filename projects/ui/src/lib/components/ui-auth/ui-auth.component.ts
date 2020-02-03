import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'

import { UiBrand } from '../../interfaces/ui-brand'
import { UiTab } from '../../interfaces/ui-tab'
import { FormHelper } from '../../helpers/form.helper'
import { UiLink } from '../../interfaces/ui-link'
import { UiBrandSizes } from '../ui-brand/ui-brand.component'

/**
 * The ui-auth component can be used to create authentication pages by defining them.
 */
@Component({
  selector: 'ui-auth',
  templateUrl: './ui-auth.component.html',
  styleUrls: ['./ui-auth.component.scss'],
})
export class UiAuthComponent {
  @Input() brand: UiBrand
  @Input() brandSize: UiBrandSizes = 'lg'
  @Input() footer?: { html?: string; text?: string; links?: UiLink[] }
  @Input() bottomLink: { path: string; label: string }
  @Input() links: UiTab[] = []
  @Input() name = 'kikstart.dev'
  @Input() label: string
  @Input() loading = false
  @Input() form = new FormGroup({})
  @Input() model = {}
  @Input() fields: FormHelper[] = []
  @Input() navigation = true
  @Input() socialButtons = false
  @Output() action = new EventEmitter()
  selectedSocial: 'github' | 'google'

  constructor() {}

  signInGithub() {
    this.loading = true
    this.selectedSocial = 'github'
    return this.action.emit({ type: 'SOCIAL', payload: 'github' })
  }

  signInGoogle() {
    this.loading = true
    this.selectedSocial = 'google'
    return this.action.emit({ type: 'SOCIAL', payload: 'google' })
  }
}
