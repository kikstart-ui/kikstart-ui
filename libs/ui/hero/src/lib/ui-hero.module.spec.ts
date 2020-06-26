import { async, TestBed } from '@angular/core/testing'
import { UiHeroModule } from './ui-hero.module'

describe('UiHeroModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiHeroModule],
    }).compileComponents()
  }))

  it('should create', () => {
    expect(UiHeroModule).toBeDefined()
  })
})
