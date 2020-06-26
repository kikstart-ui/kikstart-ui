import { async, TestBed } from '@angular/core/testing'
import { UiLinkModule } from './ui-link.module'

describe('UiLinkModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiLinkModule],
    }).compileComponents()
  }))

  it('should create', () => {
    expect(UiLinkModule).toBeDefined()
  })
})
