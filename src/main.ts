import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';

setBasePath(
  'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.1/cdn/'
);
