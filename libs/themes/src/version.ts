export const NAME = '@kikstart-ui/themes'
export const VERSION = '0.0.0-development'
export const makeTheme = (name, background, accent) => {
  return {
    name,
    background,
    accent,
    css: `css/${name}.css`,
    scss: `scss/${name}`,
    cdn: `https://unpkg.com/${NAME}@${VERSION}/css/${name}.css`,
    cdnMinified: `https://unpkg.com/${NAME}@${VERSION}/css/${name}.min.css`,
  }
}

export const THEMES = [
  makeTheme('pirate', '#2C3E50', '#fa8334'),
  makeTheme('dark', '#222', '#fa8334'),
  makeTheme('light', '#FFF', '#2C3E50'),
]
