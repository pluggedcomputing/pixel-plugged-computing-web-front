describe('Tela inicial', () => {
  it('deve exibir os elementos principais', () => {
    cy.visit('/');

    // Título principal
    cy.contains('COLORINDO COM NÚMEROS').should('be.visible');

    // Subtítulo
    cy.contains('Representação de Imagens').should('be.visible');

    // Botão iniciar
    cy.contains('INICIAR').should('be.visible');
  });
});
