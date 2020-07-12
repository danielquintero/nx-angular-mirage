import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Request, Response, Server } from 'miragejs';

import { AppRegistry } from '@mirage/shared/mirage';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

if ((window as any).Cypress) {
  // tslint:disable-next-line: no-unused-expression
  new Server({
    environment: 'test',
    routes() {
      const methods = ['get', 'put', 'patch', 'post', 'delete'];
      methods.forEach((method) => {
        this[method]('/*', async (schema: AppRegistry, request: Request) => {
          const [
            status,
            headers,
            body,
          ] = await (window as any).handleFromCypress(request);
          return new Response(status, headers, body);
        });
      });
    },
  });
}
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
