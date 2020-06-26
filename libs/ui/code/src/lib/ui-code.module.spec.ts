import { async, TestBed } from '@angular/core/testing'
import { UiCodeModule } from './ui-code.module'

describe('UiCodeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiCodeModule],
    }).compileComponents()
  }))

  it('should create', () => {
    expect(UiCodeModule).toBeDefined()
  })
})
