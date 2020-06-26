import { Component, Input } from '@angular/core'

export class ConsoleThumb {
  id?: string
  route?: string | string[]
  title?: string
  name?: string
  description?: string
}

@Component({
  selector: 'console-thumbs',
  template: `
    <div class="row">
      <ng-container *ngFor="let thumb of thumbs">
        <div class="col-12 col-md-4 mb-3 mb-md-5">
          <div class="card cursor-pointer" [style.min-height.px]="200" [routerLink]="thumb.route || thumb.id">
            <div class="card-body">
              <div [style.font-size.rem]="2">
                <a [routerLink]="thumb.route">
                  {{ thumb.title || thumb.name || thumb.id }}
                </a>
              </div>
              <div class="text-muted">
                {{ thumb.description }}
              </div>
            </div>
          </div>
        </div>
      </ng-container>
    </div>
  `,
  styles: [],
})
export class ConsoleThumbsComponent {
  @Input() thumbs: ConsoleThumb[]
}
