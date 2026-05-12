import {selector } from "../../support/selector";

describe('Cart Test', () => {  
       beforeEach(() => {
    cy.session("Login session", () => {
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action');
        cy.login("ram123", "123");
})
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action');
})
it('To search for dog', () => {
    cy.xpath(selector.SearchBox).click().clear().type("dog");
    cy.xpath(selector.SearchButton).click();
    cy.xpath(selector.SearchResultDog).should('be.visible').click();
    cy.xpath(selector.maleBulldog).should('be.visible').click();
    cy.xpath(selector.Addtocart2).click();
    cy.xpath(selector.SearchBox).click().clear().type("dog");
    cy.xpath(selector.SearchButton).click();
    cy.xpath(selector.SearchResultDog).should('be.visible').click();
    cy.xpath(selector.FemalePuppyBulldog).should('be.visible').click();
    cy.xpath(selector.Addtocart2).click();
    cy.xpath(selector.CART).click();
    // cy.xpath(selector.Remove).click();
    cy.xpath(selector.ProceedtoCheckout).click();
    cy.xpath(selector.continuetoCheckout).click();
    cy.xpath(selector.ConfirmtoCheckout).click();
})
it('To search for cat', () => {
    cy.xpath(selector.SearchBox).click().clear().type("cat");
    cy.xpath(selector.SearchButton).click();
})
it('To search for fish', () => {
    cy.xpath(selector.SearchBox).click().clear().type("fish");
    cy.xpath(selector.SearchButton).click();
    cy.xpath(selector.SearchResultFish1).should('be.visible').click();
    cy.xpath(selector.AdultMaleGoldfish).should('be.visible').click();
    cy.xpath(selector.Addtocart2).click();
    cy.xpath(selector.Returntomenu).click();
    
})
it('To search for reptile', () => {
    cy.xpath(selector.SearchBox).click().clear().type("reptile");
    cy.xpath(selector.SearchButton).click();
})
it('To search for bird', () => {
    cy.xpath(selector.SearchBox).click().clear().type("bird");
    cy.xpath(selector.SearchButton).click();        
})

 })
