import { Component, Input } from '@angular/core';
import { UiBrand } from '../interfaces/ui-brand';

@Component({
  selector: 'ui-brand',
  template: `
    <span [class.brand-lg]="brand?.size === 'lg'">
      <img *ngIf="brand?.logo" [attr.src]="brand?.logo" class="brand-logo d-inline-block align-top" />
      <span *ngIf="brand?.name" class="brand-name">{{ brand?.name }}</span>
      <span *ngIf="brand?.separator" class="brand-separator">{{ brand?.separator }}</span>
      <span *ngIf="brand?.product" class="brand-product">{{ brand?.product }}</span>
    </span>
  `,
  styles: [
    `
      .brand-logo {
        height: 30px;
        width: 30px;
        margin-right: 10px;
      }
      .brand-name {
        font-weight: 800;
        letter-spacing: 4px;
      }
      .brand-product {
        color: #bdbdbd;
        margin-left: 5px;
        font-weight: 100;
        letter-spacing: 4px;
      }
      .brand-separator {
        margin-left: 2px;
        color: #555;
        font-weight: 200;
      }
      .brand-lg {
        font-size: 24px;
      }
      .brand-lg .brand-logo {
        height: 40px;
        width: 40px;
        margin-right: 10px;
      }
    `,
  ],
})
export class UiBrandComponent {
  @Input() brand: UiBrand;
}
