describe('Fase 5 - Exercícios', () => {
  //respostas corretas

  const correctResponseQuestion1 = 'Um código para receber um pagamento por pix';
  const correctResponseQuestion2 = 'Ganhamos um prêmio em dinheiro';
  const correctResponseQuestion3 = 'Que o código consegue ser lido mesmo que esteja um pouco riscado ou sujo';
  const correctResponseQuestion4 = 'É o endereço único de um site ou página na internet, como https://www.google.com';

  beforeEach(() => {
    cy.visit('/level-5');

    for (let i = 0; i < 4; i++) {
      cy.getByData('btn-next').click();
    }
  });

  it('Validar Exercicios', () => {
    // Exercicio 1
    cy.getByData('card-title').should('contain', 'Fase 5');
    cy.getByData('card-text').should('contain', 'Agora que você sabe o que são QR Codes');

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

    for (let i = 0; i < 4; i++) {
      cy.getByData('btn-next').click();
    }

    // Exercicio 2
    cy.getByData('card-text').should(
      'contain',
      'Discutimos sobre o perigo de Acessar links',
    );

    cy.contains('app-button-answer button', correctResponseQuestion2)
      .should('be.visible')
      .click();

    cy.contains('app-button-answer button', correctResponseQuestion2).should(
      'have.class',
      'correct',
    );

    cy.wait(1000);

    for (let i = 0; i < 3; i++) {
      cy.getByData('btn-next').click();
    }

    // Exercicio 3

    cy.getByData('card-text').should(
      'contain',
      'Uma das características inteligentes de um QR Code',
    );

    cy.contains('app-button-answer button', correctResponseQuestion3)
      .should('be.visible')
      .click();

    cy.contains('app-button-answer button', correctResponseQuestion3).should(
      'have.class',
      'correct',
    );

    cy.wait(1000);

    // Exercicio 4

    cy.getByData('card-text').should(
      'contain',
      'Falamos sobre verificar a URL do link',
    );

    cy.contains('app-button-answer button', correctResponseQuestion4)
      .should('be.visible')
      .click();

    cy.contains('app-button-answer button', correctResponseQuestion4).should(
      'have.class',
      'correct',
    );

    cy.wait(1000);


    //congratulations

    cy.get('h3').should('contain', 'PARABÉNS!');

    // Ir para o Inicio

    cy.contains('app-footer-selection-level div', 'Home')
      .should('be.visible')
      .click();

    cy.get('h1').should('contain', 'Seleção de Fase');
  });
});
