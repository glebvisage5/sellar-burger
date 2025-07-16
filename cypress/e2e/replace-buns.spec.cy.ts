import Cypress from 'cypress';
import { BASE_URL, ID_BUN, ID_ANOTHER_BUN, ID_FILLING } from './constants';

describe('Замена булок', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/ingredients', { fixture: 'ingredients.json' });
    cy.visit('/');
    cy.viewport(1440, 800);
    cy.get('#modals').as('modal');
  });

  it('Замена булки другой булкой при пустом списке начинок', () => {
    cy.get(ID_BUN).children('button').click();
    cy.get(ID_ANOTHER_BUN).children('button').click();
  });

  it('Замена булки другой булкой при полном списке начинок', () => {
    cy.get(ID_BUN).children('button').click();
    cy.get(ID_FILLING).children('button').click();
    cy.get(ID_ANOTHER_BUN).children('button').click();
  });
});