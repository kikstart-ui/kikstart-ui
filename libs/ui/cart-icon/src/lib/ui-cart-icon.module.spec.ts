import { async, TestBed } from '@angular/core/testing'
import { UiCartIconModule } from './ui-cart-icon.module'

describe('UiCartIconModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiCartIconModule],
    }).compileComponents()
  }))

  it('should create', () => {
    expect(UiCartIconModule).toBeDefined()
  })
})
