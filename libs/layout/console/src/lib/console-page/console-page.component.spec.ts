import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { ConsoleTabsComponent } from '@kikstart-ui/layout-console'

import { ConsolePageComponent } from './console-page.component'

describe('ConsolePageComponent', () => {
  let component: ConsolePageComponent
  let fixture: ComponentFixture<ConsolePageComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ConsolePageComponent, ConsoleTabsComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolePageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
