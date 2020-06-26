import { UiButton } from '@kikstart-ui/ui-button'
import { UiCommentAuthor } from './ui-comment-author'

export interface UiComment {
  id?: string
  text: string
  path?: string
  author?: UiCommentAuthor
  created?: Date | number | string
  commentCount?: number
  comments?: UiComment[]
  buttons?: UiButton[]
  [key: string]: any
}
