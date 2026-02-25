describe('Fase 1 - Navegação', () => {
  beforeEach(() => {
    cy.visit('/level-1');
  });

  it('Exibir primeira tela e navegar para outras', () => {

    // Tela 1
    cy.getByData("card-title").should('contain', 'Fase 1');
    cy.getByData("card-text").should(
      'contain',
      'Você sabia que os computadores armazenam desenhos',
    );

    cy.getByData("card-main-img")
      .should('have.attr', 'src')
      .and('include', 'img-1.png');

    cy.getByData("btn-next").click();

    // Tela 2
    cy.getByData("card-text").should(
      'contain',
      'As telas dos computadores são divididas',
    );
    cy.getByData("card-main-img")
      .should('have.attr', 'src')
      .and('include', 'img-2.png');

    cy.getByData("btn-next").click();

    // Tela 3
    cy.getByData("card-text").should(
      'contain',
      'Em uma imagem em preto e branco',
    );

    cy.getByData("card-main-img")
      .should('have.attr', 'src')
      .and('include', 'img-3.png');
  });

  it('Ir para tela 2, Voltar e Sair para selecao de fase', () => {
    
    cy.getByData("btn-next").click();
    cy.get('p').should('contain', 'As telas dos computadores são divididas');

    cy.getByData("btn-prev").click();

    cy.get('p').should(
      'contain',
      'Você sabia que os computadores armazenam desenhos',
    );
    cy.getByData("btn-exit").click();
    cy.get('h1').should('contain', 'Seleção de Fase');
  });
});
