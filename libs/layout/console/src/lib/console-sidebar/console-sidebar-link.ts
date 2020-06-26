import { ConsoleLink } from './console-link'

export interface ConsoleSidebarLink extends ConsoleLink {
  header?: boolean
  active?: boolean
  children?: ConsoleSidebarLink[]

  [key: string]: any
}
