import { Server } from 'miragejs';
import { AppRegistry } from '@mirage/shared/mirage';

export function sharedScenario(server: Server<AppRegistry>) {
  // create some users
  server.create('user', { name: 'John', age: 35 });
  server.create('user', { name: 'Jane' });
}
