import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://demo.identityserver.io',
  loginUrl: 'https://demo.identityserver.io/connect/authorize',
  logoutUrl: 'https://demo.identityserver.io/connect/endsession',
  tokenEndpoint: 'https://demo.identityserver.io/connect/token',
  sessionCheckIFrameUrl: 'https://demo.identityserver.io/connect/checksession',
  userinfoEndpoint: 'https://demo.identityserver.io/connect/userinfo',
  clientId: 'implicit',
  redirectUri: window.location.origin + '/index.html',
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  scope: 'openid profile email',
  silentRefreshTimeout: 5000, // For faster testing
  timeoutFactor: 0.25, // For faster testing
  sessionChecksEnabled: true,
  showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
  clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040
};
