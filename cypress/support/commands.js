// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import {seletor} from "./selector";

Cypress.Commands.add('login', (username, password) => {
  cy.visit(seletor.Signin); //login
  
  cy.xpath(seletor.username).type(username);
  cy.xpath(seletor.pass).clear().type(password);
  cy.xpath(seletor.loginbtn).click();
  cy.contains('Welcome').should('be.visible');
})