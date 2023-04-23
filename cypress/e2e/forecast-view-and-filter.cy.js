describe('Should be able to view and filter the upcoming forecast', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=67401&days=1', {
      fixture: 'weather.json'
    })
    cy.visit('localhost:3000');
  });
  
  it('Should see forecast for whole day by default', () => {
    cy.get('.date-text').contains('2023-04-23');
    cy.get('.daily-forecast-flex > :nth-child(1)').contains('12:00 AM');
    cy.get('.hour-forecast-mini').first().contains('0%');
    cy.get('.daily-forecast-flex > :nth-child(24)').contains('11:00 PM');
    cy.get('.hour-forecast-mini').last().contains('10 mph');
  });

  it('Should be able to filter forecast by temp', () => {
    cy.get('.conditions-selector-flex > :nth-child(1) > :nth-child(2) > :nth-child(1)').clear().type(90);
    cy.get('.daily-forecast-flex > :nth-child(1)').contains('11:00 AM');
  });

  it('Should be able to filter forecast by wind', () => {
    cy.get('.conditions-selector-flex > :nth-child(2) > :nth-child(2) > :nth-child(1)').clear().type(50);
    cy.get('.daily-forecast-flex > :nth-child(1)').contains('11:00 AM');
  });

  it('Should be able to filter forecast by chance of rain', () => {
    cy.get('.conditions-selector-flex > :nth-child(3) > :nth-child(2) > :nth-child(1)').clear().type(99);
    cy.get('.daily-forecast-flex > :nth-child(1)').contains('11:00 AM');
  });

  it('Should be able to filter forecast by chance of snow', () => {
    cy.get('.conditions-selector-flex > :nth-child(4) > :nth-child(2) > :nth-child(1)').clear().type(99);
    cy.get('.daily-forecast-flex > :nth-child(1)').contains('11:00 AM');
  });

  it('Should be able to filter forecast by humidity', () => {
    cy.get('.conditions-selector-flex > :nth-child(5) > :nth-child(2) > :nth-child(1)').clear().type(99);
    cy.get('.daily-forecast-flex > :nth-child(1)').contains('11:00 AM');
  });

  it('Should tell user if there are no matches that meet their desired conditions', () => {
    cy.get('.conditions-selector-flex > :nth-child(1) > :nth-child(2) > :nth-child(1)').clear().type(-32);
    cy.get('.conditions-selector-flex > :nth-child(1) > :nth-child(2) > :nth-child(2)').clear().type(-33);
    cy.get('.forecast-days-parent > div').contains('No Weather Windows Available')
  });
})
