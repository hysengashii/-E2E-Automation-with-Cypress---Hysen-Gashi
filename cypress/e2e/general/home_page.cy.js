describe('Home Page Test (Not Logged In)', () => {
    it('Loads and displays elements correctly', () => {
      
      cy.visit('https://parabank.parasoft.com/parabank/index.htm');
  
      
      cy.url().should('eq', 'https://parabank.parasoft.com/parabank/index.htm');
  
      
      cy.get('li.home a').should('be.visible').and('contain', 'home'); 
      cy.contains('ATM Service').should('be.visible', { timeout: 10000 }); 
      cy.contains('Forgot login info?').should('be.visible'); 
     
    });
  });
  