export interface UiLink {
  label?: string
  icon?: string
  iconAfter?: string
  className?: string
  path?: string
  url?: string
  queryParams?: any
  children?: UiLink[]
  [key: string]: any
}
