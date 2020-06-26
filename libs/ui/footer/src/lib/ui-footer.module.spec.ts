import { async, TestBed } from '@angular/core/testing'
import { UiFooterModule } from './ui-footer.module'

describe('UiFooterModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiFooterModule],
    }).compileComponents()
  }))

  it('should create', () => {
    expect(UiFooterModule).toBeDefined()
  })
})
