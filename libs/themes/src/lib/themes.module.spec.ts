import { async, TestBed } from '@angular/core/testing'
import { ThemesModule } from './themes.module'

describe('ThemesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ThemesModule],
    }).compileComponents()
  }))

  it('should create', () => {
    expect(ThemesModule).toBeDefined()
  })
})
