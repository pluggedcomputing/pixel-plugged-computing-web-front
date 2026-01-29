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

    cy.window().should((win) => {
      const userIDStorage = win.sessionStorage.getItem('userID');
      expect(userIDStorage).to.equal(nameUser);
    });

    cy.clearLocalStorage();
    cy.clearAllSessionStorage();
  });
});
