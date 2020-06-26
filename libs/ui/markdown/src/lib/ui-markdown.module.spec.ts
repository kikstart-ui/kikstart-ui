import { async, TestBed } from '@angular/core/testing'
import { UiMarkdownModule } from './ui-markdown.module'

describe('UiMarkdownModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiMarkdownModule],
    }).compileComponents()
  }))

  it('should create', () => {
    expect(UiMarkdownModule).toBeDefined()
  })
})
