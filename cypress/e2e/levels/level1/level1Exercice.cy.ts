describe('Fase 1 - Exercícios', () => {
  //respostas corretas

  const correctResponseQuestion1 = '1,0,1,0,1';
  const correctResponseQuestion2 =
    'Com representação que economize a quantidade de dados enviada';
  const correctResponseQuestion3 = 'Imprimem pixels';

  beforeEach(() => {
    cy.visit('/level-1');

    for (let i = 0; i < 5; i++) {
      cy.getByData('btn-next').click();
    }
  });

  it('Validar Exercicios', () => {
    // Exercicio 1
    cy.getByData('card-title').should('contain', 'Fase 1');
    cy.getByData('card-text').should(
      'contain',
      'A sequência de pixels acima pode ser representada',
    );

    cy.contains('app-button-answer button', correctResponseQuestion1)
      .should('be.visible')
      .click();

    cy.contains('app-button-answer button', correctResponseQuestion1).should(
      'have.class',
      'correct',
    );

    //Validar Persistência no LocalStorage
    cy.window().then((win) => {
      const storage = JSON.parse(
        win.localStorage.getItem('responsesUser') || '[]',
      );
      expect(storage).to.include('correct');
    });

    cy.wait(1000);

    for (let i = 0; i < 3; i++) {
      cy.getByData('btn-next').click();
    }

    // Exercicio 2
    cy.getByData('card-text').should(
      'contain',
      'Como você acha que eram codificadas',
    );

    cy.contains('app-button-answer button', correctResponseQuestion2)
      .should('be.visible')
      .click();

    cy.contains('app-button-answer button', correctResponseQuestion2).should(
      'have.class',
      'correct',
    );

    cy.wait(1000);

    cy.getByData('btn-next').click();

    // Exercicio 3

    cy.getByData('card-text').should(
      'contain',
      'Considerando o que foi apresentado',
    );

    cy.contains('app-button-answer button', correctResponseQuestion3)
      .should('be.visible')
      .click();

    cy.contains('app-button-answer button', correctResponseQuestion3).should(
      'have.class',
      'correct',
    );

    cy.wait(1000);

    //congratulations

    cy.get('h3').should('contain', 'PARABÉNS!');

    // Ir para fase 2

    cy.contains('app-footer-selection-level div', 'Continuar')
      .should('be.visible')
      .click();

    cy.getByData('card-title').should('contain', 'Fase 2');
  });
});
