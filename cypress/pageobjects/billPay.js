import {faker} from '@faker-js/faker';

export const billPay = {
  billPay: () => {

    cy.get('a[href="/parabank/billpay.htm"]').click();
    
    const accountNumber = faker.finance.accountNumber ();

    cy.get('[ng-model="payee.name"]').type(faker.person.firstName());
    cy.get('[ng-model="payee.address.street"]').type(faker.location.streetAddress());
    cy.get('[ng-model="payee.address.city"]').type(faker.location.city());
    cy.get('[ng-model="payee.address.state"]').type(faker.location.state());
    cy.get('[ng-model="payee.address.zipCode"]').type(faker.location.zipCode());
    cy.get('[ng-model="payee.phoneNumber"]').type(faker.phone.number());
    cy.get('input[name="payee.accountNumber"]').type(accountNumber);
    cy.get('input[name="verifyAccount"]').type(accountNumber);
    cy.get('[ng-model="amount"]').type(faker.string.numeric(1));

    cy.get('input[type="submit"][value="Send Payment"]').click();
  }
};
