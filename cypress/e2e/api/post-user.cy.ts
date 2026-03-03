it('Deve salvar user', () => {
  cy.request({
    method: 'POST',
    url: 'https://activities.a4s.dev.br/api/user',
    body: {
      userID: 'QA'
    },
    failOnStatusCode: false,
  }).then((response) => {
    cy.log('response:', JSON.stringify(response.body));
    expect(response.status).to.eq(200);
  });
});
