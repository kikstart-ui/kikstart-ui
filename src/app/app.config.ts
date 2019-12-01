import { UiLayout } from '@kikstart/ui';

export const appLayout: UiLayout = {
  brand: {
    logo: 'assets/logo.png',
    name: 'kikstart.dev',
    product: 'ui',
    separator: '|',
  },
  header: {
    style: 'dark',
    links: [
      { path: 'home', label: 'Home', icon: 'fa fa-fw fa-home' },
      { path: 'docs', label: 'Docs', icon: 'fa fa-fw fa-book' },
      { path: 'blog', label: 'Blog', icon: 'fa fa-fw fa-rss' },
      { path: 'style-guide', label: 'Style Guide', icon: 'fa fa-fw fa-paint-brush' },
      { url: 'https://github.com/beeman/kikstart-ui', label: 'GitHub', icon: 'fa fa-fw fa-github' },
    ],
  },
  footer: {
    html: `Copyright <a href="">kikstart.dev</a> 2019.`,
    links: [
      { url: 'https://github.com/beeman', label: '', icon: 'fa fa-fw fa-2x fa-github' },
      { url: 'https://twitter.com/beeman_nl', label: '', icon: 'fa fa-fw fa-2x fa-twitter' },
    ],
  },
};
