import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ConsoleIndexComponent } from './console-index.component'

describe('ConsoleIndexComponent', () => {
  let component: ConsoleIndexComponent
  let fixture: ComponentFixture<ConsoleIndexComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleIndexComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleIndexComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
