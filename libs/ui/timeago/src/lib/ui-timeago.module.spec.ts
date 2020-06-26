import { async, TestBed } from '@angular/core/testing'
import { UiTimeagoModule } from './ui-timeago.module'

describe('UiTimeagoModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiTimeagoModule],
    }).compileComponents()
  }))

  it('should create', () => {
    expect(UiTimeagoModule).toBeDefined()
  })
})
