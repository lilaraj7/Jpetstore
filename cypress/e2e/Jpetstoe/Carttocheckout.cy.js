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
    it('To add Fish to cart', () => {
        cy.xpath(selector.Fish).click();
        cy.xpath(selector.AngelFish).click();
        cy.xpath(selector.AddtoCart).click();
        cy.xpath(selector.Returntofish).click();
         cy.xpath(selector.Fish).click();
        cy.xpath(selector.Koi).click();
        cy.xpath(selector.AddtoCart).click();
        cy.xpath(selector.ProceedtoCheckout).click();
        cy.xpath(selector.continuetoCheckout).click();
        cy.xpath(selector.ConfirmtoCheckout).click();
        //cy.xpath(selector.Returntomenu).click();
    })
     it('To add multipleFish to cart and remove unwanted and proceed to checkout', () => {
        cy.xpath(selector.Fish).click();
        cy.xpath(selector.AngelFish).click();
        cy.xpath(selector.AddtoCart).click();
        cy.xpath(selector.Returntofish).click();
         cy.xpath(selector.Fish).click();
        cy.xpath(selector.Koi).click();
        cy.xpath(selector.AddtoCart).click();
        cy.xpath(selector.Remove).click();
        cy.xpath(selector.updateCart).click();
        
        cy.xpath(selector.ProceedtoCheckout).click();
        cy.xpath(selector.continuetoCheckout).click();
        cy.xpath(selector.ConfirmtoCheckout).click();
        //cy.xpath(selector.Returntomenu).click();
    })
});