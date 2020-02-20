import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'ui-dropdown',
  template: `
    <div class="btn-group" dropdown placement="bottom right">
      <button
        id="button-basic"
        dropdownToggle
        type="button"
        class="btn btn-sm btn-outline-info dropdown-toggle"
        aria-controls="dropdown-basic"
      >
        {{ items[selected] ? items[selected] : selected }}
        <span class="caret"></span>
      </button>
      <ul
        id="dropdown-basic"
        *dropdownMenu
        class="dropdown-menu dropdown-menu-right"
        role="menu"
        aria-labelledby="button-basic"
      >
        <ng-container *ngFor="let item of items | keyvalue">
          <li role="menuitem">
            <a class="dropdown-item" (click)="changeSelected.emit(item.key)">
              {{ item.value }}
            </a>
          </li>
        </ng-container>
      </ul>
    </div>
  `,
  styles: [],
})
export class UiDropdownComponent {
  @Input() items: { [key: string]: string }
  @Input() selected: string
  @Output() changeSelected = new EventEmitter()
}
