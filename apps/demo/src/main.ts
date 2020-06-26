import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment'

if (environment.production) {
  enableProdMode()
}

import 'marked/lib/marked'
import 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-graphql'
import 'prismjs/components/prism-json'

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err))
