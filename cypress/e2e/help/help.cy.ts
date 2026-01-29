describe('Help', () => {
  it('Elementos principais', () => {
    cy.visit('/help');

    cy.getByData('help-title').should('be.visible');
    cy.getByData('help-paragraph1').should('be.visible');
    cy.getByData('help-paragraph2').should('be.visible');
    cy.getByData('help-paragraph3').should('be.visible');
    cy.getByData('help-paragraph4').should('be.visible');
  });
});
