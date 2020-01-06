import { Component, Input } from '@angular/core';
import { UiCard } from '../interfaces/ui-card';
import { UiLink } from '../interfaces/ui-link';
import { UiBrand } from '../interfaces/ui-brand';

@Component({
  selector: 'ui-hero',
  template: `
    <div class="jumbotron" [class.text-center]="centered">
      <div class="my-3 mb-5">
        <div class="mb-3">
          <ui-brand *ngIf="brand" [brand]="brand"></ui-brand>
          <h1 *ngIf="title" class="display-4 mb-2">{{ title }}</h1>
        </div>
        <p class="lead mt-2">
          {{ description }}
        </p>
        <div *ngIf="link" class="mt-4 my-3">
          <ui-link [link]="link" linkClass="btn btn-lg btn-outline-success"></ui-link>
        </div>
      </div>
    </div>
    <div class="row" *ngIf="cards.length">
      <ng-container *ngFor="let card of cards">
        <div class="col-12 col-sm-12 col-md-4 mb-5">
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
        margin: -93px 12px 0;
      }
    `,
  ],
})
export class UiHeroComponent {
  @Input() brand: UiBrand;
  @Input() centered = true;
  @Input() link: UiLink;
  @Input() title?: string;
  @Input() description?: string;
  @Input() cards: UiCard[] = [];
}