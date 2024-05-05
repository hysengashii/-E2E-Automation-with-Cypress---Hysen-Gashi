describe('Services Page Test', () => {
    it('Gets the number of table rows', () => {
        
        cy.visit('https://parabank.parasoft.com/parabank/services.htm');

        
        cy.get('table tr').its('length').then((rowCount) => {
            cy.log(`The page has ${rowCount} rows`);
        });
    });
});
