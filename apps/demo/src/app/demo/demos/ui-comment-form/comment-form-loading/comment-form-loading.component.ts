import { Component } from '@angular/core'
import { BehaviorSubject, of } from 'rxjs'
import { delay, tap } from 'rxjs/operators'

@Component({
  templateUrl: './comment-form-loading.component.html',
})
export class CommentFormLoadingComponent {
  private reset = new BehaviorSubject<boolean>(true)
  public reset$ = this.reset.asObservable()

  handleAction({ payload }) {
    return of(true)
      .pipe(
        tap(() => console.log(`Storing comment: ${payload.text}`)),
        delay(3000),
        tap(() => console.log('Comment saved!')),
        tap(() => this.reset.next(true)),
      )
      .subscribe()
  }
}
