import { async, TestBed } from '@angular/core/testing'
import { UiLabelModule } from './ui-label.module'

describe('UiLabelModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiLabelModule],
    }).compileComponents()
  }))

  it('should create', () => {
    expect(UiLabelModule).toBeDefined()
  })
})
