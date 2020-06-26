import { Block } from '@tinynodes/ngx-editorjs'

export interface UiEditorDocument {
  blocks: Block[]
  time: number
  version: string
}
