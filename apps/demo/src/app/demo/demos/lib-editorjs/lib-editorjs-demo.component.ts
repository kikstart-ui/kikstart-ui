import { Component } from '@angular/core'
import { UiEditorDocument } from '@kikstart-ui/lib-editorjs'

@Component({
  templateUrl: './lib-editorjs-demo.component.html',
})
export class LibEditorjsDemoComponent {
  public examples: UiEditorDocument[] = [
    {
      time: 1591408117394,
      version: '2.18.0',
      blocks: [
        {
          type: 'list',
          data: {
            style: 'unordered',
            items: ['Something else', 'New thing', 'Is this it?', 'What about this'],
          },
        },
        {
          type: 'header',
          data: {
            text: 'Header',
            level: 2,
          },
        },
        {
          type: 'quote',
          data: {
            text: 'This is what the say',
            caption: 'Someone.',
            alignment: 'left',
          },
        },
        {
          type: 'header',
          data: {
            text: 'What Is It?',
            level: 2,
          },
        },
        {
          type: 'paragraph',
          data: {
            text:
              'This component provide block level editing of your content - with an extendable Plugin architecture and Observable API you can use EditorJS in your application in minutes',
          },
        },
        {
          type: 'header',
          data: {
            text: 'How to use?',
            level: 2,
          },
        },
        {
          type: 'paragraph',
          data: {
            text:
              'Click on the editor area and select a block and then start typing!  Check your console when you hit save.',
          },
        },
      ],
    },
  ]
}
