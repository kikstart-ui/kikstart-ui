import { async, TestBed } from '@angular/core/testing'
import { UiNavbarModule } from './ui-navbar.module'

describe('UiNavbarModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiNavbarModule],
    }).compileComponents()
  }))

  it('should create', () => {
    expect(UiNavbarModule).toBeDefined()
  })
})
