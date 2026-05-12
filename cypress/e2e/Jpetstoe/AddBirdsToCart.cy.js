import { selector } from "../../support/selector";
// const baseUrl = Cypress.env("Url");
 //const url = cypress.env("Url");
describe("Birds in Cart Test", () => {
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
  });
  it("To add Parrot to cart", () => {
    cy.xpath(selector.Birds).click();
    cy.xpath(selector.AmazonParrot).click();
    cy.xpath(selector.AdultMaleAmazonParrot).click();
    cy.xpath(selector.Addtocart2).click();
    cy.xpath(selector.ReturntoBirds).click();
  });
  it("To add Finch to cart", () => {
    cy.xpath(selector.Birds).click();
    cy.xpath(selector.Finch).click();
    cy.xpath(selector.AdultMaleFinch).click();
    cy.xpath(selector.Addtocart2).click();
    cy.xpath(selector.ReturntoBirds).click();
  });
  it("to procced to checkout", () => {
    cy.xpath(selector.CART).click();
    cy.xpath(selector.Remove).click();
    cy.xpath(selector.ProceedtoCheckout).click();
    cy.xpath(selector.continuetoCheckout).click();
    cy.xpath(selector.ConfirmtoCheckout).click();
  });
});
