import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormBuilder } from '@ngx-formly/core'

@Component({
  selector: 'ui-form',
  template: `
    <form [formGroup]="form" novalidate (ngSubmit)="submit()">
      <div>
        <formly-form [model]="model" [fields]="fields" [form]="form" [options]="options">
        </formly-form>
        <button type="submit" style="display: none;" [disabled]="form.touched && !form.valid">
          submit
        </button>
      </div>
      <div class="mt-4" *ngIf="submitButton">
        <div class="text-right">
          <button
            *ngIf="submitButton"
            [disabled]="!form.valid"
            type="submit"
            class="btn btn-success"
          >
            {{ submitButton }}
          </button>
        </div>
      </div>
    </form>
  `,
})
export class UiFormComponent implements OnInit {
  @Input() public fields: FormlyFieldConfig[]
  @Input() public form = new FormGroup({})
  @Input() public model = {}
  @Input() public options = {}
  @Input() public submitButton: boolean | string = 'Save'
  @Output() public action = new EventEmitter()

  constructor(private builder: FormlyFormBuilder) {}

  ngOnInit() {
    this.builder.buildForm(this.form, this.fields, this.model, this.options)
  }

  submit() {
    this.action.emit({ type: 'SUBMIT', payload: this.model })
  }
}
