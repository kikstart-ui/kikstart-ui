import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { FormHelper } from '../helpers/form.helper';
import { FormlyTemplateOptions } from '@ngx-formly/core';

@Component({
  selector: 'ui-comment-form',
  template: `
    <div class="media" [class.p-2]="padding">
      <ui-avatar *ngIf="avatar" [avatar]="avatar" class="mr-2"></ui-avatar>
      <div class="media-body">
        <ng-container *ngIf="fields.length">
          <div>
            <ui-form
              #formEl
              [submitButton]="false"
              [form]="form"
              [model]="model"
              [fields]="fields"
              (action)="submit($event)"
            >
            </ui-form>
          </div>
          <div class="mt-3">
            <div class="float-left" *ngIf="maxLength">
              <button disabled="true" class="btn px-0">{{ textCount }} / {{ maxLength }}</button>
            </div>
            <div class="float-right" *ngIf="submitButton">
              <button [disabled]="!form.valid" (click)="formEl.submit()" class="btn btn-success">
                <i class="fa fa-spin fa-spinner mr-1" *ngIf="form.disabled"></i>
                {{ submitButton }}
              </button>
            </div>
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
      }
    `,
  ],
})
export class UiCommentFormComponent implements OnInit {
  @Input() reset$: Observable<boolean>;
  @Input() minLength: boolean | number = 1;
  @Input() maxLength: boolean | number = 280;
  @Input() rows: boolean | number = 3;
  @Input() required = true;
  @Input() submitButton: boolean | string = 'Submit';
  @Input() placeholder = 'Enter your comment';
  @Input() avatar?: string;
  @Input() form = new FormGroup({});
  @Input() model = { text: null };
  @Input() padding = true;
  @Input() fields: FormHelper[] = [];

  @Output() action = new EventEmitter(true);

  ngOnInit() {
    this.fields = [this.createCommentField()];
    if (this.reset$) {
      this.reset$.subscribe(val => {
        this.resetForm();
      });
    }
  }

  get textCount() {
    return this.model.text ? this.model.text.length : 0;
  }

  createCommentField() {
    const fieldOptions: FormlyTemplateOptions = {
      placeholder: this.placeholder,
      required: this.required,
      blur: f => {
        if (!f.formControl.value) {
          f.formControl.markAsUntouched();
        }
      },
    };
    if (this.minLength && typeof this.minLength === 'number') {
      fieldOptions.minLength = this.minLength;
    }
    if (this.maxLength && typeof this.maxLength === 'number') {
      fieldOptions.maxLength = this.maxLength;
    }
    if (this.rows && typeof this.rows === 'number') {
      fieldOptions.rows = this.rows;
    }
    return FormHelper.textarea('text', fieldOptions);
  }

  resetForm() {
    this.model = { text: null };
    this.form.enable();
    this.form.reset();
  }

  submit($event) {
    if (this.reset$) {
      this.form.disable();
    }
    this.action.emit($event);
  }
}
