import {faker} from '@faker-js/faker';
import { registrationPage } from './registrationPage';
import { billPay } from './billPay';

export const login = {
  login: () => {
    

    const username = faker.internet.userName(); 
    const password = faker.internet.password();

    
    cy.get('input[name="customer.username"]').type(username);
    cy.get('input[name="customer.password"]').type(password);
    cy.get('input[name="repeatedPassword"]').type(password);
    cy.get('input[value="Register"]').click();
    cy.contains(`Welcome ${username}`).should('be.visible');
    cy.contains('Your account was created successfully').should('exist');

    cy.get('a[href="/parabank/logout.htm"]').click();
    cy.contains('Register').click();

    
    registrationPage.visitRegistrationPage();
    //Check if exist username
    cy.get('#customer\\.username').type(username);
    cy.get('#customer\\.password').type(password);
    cy.get('#repeatedPassword').type(password);
    cy.get('input[type="submit"][value="Register"]').click();
    cy.contains('This username already exists.').should('be.visible');



    // registrationPage.visitRegistrationPage();
    //Passwords did not match.
    cy.get('#customer\\.password').type(password);
    cy.get('#repeatedPassword').type(132465);
    cy.get('input[type="submit"][value="Register"]').click();
    cy.contains('Passwords did not match.').should('be.visible');


    // Log in with the newly registered user
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('input[type="submit"][value="Log In"]').click();

    // Wait for the "Welcome" message to be visible
    cy.contains('Welcome').should('be.visible');

  }
};
