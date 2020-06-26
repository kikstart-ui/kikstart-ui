declare var require: any

const getLastPart = (item: string, separator: string) => {
  const parts = item.split(separator)
  return parts[parts.length - 1]
}

export class DemoHelper {
  static rand = (items) => items[Math.floor(Math.random() * items.length)]
  static fileType = (name) => {
    const ext = getLastPart(name, '.')

    switch (ext) {
      case 'graphql':
        return 'graphql'
      case 'html':
        return 'html'
      case 'md':
        return 'markdown'
      case 'js':
        return 'javascript'
      case 'json':
        return 'json'
      case 'ts':
        return 'typescript'
      default:
        console.log(`DemoHelper.fileType: Unknown extension ${ext}... Default: html`)
        return 'html'
    }
  }

  static file = (path, language = null) => {
    const name = getLastPart(path, '/')

    return {
      name,
      language: language ? language : DemoHelper.fileType(name),
      code: require(`!!raw-loader!./${path}`).default,
    }
  }

  static config = ({
    path,
    component,
    files,
    title,
    description,
  }: {
    path: string
    component: any
    files: string[]
    title: string
    description: string
  }) => {
    return {
      path,
      title,
      description,
      component,
      files: files.map((file) => DemoHelper.file(`${path}/${file}`)),
    }
  }
}
