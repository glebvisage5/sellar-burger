import Cypress from 'cypress';
import { BASE_URL, ID_BUN, ID_ANOTHER_BUN, ID_FILLING } from './constants';

describe('Добавление ингредиента в список заказа', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/ingredients', { fixture: 'ingredients.json' });
    cy.visit('/');
    cy.viewport(1440, 800);
    cy.get('#modals').as('modal');
  });

  it('Инкремент счетчика ингредиента', () => {
    cy.get(ID_FILLING).children('button').click();
    cy.get(ID_FILLING).find('.counter__num').contains('1');
  });
});