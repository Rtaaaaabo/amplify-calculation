import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";
import { IonicModule } from "@ionic/angular";

import { routes } from "./app.routes";
import { provideIonicAngular } from "@ionic/angular/standalone";

export const appConfig: ApplicationConfig = {
 providers: [
  provideRouter(routes),
  importProvidersFrom(IonicModule.forRoot()),
  provideIonicAngular({}),
 ],
};
