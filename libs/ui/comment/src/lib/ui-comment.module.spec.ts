import { async, TestBed } from '@angular/core/testing'
import { UiCommentModule } from './ui-comment.module'

describe('UiCommentModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiCommentModule],
    }).compileComponents()
  }))

  it('should create', () => {
    expect(UiCommentModule).toBeDefined()
  })
})
