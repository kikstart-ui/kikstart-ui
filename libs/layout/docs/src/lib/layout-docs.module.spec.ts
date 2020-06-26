import { async, TestBed } from '@angular/core/testing'
import { LayoutDocsModule } from './layout-docs.module'

describe('LayoutDocsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LayoutDocsModule],
    }).compileComponents()
  }))

  it('should create', () => {
    expect(LayoutDocsModule).toBeDefined()
  })
})
