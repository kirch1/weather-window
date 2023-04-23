describe('Should be able to view the header and current weather when visit', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=67401&days=1', {
      fixture: 'weather.json'
    })
    cy.visit('localhost:3000');
  })
  
  it('Should see current location name, temp, and wind speed', () => {
    cy.get('.current-weather-location').contains('Test, KS');
    cy.get('.current-weather-data')
      .contains('Test Condition')
      .contains('99')
      .contains('15mph')
  })
})
