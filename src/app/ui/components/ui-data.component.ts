import { Component, Input, TemplateRef } from '@angular/core';

export interface UiDataShape {
  data: { [key: string]: any };
  errors?: [];
  loading?: boolean;
}

@Component({
  selector: 'ui-data',
  template: `
    <ng-container *ngIf="data as res">
      <ng-template
        [ngTemplateOutlet]="outlet"
        [ngTemplateOutletContext]="{
          data: select ? res.data[select] : res.data,
          errors: res.errors,
          loading: res.loading
        }"
      >
      </ng-template>
      <ng-container *ngIf="debug && res">
        <ui-debug label="ui-data" [data]="res"></ui-debug>
      </ng-container>
    </ng-container>
  `,
})
export class UiDataComponent {
  @Input() data: UiDataShape = { data: [] };
  @Input() debug = false;
  @Input() outlet: TemplateRef<any>;
  @Input() select: string;
}
