import {selector } from "../../support/selector";

describe('Cart Test', () => {       

    beforeEach(() => {
    cy.session("Login session", () => {
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action');
        cy.login("ram123", "123");
})
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action');
})
    it('To add Bulldog to cart', () => {
        cy.xpath(selector.Dogs).click();
        cy.xpath(selector.Bulldog).click();
        cy.xpath(selector.maleBulldog).click();
        cy.xpath(selector.Addtocart2).click();
        cy.xpath(selector.Returntodogs).click();
         cy.xpath(selector.Dogs).click();
        cy.xpath(selector.Bulldog).click();
        cy.xpath(selector.FemalePuppyBulldog).click();
        cy.xpath(selector.Addtocart2).click();
    });
    it('To add Poodle to cart', () => {
        cy.xpath(selector.Dogs).click();
        cy.xpath(selector.Poodle).click();
        // cy.xpath(selector.MalePuppyPoodle).click();
        cy.xpath(selector.AddtoCart).click();
    })
    it('To add Dalmation to cart', () => {
        cy.xpath(selector.Dogs).click();
        cy.xpath(selector.Dalmation).click();
        cy.xpath(selector.SpotlessMalePuppyDalmation).click();
        cy.xpath(selector.Addtocart2).click();
        cy.xpath(selector.Returntodogs).click();
        cy.xpath(selector.Dogs).click();
        cy.xpath(selector.Dalmation).click();
        cy.xpath(selector.SpottedAdultFemaleDalmation).click();
        cy.xpath(selector.Addtocart2).click();
    })
    it('To add Golden Retriever to cart', () => {
        cy.xpath(selector.Dogs).click();
        cy.xpath(selector.GoldenRetriever).click();
        cy.xpath(selector.AddtoCart).click();
    })
    it('To add Labrador Retriever to cart', () => {
        cy.xpath(selector.Dogs).click();
        cy.xpath(selector.LabradorRetriever).click();
        cy.xpath(selector.AdultMaleLabradorRetriever).click();
        cy.xpath(selector.Addtocart2).click();
        cy.xpath(selector.Returntodogs).click();
        cy.xpath(selector.Dogs).click();
        cy.xpath(selector.LabradorRetriever).click();
        cy.xpath(selector.AdultFemaleLabradorRetriever).click();
        cy.xpath(selector.Addtocart2).click();
         cy.xpath(selector.Returntodogs).click();
        cy.xpath(selector.Dogs).click();
        cy.xpath(selector.LabradorRetriever).click();
        cy.xpath(selector.AdultMaleLabradorRetriever2).click();  
        cy.xpath(selector.Addtocart2).click();
        cy.xpath(selector.Returntodogs).click();
        cy.xpath(selector.Dogs).click();
        cy.xpath(selector.LabradorRetriever).click();
         cy.xpath(selector.AdultFemaleLabradorRetriever2).click();
        cy.xpath(selector.Addtocart2).click();
    });
    it('TO add Chihuahua to Cart',()=>{
        cy.xpath(selector.Dogs).click();
        cy.xpath(selector.Chihuahua).click();
        cy.xpath(selector.AdultMaleChihuahua).click();
        cy.xpath(selector.Addtocart2).click();
        cy.xpath(selector.Returntodogs).click();
        cy.xpath(selector.Dogs).click();
        cy.xpath(selector.Chihuahua).click();
        cy.xpath(selector.AdultFemaleChihuahua).click();
        cy.xpath(selector.Addtocart2).click();
    });
  it('to procced to checkout', () => {
        cy.xpath(selector.CART).click();
       cy.xpath(selector.ProceedtoCheckout).click();
       cy.xpath(selector.continuetoCheckout).click();
       cy.xpath(selector.ConfirmtoCheckout).click();
   })
});