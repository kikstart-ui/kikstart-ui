import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { ConsoleNavbarComponent } from '@kikstart-ui/layout-console'

import { ConsoleSidebarComponent } from './console-sidebar.component'

describe('ConsoleSidebarComponent', () => {
  let component: ConsoleSidebarComponent
  let fixture: ComponentFixture<ConsoleSidebarComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ConsoleSidebarComponent, ConsoleNavbarComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleSidebarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
