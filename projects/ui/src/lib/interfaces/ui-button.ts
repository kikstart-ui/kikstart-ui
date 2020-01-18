export interface UiButton {
  label?: string
  icon?: string
  iconAfter?: string
  className?: string
  path?: string
  url?: string
  action?: string
  disabled?: boolean
  queryParams?: { [k: string]: any }
  payload?: any
  handler?: (...params) => void
  [key: string]: any
}
