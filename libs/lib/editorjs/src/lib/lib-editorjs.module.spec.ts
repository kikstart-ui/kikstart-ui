import { async, TestBed } from '@angular/core/testing'
import { LibEditorjsModule } from './lib-editorjs.module'

describe('LibEditorjsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LibEditorjsModule],
    }).compileComponents()
  }))

  it('should create', () => {
    expect(LibEditorjsModule).toBeDefined()
  })
})
