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
    it('To add AngelFish to cart', () => {
        cy.xpath(selector.Fish).click();
        cy.xpath(selector.AngelFish).click();
        cy.xpath(selector.SmallAngelfish).click();
        cy.xpath(selector.Addtocart2).click();
        cy.xpath(selector.Returntofish).click();
         cy.xpath(selector.Fish).click();
        cy.xpath(selector.largeAngelfish).click();
        cy.xpath(selector.AddtoCart).click();
    });
    it('to add tiger shark to cart', () => {
        cy.xpath(selector.Fish).click();
        cy.xpath(selector.Tigershark).click();
        cy.xpath(selector.AddtoCart).click();
    });
   it('To add Koi fish to cart',() => {
        cy.xpath(selector.Fish).click();
        cy.xpath(selector.Koi).click();
        cy.xpath(selector.SpotlessKoi).click();
        cy.xpath(selector.Addtocart2).click();
        cy.xpath(selector.Returntofish).click();
        cy.xpath(selector.Fish).click();
        cy.xpath(selector.SpottedKoi).click();
        cy.xpath(selector.AddtoCart).click();

   })
   it('To add goldfish to cart',() => {
        cy.xpath(selector.Fish).click();
        cy.xpath(selector.Goldfish).click();
        cy.xpath(selector.AdultMaleGoldfish).click();
         cy.xpath(selector.Addtocart2).click();
        cy.xpath(selector.Returntofish).click();
        cy.xpath(selector.Fish).click();
        cy.xpath(selector.Goldfish).click();
        cy.xpath(selector.AdultFemaleGoldfish).click();
        cy.xpath(selector.Addtocart2).click();
   })
   it('to procced to checkout', () => {
        cy.xpath(selector.CART).click();
       cy.xpath(selector.ProceedtoCheckout).click();
       cy.xpath(selector.continuetoCheckout).click();
       cy.xpath(selector.ConfirmtoCheckout).click();
   })
})