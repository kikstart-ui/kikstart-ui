import { Injectable } from '@angular/core'
import { BehaviorSubject, of } from 'rxjs'
import { upperFirst } from 'lodash'

import { UiLink } from '@kikstart/ui'

import docsJson from '../documentation.json'

@Injectable({
  providedIn: 'root',
})
export class ApiDocsService {
  public navigation = new BehaviorSubject<UiLink[]>([])
  public navigation$ = this.navigation.asObservable()
  public pages: { [key: string]: any } = {}

  constructor() {
    this.parseDocs(
      docsJson,
      ['classes', 'components', 'injectables', 'interfaces', 'pipes', 'services'],
      '/api-docs/',
    )
  }

  parseDocs(docs: any, parts: string[], basePath: string) {
    const nav: UiLink[] = []
    const index = {
      name: 'API Docs',
      path: 'index',
      links: [],
    }

    parts.forEach(part => {
      const baseLink = basePath + part
      const name = upperFirst(part)
      const link: UiLink = { label: name, path: baseLink, children: [] }
      const pages = docs[part] || []

      if (!pages.length) {
        return
      }
      pages.forEach(page => {
        // Add the page
        this.pages[part + '/' + page.name] = page
        // Add the page link
        link.children.push({ label: page.name, path: baseLink + '/' + page.name, children: [] })
      })

      // Add an index page for this part
      this.pages[part] = { name: upperFirst(part), links: link.children }

      // Add a link to this index page
      index.links.push(link)

      nav.push(link)
    })

    this.pages[index.path] = index

    this.navigation.next([{ path: basePath + index.path, label: index.name }, ...nav])
  }

  getPage(url: string) {
    return of(this.pages[url] ? this.pages[url] : null)
  }
}
