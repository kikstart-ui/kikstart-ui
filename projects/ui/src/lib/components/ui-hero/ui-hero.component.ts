import { Component, Input } from '@angular/core'
import { UiCard } from '../../interfaces/ui-card'
import { UiLink } from '../../interfaces/ui-link'
import { UiBrand } from '../../interfaces/ui-brand'
import { UiAvatarSizes } from '../ui-avatar/ui-avatar.component'
import { UiBrandSizes } from '../ui-brand/ui-brand.component'

@Component({
  selector: 'ui-hero',
  template: `
    <div class="jumbotron mb-0" [class.text-center]="centered">
      <div class="my-3 mb-5">
        <div class="mb-3">
          <ui-avatar *ngIf="avatar" [avatar]="avatar" [size]="avatarSize"></ui-avatar>
          <ui-brand
            *ngIf="brand"
            class="d-block mb-5"
            [brand]="brand"
            [size]="brandSize"
          ></ui-brand>
          <h1 *ngIf="title" class="display-4 my-2">{{ title }}</h1>
        </div>
        <p class="lead mt-2">
          {{ description }}
        </p>
        <div *ngIf="link" class="my-5">
          <ui-link [link]="link" [linkClass]="linkClass"></ui-link>
        </div>
      </div>
    </div>
    <div class="row" *ngIf="cards.length">
      <ng-container *ngFor="let card of cards">
        <div
          class="col-12 col-sm-12"
          [class.col-md-12]="cards?.length === 1"
          [class.col-md-6]="cards?.length === 2"
          [class.col-md-4]="cards?.length === 3"
        >
          <ui-card>
            <ui-card-header *ngIf="card.title" [cardTitle]="card.title"></ui-card-header>
            <ui-card-body *ngIf="card.content">
              {{ card.content }}
            </ui-card-body>
            <ui-card-footer *ngIf="card?.links?.length">
              <div class="text-right">
                <ui-link *ngFor="let link of card.links" [link]="link" linkClass="mr-2"></ui-link>
              </div>
            </ui-card-footer>
          </ui-card>
        </div>
      </ng-container>
    </div>
  `,
  styles: [
    `
      .row {
        margin: -48px 12px 0;
      }
    `,
  ],
})
export class UiHeroComponent {
  @Input() avatar: string
  @Input() avatarSize: UiAvatarSizes = 'xl'
  @Input() brand: UiBrand
  @Input() brandSize: UiBrandSizes = 'lg'
  @Input() centered = true
  @Input() link: UiLink
  @Input() linkClass = 'btn btn-lg btn-outline-success'
  @Input() title?: string
  @Input() description?: string
  @Input() cards: UiCard[] = []
}
