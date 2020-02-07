import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
} from '@angular/core'

@Component({
  selector: 'ui-render',
  template: `
    <ng-template #target></ng-template>
  `,
})
export class UiRenderComponent implements AfterViewInit, OnDestroy {
  @ViewChild('target', { read: ViewContainerRef }) ref: ViewContainerRef
  @Input() public component: any
  @Input() public inputs: any[]
  @Input() public outputs: any[]

  private componentRef: ComponentRef<any>

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    Promise.resolve(null).then(() => this.renderDemoComponent())
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy()
    }
  }

  renderDemoComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component)
    this.componentRef = this.ref.createComponent(componentFactory)

    if (this.componentRef.instance) {
      // Wire up the inputs
      if (this.inputs && Object.keys(this.inputs).length) {
        Object.keys(this.inputs).forEach(input => {
          this.componentRef.instance[input] = this.inputs[input]
        })
      }
      // Wire up the outputs
      if (this.outputs && Object.keys(this.outputs).length) {
        Object.keys(this.outputs).forEach(output => {
          this.componentRef.instance.action.subscribe(res => this.outputs[output](res))
        })
      }
    }
  }
}
