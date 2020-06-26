import { async, TestBed } from '@angular/core/testing'
import { UiAvatarModule } from './ui-avatar.module'

describe('UiAvatarModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiAvatarModule],
    }).compileComponents()
  }))

  it('should create', () => {
    expect(UiAvatarModule).toBeDefined()
  })
})
