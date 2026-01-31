describe('About', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('Elementos principais', () => {
    cy.getByData('about-title').should('be.visible');
    cy.getByData('about-paragraph1').should('be.visible');
    cy.getByData('about-paragraph2').should('be.visible');
    cy.getByData('about-paragraph3').should('be.visible');
  });

  it('Redirecionar para site', () => {
    cy.getByData('about-img-cp').click();
    cy.url().should(
      'eq',
      'https://sites.google.com/view/computacaoplugada/avalia%C3%A7%C3%B5es-apps',
    );
  });
});
