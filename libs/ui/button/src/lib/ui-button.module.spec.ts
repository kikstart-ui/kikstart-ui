import { async, TestBed } from '@angular/core/testing'
import { UiButtonModule } from './ui-button.module'

describe('UiButtonModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiButtonModule],
    }).compileComponents()
  }))

  it('should create', () => {
    expect(UiButtonModule).toBeDefined()
  })
})
