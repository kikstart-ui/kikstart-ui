import { UiButton } from './ui-button'

export enum UiButtonActions {
  COMMENT = 'COMMENT',
  LIKE = 'LIKE',
}

export enum UiButtonIcons {
  COMMENT = 'fa fa-fw fa-comment',
  LIKE = 'fa fa-fw fa-heart',
}

export class UiButtonHelper {
  static button(config: UiButton): UiButton {
    return { ...config }
  }
  static comment(config: UiButton): UiButton {
    return UiButtonHelper.button({
      icon: config.icon || config.iconAfter ? null : UiButtonIcons.COMMENT,
      action: config.action || config.path ? null : UiButtonActions.COMMENT,
      ...config,
    })
  }

  static like(config: UiButton): UiButton {
    return UiButtonHelper.button({
      icon: config.icon || config.iconAfter ? null : UiButtonIcons.LIKE,
      action: config.action || config.path ? null : UiButtonActions.LIKE,
      ...config,
    })
  }
}

export class ButtonHelper extends UiButtonHelper {}
