// https://docs.cypress.io/api/introduction/api.html

describe("Task List", () => {
  it("adds a task", () => {
    cy.visit("/");
    cy.get("#name")
      .type("do a thing");
    cy.get("#addTask")
      .click();
    cy.get(":nth-child(5) > li > .btn")
      .contains("do a thing");
  });

  it("toggles a task", () => {
    cy.visit("/");
    cy.get(":nth-child(5) > li > .btn")
      .click();
    cy.get(":nth-child(5) > li > .btn > div > s");
  });
});
