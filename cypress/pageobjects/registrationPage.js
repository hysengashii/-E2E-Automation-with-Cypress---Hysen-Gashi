import {faker} from '@faker-js/faker';

export const registrationPage = {
  visitRegistrationPage: () => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');


    cy.get('#customer\\.firstName').type(faker.person.firstName());
    cy.get('#customer\\.lastName').type(faker.person.lastName());
    cy.get('#customer\\.address\\.street').type(faker.location.streetAddress());
    cy.get('#customer\\.address\\.city').type(faker.location.city());
    cy.get('#customer\\.address\\.state').type(faker.location.state());
    cy.get('#customer\\.address\\.zipCode').type(faker.location.zipCode());
    cy.get('#customer\\.phoneNumber').type(faker.phone.number());
    cy.get('#customer\\.ssn').type(faker.string.numeric(9));

  }
};
