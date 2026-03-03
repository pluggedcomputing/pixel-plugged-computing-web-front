describe('Fase 1 - Exercícios', () => {

  const responses = {
    r1: '1,0,1,0,1',
    r2: 'Com representação que economize a quantidade de dados enviada',
    r3: 'Imprimem pixels',
  };

  beforeEach(() => {
    cy.visit('/level-1');
    cy.advanceScreens(5);
  });

  it('Validar Exercicios', () => {
    // Exercicio 1
    cy.getByData('card-title').should('contain', 'Fase 1');
    cy.getByData('card-text').should(
      'contain',
      'A sequência de pixels acima pode ser representada',
    );
    cy.answerAndVerify(responses.r1);

    //Validar Persistência no LocalStorage
    cy.window().then((win) => {
      const storage = JSON.parse(
        win.localStorage.getItem('responsesUser') || '[]',
      );
      expect(storage).to.include('correct');
    });

    cy.getByData('card-text').should(
      'contain',
      'Você já viu um aparelho de fac-símile (fax)?',
    );

    cy.advanceScreens(3);

    // Exercicio 2
    cy.getByData('card-text').should(
      'contain',
      'Como você acha que eram codificadas',
    );
    cy.answerAndVerify(responses.r2);

    cy.getByData('card-text').should(
      'contain',
      'Para economizar no armazenamento',
    );

    cy.advanceScreens(1);

    // Exercicio 3
    cy.getByData('card-text').should(
      'contain',
      'Considerando o que foi apresentado',
    );

    cy.answerAndVerify(responses.r3);

    // Parabens
    cy.get('h3').should('contain', 'PARABÉNS!');

    // Ir para fase 2
    cy.nextLevel();

    cy.getByData('card-title').should('contain', 'Fase 2');
  });
});
