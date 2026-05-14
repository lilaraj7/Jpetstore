import { selector } from "../../support/selector";
describe("Login Test", () => {
  beforeEach(() => {
    cy.session("Login session", () => {
      cy.visit("https://petstore.octoperf.com/actions/Catalog.action");
      cy.login("ram123", "123");
    });
    cy.visit("https://petstore.octoperf.com/actions/Catalog.action");
  });
  it("To add Fish to cart", () => {
    cy.xpath(selector.Fish).click();
    cy.xpath(selector.AngelFish).click();
    cy.xpath(selector.AddtoCart).click();
    cy.xpath(selector.cart).click();
    cy.xpath(selector.Quantitybox).clear().type("5");
    cy.xpath(selector.Remove).click();
    cy.xpath(selector.updateCart).click();
    cy.xpath(selector.Returntomenu).click();
  });
  it("to Remove and Reload", () => {
    cy.xpath(selector.Fish).click();
    cy.xpath(selector.Koi).click();
    cy.xpath(selector.AddtoCart).click();
    cy.xpath(selector.Remove).click();
    cy.reload();
  });
});
