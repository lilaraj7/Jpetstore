import {selector } from "../../support/selector";

describe('Cart Test', () => {   
     const baseurl = Cypress.env('Url')  
    beforeEach(() => {
    cy.session("Login session", () => {
        cy.visit(baseurl);
        cy.xpath(selector.Enterthestore).click()
        //cy.login("ram123", "123");
      const userrname = Cypress.env("username");
      const password = Cypress.env("password");
      
      cy.login(userrname, password);

      cy.contains('Sign Out')
      cy.should('be.visible')
})
    cy.visit(baseurl);
    cy.xpath(selector.Enterthestore).click()
})
    it('To add Rattlesnake to cart', () => {
        cy.xpath(selector.Reptiles).click();
        cy.xpath(selector.Rattlesnake).click();
        cy.xpath(selector.TootlessTigershark).click();
        cy.xpath(selector.Addtocart2).click();
        cy.xpath(selector.ReturntoReptiles).click();
        cy.xpath(selector.Reptiles).click();
        cy.xpath(selector.Rattlesnake).click();
        cy.xpath(selector.RattlelessRattlesnake).click();
        cy.xpath(selector.Addtocart2).click();
    }  )
    it('To add Iguana to cart', () => {
        cy.xpath(selector.Reptiles).click();
        cy.xpath(selector.Iguana).click();
        cy.xpath(selector.GreenAdultIguana).click();
        cy.xpath(selector.Addtocart2).click();
        
    })
     it('to procced to checkout', () => {
        cy.xpath(selector.CART).click();
       cy.xpath(selector.ProceedtoCheckout).click();
       cy.xpath(selector.continuetoCheckout).click();
       cy.xpath(selector.ConfirmtoCheckout).click();
   })
    
});