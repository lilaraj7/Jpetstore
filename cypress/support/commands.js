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

import {selector} from "./selector";
Cypress.Commands.add('login', (username, password) => {
    cy.xpath(selector.signin2).click();
    cy.xpath(selector.username2).type(username);
    cy.xpath(selector.password2).clear().type(password);

    cy.xpath("/html/body/div[2]/div/form/input").click();
   
});
// Cypress.Commands.add('login', () => {

//     const USERNAME = Cypress.env('username')
//     const PASSWORD = Cypress.env('password')

//     cy.xpath(selector.signin2).click()

//     cy.xpath(selector.username2)
//       .type(USERNAME)

//     cy.xpath(selector.password2)
//       .clear()
//       .type(PASSWORD)

//     cy.xpath("/html/body/div[2]/div/form/input")
//       .click()

// })