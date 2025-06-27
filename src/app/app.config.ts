import { APP_INITIALIZER, ApplicationConfig, ErrorHandler, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Router } from '@angular/router';

import { routes } from './app.routes';
import * as Sentry from "@sentry/angular";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler(),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
    provideFirebaseApp(() => initializeApp(
      {
        apiKey: "AIzaSyCJG4B4YhazPTq5HfZnYuMML07ouGmC10A",
        authDomain: "site3304-dc397.firebaseapp.com",
        projectId: "site3304-dc397",
        storageBucket: "site3304-dc397.firebasestorage.app",
        messagingSenderId: "418698337162",
        appId: "1:418698337162:web:c59b648c321039c291c673"
      })), 
    provideAuth(() => getAuth())
  ]
};
