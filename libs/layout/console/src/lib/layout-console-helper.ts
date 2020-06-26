import { ConsoleThumb } from './console-thumbs/console-thumbs.component'

export class LayoutConsoleHelper {
  static header(label: string, children: any[]) {
    return { header: true, label, children }
  }

  static link(path: string, label: string, icon: string) {
    return { path, label, icon }
  }

  static thumb(title: string, { description, route }: { description?: string; route?: string }): ConsoleThumb {
    return {
      route,
      title,
      description,
    }
  }
}
