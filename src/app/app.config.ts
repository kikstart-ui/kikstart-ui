import { UiLayout } from '@kikstart/ui'

export const appLayout: UiLayout = {
  brand: {
    logo: 'assets/logo.svg',
    name: 'kikstart',
    product: 'ui',
    separator: '|',
    description: 'Set of ready to use declarative Angular UI components.',
  },
  header: {
    style: 'dark',
    links: [
      { path: '/home', label: 'Home', icon: 'mr-2 fa fa-fw fa-home' },
      { path: '/demo', label: 'Demo', icon: 'mr-2 fa fa-fw fa-magic' },
      { path: '/docs', label: 'Docs', icon: 'mr-2 fa fa-fw fa-book' },
      {
        url: 'https://github.com/beeman/kikstart-ui-starter',
        label: 'Starter',
        icon: 'mr-2 fa fa-fw fa-rocket',
      },
      {
        url: 'https://github.com/beeman/kikstart-ui',
        label: 'GitHub',
        icon: 'mr-2 fa fa-fw fa-github',
      },
    ],
  },
  footer: {
    html: `Copyright <a href="">kikstart.dev</a> 2019.`,
    links: [
      { url: 'https://github.com/beeman', label: '', icon: 'fa fa-fw fa-2x fa-github' },
      { url: 'https://twitter.com/beeman_nl', label: '', icon: 'fa fa-fw fa-2x fa-twitter' },
    ],
  },
}
