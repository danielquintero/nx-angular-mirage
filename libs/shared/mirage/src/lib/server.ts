import {
  Model,
  createServer,
  Request,
  Registry,
  Factory,
  Server,
} from 'miragejs';
import Schema from 'miragejs/orm/schema';
import { sharedScenario } from './scenarios';

const UserModel = Model.extend({
  name: 'hello',
});

const UserFactory = Factory.extend({
  age() {
    return Math.floor(Math.random() * (100 - 0 + 1) + 0);
  },
});

export type AppRegistry = Registry<
  /* factories can be defined here */
  {
    user: typeof UserModel;
  },
  /* factories can be defined here */
  {
    user: typeof UserFactory;
  }
>;

export type AppSchema = Schema<AppRegistry>;

export function makeServer({ environment = 'development' } = {}) {
  console.log(environment);
  const server = createServer({
    environment,
    models: {
      user: UserModel,
    },
    factories: {
      user: UserFactory,
    },
    seeds(_server: Server<AppRegistry>) {
      sharedScenario(_server);
    },
    routes() {
      this.namespace = 'api';
      this.get('/users', (schema: AppSchema, request: Request) => {
        return schema.all('user');
      });
    },
  });
  return server;
}
