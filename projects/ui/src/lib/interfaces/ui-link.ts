export interface UiLink {
  label?: string
  path?: string
  url?: string
  icon?: string
  iconAfter?: string
  queryParams?: any
  children?: UiLink[]
}
