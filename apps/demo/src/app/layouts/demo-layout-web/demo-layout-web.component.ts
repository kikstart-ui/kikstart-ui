import { Component } from '@angular/core'

@Component({
  template: `
    <web-layout>
      <web-header>
        <div class="text-center py-5 bg-dark">
          Hello I am the Header
        </div>
      </web-header>

      <web-page>
        <div class="h-100  align-items-center">
          <ui-hero
            class="grd-kikstart-2 mx-3 mx-md-5"
            title="Web Layout"
            description="The Web layout is a standard header/content/footer layout"
            [link]="{
              label: 'Other layouts',
              path: '/layouts',
              icon: 'fa-arrow-left',
              className: 'btn btn-lg  border-pink-100 text-pink-100'
            }"
          ></ui-hero>
        </div>
      </web-page>

      <footer class="bg-dark">
        <small class="d-block py-5 text-center text-muted">Copyright &copy; 2020</small>
      </footer>
    </web-layout>
  `,
})
export class DemoLayoutWebComponent {}
