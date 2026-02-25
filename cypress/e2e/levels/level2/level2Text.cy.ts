describe('Fase 2 - Navegação', () => {
  beforeEach(() => {
    cy.visit('/level-2');
  });

  it('Exibir primeira tela e navegar para outras', () => {

    // Tela 1
    cy.getByData("card-title").should('contain', 'Fase 2');
    cy.getByData("card-text").should(
      'contain',
      'Você aprendeu que para armazenar',
    );

    cy.getByData("card-main-img")
      .should('have.attr', 'src')
      .and('include', 'img-1.png');

    cy.getByData("btn-next").click();

    // Tela 2
    cy.getByData("card-text").should(
      'contain',
      'Por exemplo, se quisermos exibir uma imagem correspondente',
    );
    cy.getByData("card-main-img")
      .should('have.attr', 'src')
      .and('include', 'img-2.png');

    cy.getByData("btn-next").click();
  });
});