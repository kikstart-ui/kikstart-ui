import { FormHelper } from '@kikstart/ui';

export class AuthWebHelper {
  static loginLink = { path: '/login', label: 'Log in' };
  static logoutLink = { path: '/logout', label: 'Logging out...' };
  static signedOutLink = { path: '/logout', label: 'You are logged out.' };
  static registerLink = { path: '/register', label: 'Register' };
  static forgotLink = { path: '/reset-password', label: 'Forgot password?' };
  static loadingLink = { path: '/token', label: 'Loading...' };

  static emailField = FormHelper.email('email', {
    label: 'Email',
    required: true,
  });
  static nameField = FormHelper.input('name', {
    label: 'Name',
    required: true,
  });
  static passwordField = FormHelper.password('password', {
    label: 'Password',
    minLength: 8,
  });
  static usernameField = FormHelper.input(
    'username',
    {
      label: 'Username',
      required: true,
    },
    { focus: true },
  );

  static registerFields: FormHelper[] = [
    AuthWebHelper.usernameField,
    AuthWebHelper.nameField,
    AuthWebHelper.emailField,
    AuthWebHelper.passwordField,
  ];
  static loginFields: FormHelper[] = [AuthWebHelper.usernameField, AuthWebHelper.passwordField];
}
