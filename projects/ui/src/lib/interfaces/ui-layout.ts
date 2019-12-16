import { UiBrand } from './ui-brand';
import { UiLink } from './ui-link';

export interface UiLayout {
  brand: UiBrand;
  header?: {
    fluid?: boolean;
    style?: 'dark' | 'light';
    links?: UiLink[];
  };
  content?: {
    fluid?: boolean;
    padding?: boolean;
  };
  footer?: {
    html?: string;
    text?: string;
    links?: UiLink[];
  };
}
