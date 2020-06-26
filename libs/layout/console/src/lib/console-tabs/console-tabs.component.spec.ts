import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { ConsoleTabsComponent } from './console-tabs.component'

describe('ConsoleTabsComponent', () => {
  let component: ConsoleTabsComponent
  let fixture: ComponentFixture<ConsoleTabsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ConsoleTabsComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleTabsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
