import Cypress from 'cypress';

const BASE_URL = 'https://norma.nomoreparties.space/api';
const ID_BUN = `[data-cy=${'643d69a5c3f7b9001cfa093c'}]`;
const ID_FILLING = `[data-cy=${'643d69a5c3f7b9001cfa0941'}]`;

describe('Оформление заказа', () => {
  const ID_BUN = `[data-cy='643d69a5c3f7b9001cfa093c']`;
  const ID_FILLING = `[data-cy='643d69a5c3f7b9001cfa0941']`;
  const BASE_URL = 'https://norma.nomoreparties.space/api ';

  beforeEach(() => {
    cy.intercept('GET', `${BASE_URL}/ingredients`, { fixture: 'ingredients.json' });
    cy.intercept('POST', `${BASE_URL}/auth/login`, { fixture: 'user.json' });
    cy.intercept('GET', `${BASE_URL}/auth/user`, { fixture: 'user.json' });
    cy.intercept('POST', `${BASE_URL}/orders`, { fixture: 'orderResponse.json' });

    cy.visit('/');
    cy.viewport(1440, 800);
    cy.get('#modals').as('modal');

    window.localStorage.setItem('refreshToken', 'ipsum');
    cy.setCookie('accessToken', 'lorem');

    cy.getAllLocalStorage().should('be.not.empty');
    cy.getCookie('accessToken').should('exist');
  });

  afterEach(() => {
    window.localStorage.clear();
    cy.clearAllCookies();

    cy.getAllLocalStorage().should('be.empty');
    cy.getAllCookies().should('be.empty');
  });

  it('Отправка заказа c проверкой корректности ответа', () => {
    cy.get(ID_BUN).children('button').click();
    cy.get(ID_FILLING).children('button').click();
    cy.get(`[data-cy='order-button']`).click();

  });
});