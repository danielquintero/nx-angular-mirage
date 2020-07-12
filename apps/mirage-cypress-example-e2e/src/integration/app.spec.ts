import { Server } from 'miragejs';

import { makeServer } from '@mirage/shared/mirage';
import { sharedScenario } from '@mirage/shared/mirage';

let server: Server;

describe('mirage-cypress-example', () => {
  beforeEach(() => {
    server = makeServer({ environment: 'test' });
    sharedScenario(server);
    cy.visit('/');
  });

  it('should display users list', () => {
    cy.get('[data-cy=user-list]').should('have.length', 2);
    cy.get('[data-cy=user-list]').contains('John');
    cy.get('[data-cy=user-list]').contains('Jane');
  });
});
