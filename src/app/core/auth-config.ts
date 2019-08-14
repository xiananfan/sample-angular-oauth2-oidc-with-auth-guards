import { AuthConfig } from 'angular-oauth2-oidc';
import { AppConfigService } from './app-config.service';

// export const authConfig: AuthConfig = {
//   issuer: 'https://demo.identityserver.io',
//   clientId: 'implicit',
//   redirectUri: window.location.origin + '/index.html',
//   silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
//   scope: 'openid profile email api',
//   silentRefreshTimeout: 5000, // For faster testing
//   timeoutFactor: 0.25, // For faster testing
//   sessionChecksEnabled: true,
//   showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
//   clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040
// };

export const authConfigFactory: Function = (appConfig: AppConfigService) => {
  console.log(appConfig);
  console.log(appConfig.getConfig());
  const authConfig: AuthConfig = {
    issuer: `${appConfig.getConfig().auth.authDomain}`,
    clientId: appConfig.getConfig().auth.authClientId,
    redirectUri: `${window.location.origin}/index.html`,
    silentRefreshRedirectUri: `${window.location.origin}/silent-refresh.html`,
    // logoutUrl: `${appConfig.getConfig().auth.authDomain}/v2/logout?client_id=${
    //   appConfig.getConfig().auth.authClientId
    // }&returnTo=${encodeURIComponent(window.location.origin)}`,
    // responseType: 'token id_token',
    scope: 'openid profile email',
    silentRefreshTimeout: 5000, // For faster testing
    timeoutFactor: 0.25, // For faster testing
    sessionChecksEnabled: true,
    showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
    clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040
  };

  return authConfig;
};
