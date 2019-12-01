import { NgModule } from '@angular/core';

import { UiModule } from '@kikstart/ui';

import { AuthLoginComponent } from './containers/auth-login.component';
import { AuthLogoutComponent } from './containers/auth-logout.component';
import { AuthRegisterComponent } from './containers/auth-register.component';
import { AuthResetComponent } from './containers/auth-reset.component';
import { AuthTokenComponent } from './containers/auth-token.component';
import { Route, RouterModule } from '@angular/router';

export const authWebAuthRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'logout', component: AuthLogoutComponent },
  { path: 'login', component: AuthLoginComponent },
  { path: 'register', component: AuthRegisterComponent },
  { path: 'reset-password', component: AuthResetComponent },
  { path: 'token', component: AuthTokenComponent },
];

@NgModule({
  imports: [UiModule, RouterModule.forChild(authWebAuthRoutes)],
  declarations: [
    AuthLoginComponent,
    AuthLogoutComponent,
    AuthRegisterComponent,
    AuthResetComponent,
    AuthTokenComponent,
  ],
})
export class AuthModule {}
