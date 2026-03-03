it('Deve enviar resposta do user', () => {
  const data: Date = new Date();

  cy.request({
    method: 'POST',
    url: 'https://activities.a4s.dev.br/api/response',
    body: {
      userID: 'QA',
      idApp: 'PIXEL-WEB 2.0',
      phase: '1',
      activity: '1',
      userResponse: '1,0,1,0,1',
      expectedResponse: '1,0,1,0,1',
      isCorrect: true,
      dateResponse: data,
      typeOfQuestion: 'MULTIPLA ESCOLHA',
    },
  }).then((response) => {
    cy.log('response: ', JSON.stringify(response.body));
    expect(response.status).to.eq(200);
  });
});
