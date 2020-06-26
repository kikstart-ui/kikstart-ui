import { async, TestBed } from '@angular/core/testing'
import { UiLoadingModule } from './ui-loading.module'

describe('UiLoadingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiLoadingModule],
    }).compileComponents()
  }))

  it('should create', () => {
    expect(UiLoadingModule).toBeDefined()
  })
})
