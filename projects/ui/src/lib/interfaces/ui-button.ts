export interface UiButton {
  label?: string
  className?: string
  disabled?: boolean
  path?: string
  queryParams?: { [k: string]: any }
  action?: string
  payload?: any
  icon?: string
  iconAfter?: string
  handler?: (...params) => void
}
