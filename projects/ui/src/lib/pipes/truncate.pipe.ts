// Thanks to http://codebuckets.com/2018/01/23/angular-pipe-to-truncate-text-to-the-nearest-whole-word/
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, length: number): string {
    const biggestWord = 50
    const ellipses = '...'

    if (typeof value === 'undefined') {
      return value
    }
    if (value.length <= length) {
      return value
    }
    if (length < ellipses.length) {
      return ''
    }

    // .. truncate to about correct length
    let truncatedText = value.slice(0, length + biggestWord)

    // .. now nibble ends till correct length
    while (truncatedText.length > length - ellipses.length) {
      const lastSpace = truncatedText.lastIndexOf(' ')

      if (lastSpace === -1) {
        truncatedText = ''
        break
      }
      truncatedText = truncatedText.slice(0, lastSpace).replace(/[!,.?]$/, '')
    }
    return truncatedText + ellipses
  }
}
