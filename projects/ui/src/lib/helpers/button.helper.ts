import { UiButton } from '../../public-api';

export enum UiButtonActions {
  COMMENT = 'COMMENT',
  LIKE = 'LIKE',
}

export enum UiButtonIcons {
  COMMENT = 'fa fa-fw fa-comment',
  LIKE = 'fa fa-fw fa-heart',
}

export class ButtonHelper {
  static button(config: UiButton): UiButton {
    return { ...config };
  }
  static comment(config: UiButton): UiButton {
    return ButtonHelper.button({
      icon: config.icon || config.iconAfter ? null : UiButtonIcons.COMMENT,
      action: config.action || config.path ? null : UiButtonActions.COMMENT,
      ...config,
    });
  }

  static like(config: UiButton): UiButton {
    return ButtonHelper.button({
      icon: config.icon || config.iconAfter ? null : UiButtonIcons.LIKE,
      action: config.action || config.path ? null : UiButtonActions.LIKE,
      ...config,
    });
  }
}
