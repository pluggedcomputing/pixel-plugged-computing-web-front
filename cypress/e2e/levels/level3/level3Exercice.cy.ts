describe('Fase 3 - Exercícios', () => {
  //respostas corretas

  const correctResponseQuestion1 = 'L';
  const correctResponseQuestion2 = 'D';
  const correctResponseQuestion3 = 'R';
  const correctResponseQuestion4 = '0,3,2';
  const correctResponseQuestion5 = 'K';

  beforeEach(() => {
    cy.visit('/level-3');

    for (let i = 0; i < 5; i++) {
      cy.getByData('btn-next').click();
    }
  });

  it('Validar Exercicios', () => {
    // Exercicio 1
    cy.getByData('card-title').should('contain', 'Fase 3');
    cy.getByData('card-text').should('contain', 'a nova codificação aprendida?');

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

    // Exercicio 2
    cy.getByData('card-text').should(
      'contain',
      'Ajuste os pixels da imagem acima',
    );

    cy.contains('app-button-answer button', correctResponseQuestion2)
      .should('be.visible')
      .click();

    cy.contains('app-button-answer button', correctResponseQuestion2).should(
      'have.class',
      'correct',
    );

    cy.wait(1000);

    // Exercicio 3

    cy.getByData('card-text').should(
      'contain',
      'Qual a letra representada?',
    );

    cy.contains('app-button-answer button', correctResponseQuestion3)
      .should('be.visible')
      .click();

    cy.contains('app-button-answer button', correctResponseQuestion3).should(
      'have.class',
      'correct',
    );

    // Exercicio 4

    cy.getByData('card-text').should(
      'contain',
      'a última linha da imagem acima?',
    );

    cy.contains('app-button-answer button', correctResponseQuestion4)
      .should('be.visible')
      .click();

    cy.contains('app-button-answer button', correctResponseQuestion4).should(
      'have.class',
      'correct',
    );

    cy.wait(1000);

    // Exercicio 5

    cy.getByData('card-text').should(
      'contain',
      'codificação aprendida',
    );

    cy.contains('app-button-answer button', correctResponseQuestion5)
      .should('be.visible')
      .click();

    cy.contains('app-button-answer button', correctResponseQuestion5).should(
      'have.class',
      'correct',
    );

    cy.wait(1000);


    //congratulations

    cy.get('h3').should('contain', 'PARABÉNS!');

    // Ir para fase 4

    cy.contains('app-footer-selection-level div', 'Continuar')
      .should('be.visible')
      .click();

    cy.getByData('card-title').should('contain', 'Fase 4');
  });
});
