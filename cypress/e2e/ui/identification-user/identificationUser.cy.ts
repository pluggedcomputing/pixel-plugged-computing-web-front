describe('IdentificationUser', () => {
  beforeEach(() => {
    cy.visit('/identification-user');
  });

  it('Elementos principais', () => {
    cy.getByData('identification-title').should('be.visible');
    cy.getByData('identification-btn').should('be.visible');
    cy.getByData('identification-anonymous').should('be.visible');
  });

  it('Testar identificacao', () => {
    const nameUser = 'testeCy';

    cy.getByData('identification-input').type(nameUser);
    cy.getByData('identification-btn').click();

    cy.window()
      .its('sessionStorage')
      .invoke('getItem', 'userID')
      .should('equal', JSON.stringify(nameUser));

    cy.clearLocalStorage();
    cy.clearAllSessionStorage();
  });

  it('Ir para selecao de fase', () => {
    cy.getByData('identification-anonymous').click();
    cy.getByData('levelSelection-title');
  });
});
