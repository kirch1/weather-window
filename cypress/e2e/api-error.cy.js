describe('network error handling', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=80227&days=3', {
      responseCode:404,
      body: {}
    })
    cy.visit('localhost:3000');
  });

  it('Should see and error message for a 404 error', () => {
    cy.get('.error-message').contains('Sorry, we have encountered a problem! Error: 404');
  });
})
