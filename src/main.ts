import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//The bootstrapping process sets up the execution environment, digs the root AppComponent out of the module's bootstrap array, //creates an instance of the component and inserts it within the element tag identified by the component's selector.

platformBrowserDynamic().bootstrapModule(AppModule);
