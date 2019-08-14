import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf, APP_INITIALIZER } from '@angular/core';
import { AuthConfig, JwksValidationHandler, OAuthModule, OAuthModuleConfig, OAuthStorage, ValidationHandler } from 'angular-oauth2-oidc';

import { AppConfigService } from './app-config.service';
import { authConfigFactory } from './auth-config';
import { AuthGuardWithForcedLogin } from './auth-guard-with-forced-login.service';
import { AuthGuard } from './auth-guard.service';
import { authModuleConfig } from './auth-module-config';
import { AuthService } from './auth.service';

// We need a factory since localStorage is not available at AOT build time
export function storageFactory(): OAuthStorage {
  return localStorage;
}

export function appConfigInitializer(appConfig: AppConfigService): Function {
  return () => {
    return appConfig.loadAppConfig();
  };
}

@NgModule({
  imports: [
    HttpClientModule,
    OAuthModule.forRoot(),
  ],
  providers: [
    AuthService,
    AuthGuard,
    AuthGuardWithForcedLogin,
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: AuthConfig, useFactory: authConfigFactory, deps: [AppConfigService] },
        { provide: OAuthModuleConfig, useValue: authModuleConfig },
        { provide: ValidationHandler, useClass: JwksValidationHandler },
        { provide: OAuthStorage, useFactory: storageFactory },
        AppConfigService,
        { provide: APP_INITIALIZER, useFactory: appConfigInitializer, multi: true, deps: [AppConfigService] }
      ]
    };
  }

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
