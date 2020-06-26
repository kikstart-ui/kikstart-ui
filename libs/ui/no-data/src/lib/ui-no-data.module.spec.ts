import { async, TestBed } from '@angular/core/testing'
import { UiNoDataModule } from './ui-no-data.module'

describe('UiNoDataModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiNoDataModule],
    }).compileComponents()
  }))

  it('should create', () => {
    expect(UiNoDataModule).toBeDefined()
  })
})
