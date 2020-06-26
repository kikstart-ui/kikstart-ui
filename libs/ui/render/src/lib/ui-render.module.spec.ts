import { async, TestBed } from '@angular/core/testing'
import { UiRenderModule } from './ui-render.module'

describe('UiRenderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiRenderModule],
    }).compileComponents()
  }))

  it('should create', () => {
    expect(UiRenderModule).toBeDefined()
  })
})
