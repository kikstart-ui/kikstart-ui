import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { ConsoleThumbsComponent } from './console-thumbs.component'

describe('ConsoleThumbsComponent', () => {
  let component: ConsoleThumbsComponent
  let fixture: ComponentFixture<ConsoleThumbsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ConsoleThumbsComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleThumbsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
