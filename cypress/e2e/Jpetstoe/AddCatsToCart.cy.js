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
    it('To add Manx cat to cart', () => {
        cy.xpath(selector.Cat).click();
        cy.xpath(selector.Manxcat).click(); 
        cy.xpath(selector.TaillessManx).click();
        cy.xpath(selector.Addtocart2).click();
        cy.xpath(selector.ReturntoCat).click();
        cy.xpath(selector.Cat).click();
        cy.xpath(selector.Manxcat).click(); 
        cy.xpath(selector.WithtailManx).click();
        cy.xpath(selector.Addtocart2).click();
    })  
    it('To add Persian cat to cart', () => {
        cy.xpath(selector.Cat).click();
        cy.xpath(selector.persianCat).click(); 
        cy.xpath(selector.AdultMalePersianCat).click();
        cy.xpath(selector.Addtocart2).click();
        cy.xpath(selector.ReturntoCat).click();
        cy.xpath(selector.Cat).click();
        cy.xpath(selector.persianCat).click(); 
        cy.xpath(selector.AdultFemalePersianCat).click();
        cy.xpath(selector.Addtocart2).click();
    })
      it('to procced to checkout', () => {
        cy.xpath(selector.CART).click();
       cy.xpath(selector.ProceedtoCheckout).click();
       cy.xpath(selector.continuetoCheckout).click();
       cy.xpath(selector.ConfirmtoCheckout).click();
   })
})