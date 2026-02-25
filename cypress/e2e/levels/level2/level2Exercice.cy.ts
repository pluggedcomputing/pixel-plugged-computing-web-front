describe('Fase 2 - Exercícios', () => {
  //respostas corretas

  const correctResponseQuestion1 = 'P';
  const correctResponseQuestion2 = 'G';
  const correctResponseQuestion3 = '0,1,1,1,0';

  beforeEach(() => {
    cy.visit('/level-2');

    for (let i = 0; i < 2; i++) {
      cy.getByData('btn-next').click();
    }
  });

  it('Validar Exercicios', () => {
    // Exercicio 1
    cy.getByData('card-title').should('contain', 'Fase 2');
    cy.getByData('card-text').should('contain', 'Agora vamos praticar?');

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
      'escolha a letra que será exibida.',
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
      'faltando neste desenho da letra W',
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

    // Ir para fase 3

    cy.contains('app-footer-selection-level div', 'Continuar')
      .should('be.visible')
      .click();

    cy.getByData('card-title').should('contain', 'Fase 3');
  });
});
