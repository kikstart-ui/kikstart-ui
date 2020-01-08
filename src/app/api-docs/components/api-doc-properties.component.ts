import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-doc-properties',
  template: `
    <ui-card>
      <ui-card-header [cardTitle]="document.name"></ui-card-header>
      <ui-card-body *ngIf="document.description">
        <div [innerHtml]="document.description"></div>
      </ui-card-body>
      <ng-container *ngIf="document.links as links">
        <ui-sidebar [links]="links"></ui-sidebar>
      </ng-container>
      <ng-container *ngIf="!document.links">
        <tabset>
          <tab heading="Overview">
            <ui-card-body>
              <div *ngIf="document.inputsClass && document.inputsClass.length">
                <h4>Inputs</h4>
                <table class="table table-striped table-sm">
                  <tr>
                    <th class="w-25">Name</th>
                    <th class="w-25">Type</th>
                    <th class="w-50">Default</th>
                  </tr>
                  <tr *ngFor="let item of document.inputsClass">
                    <td>
                      <code>{{ item.name }}</code>
                    </td>
                    <td>
                      <code>{{ item.type }}</code>
                    </td>
                    <td>
                      <code>{{ item.defaultValue }}</code>
                    </td>
                  </tr>
                </table>
              </div>

              <div *ngIf="document.outputsClass && document.outputsClass.length">
                <h4>Outputs</h4>
                <table class="table table-sm">
                  <tr>
                    <th class="w-25">Name</th>
                    <th class="w-75">Type</th>
                  </tr>
                  <tr *ngFor="let item of document.outputsClass">
                    <td>
                      <code>{{ item.name }}</code>
                    </td>
                    <td>
                      <code>{{ item.type }}</code>
                    </td>
                  </tr>
                </table>
              </div>

              <div *ngIf="document.propertiesClass && document.propertiesClass.length">
                <h4>Properties</h4>
                <table class="table table-sm">
                  <tr>
                    <th class="w-25">Name</th>
                    <th class="w-25">Type</th>
                    <th class="w-50">Description</th>
                  </tr>
                  <tr *ngFor="let item of document.propertiesClass">
                    <td>
                      <code>{{ item.name }}</code>
                      <span class="mt-1 badge badge-light pull-right" *ngIf="item.optional">
                        Optional
                      </span>
                    </td>
                    <td>
                      <code>{{ item.type }}</code>
                    </td>
                    <td>
                      <code>{{ item.description }}</code>
                    </td>
                  </tr>
                </table>
              </div>
              <div *ngIf="document.properties && document.properties.length">
                <h4>Properties</h4>
                <table class="table table-sm">
                  <tr>
                    <th class="w-25">Name</th>
                    <th class="w-25">Type</th>
                    <th class="w-50">Description</th>
                  </tr>
                  <tr *ngFor="let item of document.properties">
                    <td>
                      <code>{{ item.name }}</code>
                      <span class="mt-1 badge badge-light pull-right" *ngIf="item.optional">
                        Optional
                      </span>
                    </td>
                    <td>
                      <code>{{ item.type }}</code>
                    </td>
                    <td>
                      <code>{{ item.description }}</code>
                    </td>
                  </tr>
                </table>
              </div>
              <div *ngIf="document.methods && document.methods.length">
                <h4>Methods</h4>
                <table class="table table-sm">
                  <tr>
                    <th class="w-25">Name</th>
                    <th class="w-50">Args</th>
                    <th class="w-25">ReturnType</th>
                  </tr>
                  <tr *ngFor="let item of document.methods">
                    <td>
                      <code>{{ item.name }}</code>
                      <span class="mt-1 badge badge-light pull-right" *ngIf="item.optional">
                        Optional
                      </span>
                    </td>
                    <td>
                      <div *ngFor="let arg of item.args">
                        <code>{{ arg.name }} : {{ arg.type }}</code>
                      </div>
                    </td>
                    <td>
                      <code>{{ item.returnType }}</code>
                    </td>
                  </tr>
                </table>
              </div>
              <div *ngIf="document.methodsClass && document.methodsClass.length">
                <h4>Methods</h4>
                <table class="table table-sm">
                  <tr>
                    <th class="w-25">Name</th>
                    <th class="w-25">ReturnType</th>
                    <th class="w-50">Args</th>
                  </tr>
                  <tr *ngFor="let item of document.methodsClass">
                    <td>
                      <code>{{ item.name }}</code>
                      <span class="mt-1 badge badge-light pull-right" *ngIf="item.optional">
                        Optional
                      </span>
                    </td>
                    <td>
                      <code>{{ item.returnType }}</code>
                    </td>
                    <td>
                      <code>{{ item.args.join(' ') }}</code>
                    </td>
                  </tr>
                </table>
              </div>
            </ui-card-body>
          </tab>
          <tab heading="Source" *ngIf="document?.sourceCode">
            <div class="p-2">
              <ui-code [code]="document?.sourceCode" language="typescript"></ui-code>
            </div>
          </tab>
          <tab heading="Template" *ngIf="document?.template || document?.templateData">
            <div class="p-2">
              <ui-code
                [code]="document?.template || document?.templateData"
                language="html"
              ></ui-code>
            </div>
          </tab>
          <tab heading="Styles" *ngIf="document?.styles && document?.styles.length">
            <div class="p-2" *ngFor="let style of document?.styles">
              <ui-code [code]="style" language="css"></ui-code>
            </div>
          </tab>
          <tab heading="Styles" *ngIf="document?.styleUrlsData && document.styleUrlsData.length">
            <div class="p-2" *ngFor="let style of document?.styleUrlsData">
              <ui-code [code]="style.data" language="css"></ui-code>
            </div>
          </tab>
        </tabset>
      </ng-container>
    </ui-card>
  `,
})
export class ApiDocPropertiesComponent {
  @Input() public document: any
}
