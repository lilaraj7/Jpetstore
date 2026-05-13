import { selector } from "../../support/selector";
describe("Multiple Remove Test", () => {
  beforeEach(() => {
    cy.session("Login session", () => {
      cy.visit("https://petstore.octoperf.com/actions/Catalog.action");
      cy.login("ram123", "123");
    });
    cy.visit("https://petstore.octoperf.com/actions/Catalog.action");
  });
  it("To add AngelFish to cart", () => {
    cy.xpath(selector.Fish).click();
    (cy.wait(1000), cy.xpath(selector.AngelFish).click());
    cy.wait(1000);
    cy.xpath(selector.SmallAngelfish).click();
    cy.wait(1000);
    cy.xpath(selector.Addtocart2).click();
    (cy.wait(1000), cy.xpath(selector.Returntofish).click());
    (cy.wait(1000), cy.xpath(selector.Fish).click());
    (cy.wait(1000), cy.xpath(selector.largeAngelfish).click());
    (cy.wait(1000), cy.xpath(selector.AddtoCart).click());
    cy.wait(2000);
  });
  it("To verify empty cart", () => {
    cy.xpath(selector.cart).click();
    cy.wait(1000);
    cy.xpath(selector.emptycart).should("have.text", "Your cart is empty.");
  });
  // it('to add tiger shark to cart', () => {
  //     cy.xpath(selector.Fish).click();
  //     cy.xpath(selector.Tigershark).click();
  //     cy.xpath(selector.AddtoCart).click();
  // });
  //    it('To add Koi fish to cart',() => {
  //         cy.xpath(selector.Fish).click();
  //         cy.xpath(selector.Koi).click();
  //         cy.xpath(selector.SpotlessKoi).click();
  //         cy.xpath(selector.Addtocart2).click();
  //         cy.xpath(selector.Returntofish).click();
  //         cy.xpath(selector.Fish).click();
  //         cy.xpath(selector.SpottedKoi).click();
  //         cy.xpath(selector.AddtoCart).click();

  //    })
  //    it('To add goldfish to cart',() => {
  //         cy.xpath(selector.Fish).click();
  //         cy.xpath(selector.Goldfish).click();
  //         cy.xpath(selector.AdultMaleGoldfish).click();
  //          cy.xpath(selector.Addtocart2).click();
  //         cy.xpath(selector.Returntofish).click();
  //         cy.xpath(selector.Fish).click();
  //         cy.xpath(selector.Goldfish).click();
  //         cy.xpath(selector.AdultFemaleGoldfish).click();
  //         cy.xpath(selector.Addtocart2).click();
  //    })
  // it('To add Finch to cart', () => {
  //     cy.xpath(selector.Birds).click();
  //     cy.xpath(selector.Finch).click();
  //     cy.xpath(selector.AdultMaleFinch).click();
  //     cy.xpath(selector.Addtocart2).click();
  //     cy.xpath(selector.ReturntoBirds).click();
  // })
//   it("to procced to Cart", () => {
//     cy.xpath(selector.CART).click();
//     cy.xpath(selector.Quantitybox).clear().type("0");
//     cy.xpath(selector.Quantitybox2).clear().type("0");
//     cy.xpath(selector.updateCart2).click();

    // cy.xpath(selector.Remove).click();
    // cy.xpath(selector.Remove).click();
    // cy.xpath(selector.Remove).click();

    //cy.xpath(selector.updateCart).click()
//   });
});
