import { async, TestBed } from '@angular/core/testing'
import { UiIconModule } from './ui-icon.module'

describe('UiIconModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiIconModule],
    }).compileComponents()
  }))

  it('should create', () => {
    expect(UiIconModule).toBeDefined()
  })
})
