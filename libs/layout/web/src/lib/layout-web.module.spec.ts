import { async, TestBed } from '@angular/core/testing'
import { LayoutWebModule } from './layout-web.module'

describe('LayoutWebModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LayoutWebModule],
    }).compileComponents()
  }))

  it('should create', () => {
    expect(LayoutWebModule).toBeDefined()
  })
})
