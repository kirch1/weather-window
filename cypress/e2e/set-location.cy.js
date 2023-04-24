describe('Activities page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=80227&days=3', {
      fixture: 'weather.json'
    })
    cy.visit('localhost:3000');
  })
  
  it('Should be able to navigate to activities page and choose an activity', () => {
    cy.get('#locations-button').click();
    cy.url().should('include', '/locations');
    cy.wait(500);
    cy.get(':nth-child(1) > .set-location-button').click();
    cy.wait(1000);
    cy.url().should('include', '/');
  })
})
