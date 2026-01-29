describe('About', () => {
  it('Elementos principais', () => {
    cy.visit('/about');

    cy.getByData('about-title').should('be.visible');
    cy.getByData('about-paragraph1').should('be.visible');
    cy.getByData('about-paragraph2').should('be.visible');
    cy.getByData('about-paragraph3').should('be.visible');
  });
});
