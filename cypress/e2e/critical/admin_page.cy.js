
describe('Admin Page Test', () => {
    it('Interacts with form elements', () => {
        
        cy.visit('https://parabank.parasoft.com/parabank/admin.htm');

        
        cy.get('button[value="INIT"]').click();
        cy.get('button[value="CLEAN"]').click();

        cy.get('#rightPanel > table > tbody > tr > td:nth-child(2) > form > table > tbody > tr > td:nth-child(3) > input').click();


        cy.get('input#accessMode1[value="soap"]').check();
        cy.get('input#accessMode2[value="restxml"]').check();
        cy.get('input#accessMode3[value="restjson"]').check();
        cy.get('input#accessMode4[value="jdbc"]').check();

        
        cy.get('input#soapEndpoint').type('Soap Endpoint');
        cy.get('input#restEndpoint').type('Rest Endpoint');

       
        cy.get('input#endpoint').type('Endpoint');

        
        
        cy.get('input#initialBalance').type(999); 
        cy.get('input#minimumBalance').type(999); 

        
        
        cy.get('select#loanProvider').select('Web Service');
        cy.get('select#loanProvider').should('have.value', 'ws');
        cy.get('select#loanProvider').select('JMS');
        cy.get('select#loanProvider').should('have.value', 'jms');
        cy.get('select#loanProvider').select('Local');
        cy.get('select#loanProvider').should('have.value', 'local');

        
        cy.get('select#loanProcessor').select('Available Funds');
        cy.get('select#loanProcessor').should('have.value', 'funds');
        cy.get('select#loanProcessor').select('Down Payment');
        cy.get('select#loanProcessor').should('have.value', 'down');
        cy.get('select#loanProcessor').select('Combined');
        cy.get('select#loanProcessor').should('have.value', 'combined');
        
        cy.get('input#loanProcessorThreshold').type('0');


        
        cy.get('input[type="submit"].button[value="Submit"]').click();

    });
});
