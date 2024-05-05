describe('About Us Page Test', () => {

  
  it('Loads and displays text', () => {
      
      
      cy.visit('https://parabank.parasoft.com/parabank/about.htm');
      
      
      cy.url().should('include', '/about.htm');
      
      cy.contains('About Us').should('be.visible');

      
      cy.get('.title').should('have.text', 'ParaSoft Demo Website');

      
      cy.contains('ParaBank is a demo site used for demonstration of Parasoft software solutions.').should('exist');
      cy.contains('All materials herein are used solely for simulating a realistic online banking website.').should('exist');
      cy.contains('ParaBank is not a real bank!').should('exist');
      cy.contains('For more information about Parasoft solutions please visit us at:').should('exist');
      
      
      cy.contains('www.parasoft.com').should('exist');
      
     
      cy.contains('888-305-0041').should('exist');
  });
});
