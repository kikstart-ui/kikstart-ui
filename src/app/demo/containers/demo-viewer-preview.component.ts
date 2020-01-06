import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-viewer-preview',
  template: `
    <ng-template #demo></ng-template>
  `,
})
export class DemoViewerPreviewComponent implements AfterViewInit, OnDestroy {
  @ViewChild('demo', { read: ViewContainerRef, static: false }) demoRef: ViewContainerRef;
  @Input() public component: any;

  private demoComponentRef: ComponentRef<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    Promise.resolve(null).then(() => this.renderDemoComponent());
  }

  ngOnDestroy() {
    if (this.demoComponentRef) {
      this.demoComponentRef.destroy();
    }
  }

  renderDemoComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
    this.demoComponentRef = this.demoRef.createComponent(componentFactory);
  }
}
