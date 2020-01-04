import { Injectable } from '@angular/core';

import { UiLink } from '@kikstart/ui';

@Injectable({ providedIn: 'root' })
export class DemoService {
  links: UiLink[] = [
    { path: '/demo/auth', label: 'ui-auth' },
    { path: '/demo/avatar', label: 'ui-avatar' },
    { path: '/demo/comment', label: 'ui-comment' },
  ];
}
