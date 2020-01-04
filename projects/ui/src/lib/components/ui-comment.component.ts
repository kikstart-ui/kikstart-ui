import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UiButton } from '../interfaces/ui-button';

@Component({
  selector: 'ui-comment',
  template: `
    <div class="media" [class.p-2]="padding">
      <ui-avatar *ngIf="avatar" [avatar]="avatar" [alt]="username" class="mr-2"></ui-avatar>
      <div class="media-body">
        <div class="mt-0">
          <div class="pull-right" *ngIf="deleteButton">
            <button class="btn btn-sm text-muted" (click)="delete.emit(true)">
              <i class="fa fa-times"></i>
            </button>
          </div>
          <strong *ngIf="name" class="mr-1">
            <a [routerLink]="link" *ngIf="link">{{ name }}</a>
            <span *ngIf="!link">{{ name }}</span>
          </strong>
          <small class="text-muted">
            <span *ngIf="username"> {{ username }} </span>
            <span *ngIf="username && time" class="mx-1"> · </span>
            <span *ngIf="time"> {{ time | timeago: 'live' }} </span>
          </small>
        </div>
        <div class="mt-1" *ngIf="text">
          {{ text }}
        </div>
        <div *ngIf="buttons.length" class="mt-1">
          <ui-button
            (action)="action.emit($event)"
            [button]="button"
            buttonClass="btn-sm text-muted px-0 mr-3"
            *ngFor="let button of buttons"
          ></ui-button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class UiCommentComponent {
  @Input() avatar?: string;
  @Input() buttons: UiButton[] = [];
  @Input() name?: string;
  @Input() link?: string | string[];
  @Input() username?: string;
  @Input() time?: number;
  @Input() text?: string;
  @Input() padding = true;
  @Input() deleteButton = false;
  @Output() delete = new EventEmitter();
  @Output() action = new EventEmitter();
}
