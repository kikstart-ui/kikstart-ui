export interface UiButton {
  label: string;
  path?: string;
  queryParams?: { [k: string]: any };
  action?: string;
  payload?: any;
  icon?: string;
  iconAfter?: string;
}
