describe('Activities page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=denver&days=3', {
      fixture: 'weather.json'
    })
    cy.visit('localhost:3000');
  })
  
  it('Should be able to navigate to activities page and choose an activity', () => {
    cy.get('#activities-button').click();
    cy.url().should('include', '/activities');
    cy.get('.set-button').last().click();
    cy.get('.daily-forecast-flex > :nth-child(1)').contains('9:00 AM');
  })
})
