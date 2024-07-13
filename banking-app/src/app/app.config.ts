import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule,} from "@angular/common/http";
import {HttpInterceptorService} from "./services/http-interceptor/http-interceptor.service";

export const appConfig: ApplicationConfig = {



  providers: [
    provideRouter(routes),
    provideClientHydration(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },

    importProvidersFrom(BrowserModule, HttpClientModule),




  ]
};
