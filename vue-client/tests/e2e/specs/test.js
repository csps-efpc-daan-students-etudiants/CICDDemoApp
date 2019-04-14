// https://docs.cypress.io/api/introduction/api.html


describe("Task List", () => {

  beforeEach(() => {
    cy.visit("/");
    cy.injectAxe();
  });

  it("adds a task", () => {
    cy.get("#name")
      .type("do a thing");
    cy.get("#addTask")
      .click();
    cy.get(":nth-child(5) > li > .btn")
      .contains("do a thing");
    cy.checkA11y({
      runOnly: {
        type: "tag",
        values: ["wcag2a", "wcag2aa"]
      }
    });
  });

  it("toggles a task", () => {
    cy.get(":nth-child(5) > li > .btn")
      .click();
    cy.get(":nth-child(5) > li > .btn > div > s");
    cy.checkA11y({
      runOnly: {
        type: "tag",
        values: ["wcag2a", "wcag2aa"]
      }
    });
  });
});
