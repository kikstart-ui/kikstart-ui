import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { UiLink } from '@kikstart/ui';
import { Post } from '../interface/post';

import postsJson from '../../content/posts.json';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  public documents: { [key: string]: Post } = {};

  constructor() {
    this.documents = this.readDocuments(postsJson);
  }

  readDocuments(docs) {
    return docs.reduce((acc, doc) => ({ ...acc, [doc.id]: doc }), {});
  }

  getPosts() {
    return of(Object.keys(this.documents).map(id => this.documents[id]));
  }

  getPost(url: string) {
    return of(this.documents[url] ? { data: this.documents[url] } : { errors: [{ message: 'Not found' }] });
  }
}
