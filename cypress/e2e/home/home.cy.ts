describe('Home', () => {
  beforeEach(() => {
    cy.visit('/home');
  });

  it('Elementos principais', () => {
    cy.getByData('home-title').should('be.visible');
    cy.getByData('home-subtitle').should('be.visible');
    cy.getByData('home-btn').should('be.visible');
  });

  it('Iniciar', () => {
    cy.getByData('home-btn').click();
    // Tela de identificacao
    cy.getByData('identification-title');
  });
});
