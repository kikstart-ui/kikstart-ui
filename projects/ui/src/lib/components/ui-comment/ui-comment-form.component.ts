import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { Observable } from 'rxjs'

import { FormHelper } from '../../helpers/form.helper'
import { FormlyTemplateOptions } from '@ngx-formly/core'

@Component({
  selector: 'ui-comment-form',
  template: `
    <div class="media">
      <ui-avatar *ngIf="avatar" [avatar]="avatar" class="mr-3"></ui-avatar>
      <div class="media-body">
        <ng-container *ngIf="fields.length">
          <div>
            <ui-form
              #f
              [submitButton]="false"
              [form]="form"
              [model]="model"
              [fields]="fields"
              (action)="submit($event)"
            >
            </ui-form>
          </div>
          <div class="mt-3 d-flex justify-content-between">
            <button [disabled]="true" class="btn btn-sm px-0" *ngIf="maxLength">
              {{ textCount }} / {{ maxLength }}
            </button>
            <button
              *ngIf="submitButton"
              [disabled]="!form.valid"
              [class]="submitButtonClass"
              (click)="f.submit()"
            >
              <i class="fa fa-spin fa-spinner mr-1" *ngIf="form.disabled"></i>
              {{ submitButton }}
            </button>
          </div>
        </ng-container>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      ::ng-deep textarea.form-control {
        background-color: inherit !important;
        color: inherit !important;
        border: 1px solid var(--border-color) !important;
      }
      ::ng-deep textarea.form-control:disabled {
        color: #999 !important;
      }
    `,
  ],
})
export class UiCommentFormComponent implements OnInit {
  @Input() reset$: Observable<boolean>
  @Input() minLength: boolean | number = 1
  @Input() maxLength: boolean | number = 280
  @Input() rows: boolean | number = 3
  @Input() required = true
  @Input() submitButton: boolean | string = 'Submit'
  @Input() submitButtonClass = 'btn btn-outline-success'
  @Input() placeholder = 'Enter your comment'
  @Input() avatar?: string
  @Input() form = new FormGroup({})
  @Input() model = { text: null }
  @Input() fields: FormHelper[] = []

  @Output() action = new EventEmitter(true)

  ngOnInit() {
    this.fields = [this.createCommentField()]
    if (this.reset$) {
      this.reset$.subscribe(val => {
        this.resetForm()
      })
    }
  }

  get textCount() {
    return this.model.text ? this.model.text.length : 0
  }

  createCommentField() {
    const fieldOptions: FormlyTemplateOptions = {
      placeholder: this.placeholder,
      required: this.required,
      blur: f => {
        if (!f.formControl.value) {
          f.formControl.markAsUntouched()
        }
      },
    }
    if (this.minLength && typeof this.minLength === 'number') {
      fieldOptions.minLength = this.minLength
    }
    if (this.maxLength && typeof this.maxLength === 'number') {
      fieldOptions.maxLength = this.maxLength
    }
    if (this.rows && typeof this.rows === 'number') {
      fieldOptions.rows = this.rows
    }
    return FormHelper.textarea('text', fieldOptions)
  }

  resetForm() {
    this.model = { text: null }
    this.form.enable()
    this.form.reset()
  }

  submit($event) {
    if (this.reset$) {
      this.form.disable()
    } else {
      this.resetForm()
    }
    this.action.emit($event)
  }
}
