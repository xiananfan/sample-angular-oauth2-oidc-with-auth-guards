import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from './model/app-config.model';

@Injectable()
export class AppConfigService {
  private appConfig: AppConfig;

  constructor(private http: HttpClient) {
    console.log('entering AppConfigService constructor');
  }

  async loadAppConfig(): Promise<void> {
    return this.http
      .get('/assets/config.json')
      .toPromise()
      .then((data: AppConfig) => {
        this.appConfig = data;
        console.log('the appConfig has been loaded');
      });
  }

  getConfig(): AppConfig {
    return this.appConfig;
  }
}
