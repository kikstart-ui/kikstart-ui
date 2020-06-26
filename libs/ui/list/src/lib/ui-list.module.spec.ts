import { async, TestBed } from '@angular/core/testing'
import { UiListModule } from './ui-list.module'

describe('UiListModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiListModule],
    }).compileComponents()
  }))

  it('should create', () => {
    expect(UiListModule).toBeDefined()
  })
})
