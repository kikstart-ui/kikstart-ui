import { Component, EventEmitter, Input, Output } from '@angular/core'

import { UiComment } from '../../interfaces/ui-comment'

@Component({
  selector: 'ui-comment',
  template: `
    <div class="media">
      <ui-avatar
        *ngIf="comment?.author?.avatar"
        [avatar]="comment?.author?.avatar"
        [alt]="comment?.author?.username"
        class="mr-3"
      >
      </ui-avatar>
      <div class="media-body">
        <div class="mt-0">
          <div class="pull-right" *ngIf="deleteButton">
            <button
              class="btn btn-sm text-muted"
              (click)="action.emit({ type: 'DELETE', payload: comment })"
            >
              <i class="fa fa-times"></i>
            </button>
          </div>
          <strong *ngIf="comment?.author?.name" class="mr-1">
            <ui-link
              *ngIf="comment?.author?.path"
              [path]="comment?.author?.path"
              [label]="comment?.author?.name"
            ></ui-link>
            <span *ngIf="!comment?.author?.path">{{ comment?.author?.name }}</span>
          </strong>
          <small class="text-muted">
            <span *ngIf="comment?.author?.username"> {{ comment?.author?.username }} </span>
            <span *ngIf="comment?.author?.username && comment?.created" class="mx-1"> · </span>
            <span *ngIf="comment?.created">
              <ui-link
                *ngIf="comment?.path"
                [path]="comment?.path"
                [label]="comment?.created | timeago"
              ></ui-link>
              <span *ngIf="!comment?.path">{{ comment?.created | timeago }}</span>
            </span>
          </small>
        </div>
        <div class="mt-1" *ngIf="comment?.text">
          {{ comment?.text }}
        </div>
        <div *ngIf="comment?.buttons && comment?.buttons?.length" class="mt-1">
          <ui-button
            (action)="action.emit({ type: $event.type, payload: comment })"
            [button]="button"
            buttonClass="btn-sm text-muted px-0 mr-3"
            *ngFor="let button of comment?.buttons"
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
  @Input() comment?: UiComment
  @Input() deleteButton = false
  @Output() action = new EventEmitter()
}
