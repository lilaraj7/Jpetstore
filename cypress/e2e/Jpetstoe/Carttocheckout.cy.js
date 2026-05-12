import {selector } from "../../support/selector";

describe('Cart Test', () => {

    beforeEach(() => {
    cy.session("Login session", () => {
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action');
        cy.login("ram123", "123");
})
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action');
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