import { Component } from '@angular/core'

@Component({
  templateUrl: './code-simple.component.html',
})
export class CodeSimpleComponent {
  public language = 'graphql'
  public code = `mutation Login($data: LoginInput!) {
  login(data: $data) {
    token
    user {
      username
    }
  }
}`
}
