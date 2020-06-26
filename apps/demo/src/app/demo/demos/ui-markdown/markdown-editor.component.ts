import { Component, OnInit } from '@angular/core'
import { FormHelper } from '@kikstart-ui/ui-form'

@Component({
  template: `
    <div class="row">
      <div class="col-12 col-md-6">
        <ui-form [model]="model" [fields]="fields" [submitButton]="false"></ui-form>
      </div>
      <div class="col-12 col-md-6 preview">
        <ui-markdown [data]="model.data"></ui-markdown>
      </div>
    </div>
  `,
  styles: [
    `
      .preview {
        overflow: auto;
      }
      .preview,
      ::ng-deep form,
      ::ng-deep form div,
      ::ng-deep .form-group {
        height: 100%;
        max-height: calc(100vh - 20px);
      }

      ::ng-deep textarea.form-control {
        background-color: inherit !important;
        border: 1px solid #222 !important;
        color: inherit !important;
        height: 100%;
      }
    `,
  ],
})
export class MarkdownEditorComponent implements OnInit {
  model = {
    data: null,
  }
  public fields = [FormHelper.textarea('data', { rows: 20 })]
  ngOnInit() {
    this.model.data = require('!!raw-loader!./markdown-simple.example.md').default as string
  }
}
