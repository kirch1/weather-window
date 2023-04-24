describe('Should be able to view the header and current weather when visit', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=80227&days=3', {
      fixture: 'weather.json'
    })
    
  });

  it('Should see current location name, temp, and wind speed', () => {
    cy.visit('localhost:3000');
    cy.get('.current-weather-location').contains('Test, KS');
    cy.get('.current-weather-data')
      .contains('Test Condition')
      .contains('99')
      .contains('15 mph')
  });

  it('Should see and error message for visiting an invalid url', () => {
    cy.visit('localhost:3000/invalid');
    cy.get('.error-message').contains('Sorry, we have encountered a problem!');
  });
})
