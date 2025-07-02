import Cypress from 'cypress';

const BASE_URL = 'https://norma.nomoreparties.space/api';
const ID_BUN = `[data-cy=${'643d69a5c3f7b9001cfa093c'}]`;
const ID_ANOTHER_BUN = `[data-cy=${'643d69a5c3f7b9001cfa093d'}]`;
const ID_FILLING = `[data-cy=${'643d69a5c3f7b9001cfa0941'}]`;



describe('Замена булок', () => {
  const ID_BUN = `[data-cy='643d69a5c3f7b9001cfa093c']`;
  const ID_ANOTHER_BUN = `[data-cy='643d69a5c3f7b9001cfa093d']`;
  const ID_FILLING = `[data-cy='643d69a5c3f7b9001cfa0941']`;

  beforeEach(() => {
    cy.intercept('GET', 'https://norma.nomoreparties.space/api/ingredients ', {
      fixture: 'ingredients.json'
    });
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