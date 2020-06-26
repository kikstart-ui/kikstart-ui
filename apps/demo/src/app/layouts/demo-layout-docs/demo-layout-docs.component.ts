import { Component } from '@angular/core'
import { UiLink } from '@kikstart-ui/ui-link'

@Component({
  template: `
    <docs-layout>
      <docs-sidebar basePath="/layouts/docs/" [links]="links"> </docs-sidebar>
      <ui-hero
        class="grd-kikstart-3 mb-3 mb-md-5"
        [title]="'Docs Layout'"
        [link]="{
          label: 'Other layouts',
          path: '/layouts',
          icon: 'fa-arrow-left',
          className: 'btn btn-lg  border-pink-100 text-pink-100'
        }"
      >
        <span class="left align-self-center ml-2">
          <span class="badge badge-warning">Work in Progress</span>
        </span>
      </ui-hero>
    </docs-layout>
  `,
})
export class DemoLayoutDocsComponent {
  links: UiLink[] = [
    { path: 'introduction', label: 'Introduction' },
    { path: 'getting-started', label: 'Getting Started' },
    {
      path: 'installation',
      label: 'Installation',
      children: [
        { path: 'installation/new-project', label: 'New Project' },
        { path: 'installation/existing-project', label: 'Existing Project' },
      ],
    },
    {
      path: 'extending',
      label: 'Extending',
      children: [
        { path: 'extending/custom-icons', label: 'Custom Icons' },
        { path: 'extending/custom-layouts', label: 'Custom Layouts' },
        { path: 'extending/custom-themes', label: 'Custom Themes' },
      ],
    },
    {
      path: 'support',
      label: 'Support',
      children: [
        { path: 'support/troubleshooting', label: 'Troubleshooting' },
        { path: 'support/submit-issue', label: 'Submit an Issue' },
        {
          path: 'support/paid-support',
          label: 'Paid Support',
          children: [
            { path: 'support/paid-support/on-site', label: 'On-site' },
            { path: 'support/paid-support/remote', label: 'Remote' },
          ],
        },
      ],
    },
  ]
}
