import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

import { UiLink } from '@kikstart/ui';
import { Document } from '../interface/document';

import docsJson from '../../content/docs.json';

@Injectable({
  providedIn: 'root',
})
export class DocsService {
  public navigation = new BehaviorSubject<UiLink[]>([]);
  public navigation$ = this.navigation.asObservable();

  public documents: { [key: string]: Document } = {};

  constructor() {
    this.navigation.next(this.getNavigation(docsJson, '/docs'));
    this.documents = this.readDocuments(docsJson, '');
  }

  readDocuments(docs, basePath) {
    return docs.reduce((acc, doc) => {
      const id = doc.id;
      const path = basePath + '/' + doc.id;
      const children = doc.children ? this.readDocuments(doc.children, path) : {};
      return { ...acc, [path]: { id, path, title: doc.title, content: doc.content }, ...children };
    }, {});
  }

  getNavigation(docs, basePath): UiLink[] {
    return docs.map(item => {
      const path = basePath + '/' + item.id;
      const label = item.title;
      const children = item.children ? this.getNavigation(item.children, path) : null;
      return { path, label, children };
    });
  }

  getDocument(url: unknown) {
    return of(this.documents[`/${url}`] ? this.documents[`/${url}`] : null);
  }
}
