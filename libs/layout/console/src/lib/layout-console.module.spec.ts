import { async, TestBed } from '@angular/core/testing'
import { LayoutConsoleModule } from './layout-console.module'

describe('ConsoleModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LayoutConsoleModule],
    }).compileComponents()
  }))

  it('should create', () => {
    expect(LayoutConsoleModule).toBeDefined()
  })
})
