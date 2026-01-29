describe('Levels', () => {
  it('Elementos principais', () => {
    cy.visit('/level-selection');

    cy.getByData('levelSelection-title').should('be.visible');
  });
});