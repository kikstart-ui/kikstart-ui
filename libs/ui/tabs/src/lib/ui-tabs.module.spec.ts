import { async, TestBed } from '@angular/core/testing'
import { UiTabsModule } from './ui-tabs.module'

describe('UiTabsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiTabsModule],
    }).compileComponents()
  }))

  it('should create', () => {
    expect(UiTabsModule).toBeDefined()
  })
})
