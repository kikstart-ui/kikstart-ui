import { async, TestBed } from '@angular/core/testing'
import { UiCardModule } from './ui-card.module'

describe('UiCardModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiCardModule],
    }).compileComponents()
  }))

  it('should create', () => {
    expect(UiCardModule).toBeDefined()
  })
})
