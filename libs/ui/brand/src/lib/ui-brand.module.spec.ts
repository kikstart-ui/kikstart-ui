import { async, TestBed } from '@angular/core/testing'
import { UiBrandModule } from './ui-brand.module'

describe('UiBrandModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiBrandModule],
    }).compileComponents()
  }))

  it('should create', () => {
    expect(UiBrandModule).toBeDefined()
  })
})
