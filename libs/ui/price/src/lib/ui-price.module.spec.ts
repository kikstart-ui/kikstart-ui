import { async, TestBed } from '@angular/core/testing'
import { UiPriceModule } from './ui-price.module'

describe('UiPriceModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiPriceModule],
    }).compileComponents()
  }))

  it('should create', () => {
    expect(UiPriceModule).toBeDefined()
  })
})
