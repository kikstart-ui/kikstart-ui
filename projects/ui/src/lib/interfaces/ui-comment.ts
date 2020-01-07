import { UiUser } from './ui-user';
import { UiButton } from './ui-button';

export interface UiComment {
  id?: string;
  text: string;
  path?: string;
  author?: UiUser;
  created?: Date | number | string;
  commentCount?: number;
  comments?: UiComment[];
  buttons?: UiButton[];
  [key: string]: any;
}
