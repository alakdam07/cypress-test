// /  <reference type="Cypress">

it(`visit localhost`, () => {
  cy.visit(`/`);
  cy.get(`.App-link`).should(`be.visiable`).and(`have.text`, `Learn React`);
});
