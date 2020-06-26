import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ConsoleEmptyComponent } from './console-empty.component'

describe('ConsoleEmptyComponent', () => {
  let component: ConsoleEmptyComponent
  let fixture: ComponentFixture<ConsoleEmptyComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleEmptyComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleEmptyComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
