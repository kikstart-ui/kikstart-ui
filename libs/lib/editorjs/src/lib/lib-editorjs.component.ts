import { AfterContentInit, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core'
import { OutputData } from '@editorjs/editorjs'
import { Block, NgxEditorJSComponent, NgxEditorJSService } from '@tinynodes/ngx-editorjs'
import { Subject } from 'rxjs'
import { map, pluck, take, takeUntil, tap } from 'rxjs/operators'
import { UiEditorDocument } from './ui-editor.document'

@Component({
  selector: 'ui-editorjs',
  template: `
    <div class="mb-2 text-right">
      <button class="btn btn-secondary" (click)="save()">Save</button>
    </div>

    <ngx-editorjs #ngxEditorJS [holder]="holder"></ngx-editorjs>
  `,
  styles: [
    `
      /deep/ .editor {
        background-color: rgba(255, 255, 255, 0.1);
        border: 0 !important;
        border-radius: 0 !important;
      }
      /deep/ .editor .icon .icon--toggler-down,
      /deep/ .editor .ce-inline-toolbar__dropdown-content,
      /deep/ .editor .ce-conversion-tool {
        color: #000;
      }
    `,
  ],
})
export class LibEditorjsComponent implements AfterContentInit {
  @ViewChild('ngxEditorJS', { read: NgxEditorJSComponent, static: true }) ngxEditorJS: NgxEditorJSComponent

  @Input() document: UiEditorDocument
  @Output() action = new EventEmitter()

  /**
   * Internal onDestroy$ subject
   */
  private readonly onDestroy$ = new Subject<boolean>()

  /**
   * The holder ID for this demo
   */
  public holder = 'ngx-editorjs-demo'

  constructor(private readonly editorService: NgxEditorJSService, private readonly cd: ChangeDetectorRef) {}

  /**
   * Get the blocks from the last change
   */
  public get blocks() {
    return this.editorService
      .lastChange({ holder: this.holder })
      .pipe(pluck<OutputData, Block[]>('blocks'), takeUntil(this.onDestroy$))
  }

  /**
   * Call the editor save method
   */
  public save() {
    this.editorService.save({ holder: this.holder }).subscribe((res) => {
      console.log('res', res)
    })
  }

  /**
   * Clear the editor
   */
  public clear() {
    this.editorService.clear({ holder: this.holder })
  }

  /**
   * Get the blocks data as formatted JSON
   */
  public get asJSON() {
    return this.blocks.pipe(
      take(1),
      map((blocks) => {
        return JSON.stringify(blocks, null, 4)
      }),
      tap(() => this.cd.markForCheck()),
    )
  }

  /**
   * Reset the editor with demo data
   */
  public reset() {
    return this.editorService
      .update({
        holder: this.holder,
        data: this.document,
      })
      .pipe(take(1))
  }

  public ngAfterContentInit(): void {
    this.reset().subscribe()
  }
}
