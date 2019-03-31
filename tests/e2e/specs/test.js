// https://docs.cypress.io/api/introduction/api.html

describe('Login Page', () => {
  it('Has a ', () => {
    cy.visit('/')
    cy.get('#username')
      .type('bar');
    cy.get('#password')
      .type("foo");
    cy.get('#login')
      .click();
  })
})
