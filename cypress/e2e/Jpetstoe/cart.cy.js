import {selector } from "../../support/selector";

describe('Cart Test', () => {
    // beforeEach(() => {
    //     cy.visit('https://petstore.octoperf.com/actions/Catalog.action');
    //     cy.login("ram123", "123");
    // })
    // cy.login("ram123", "123");
    // cy.session(() => {
    // cy.visit('https://petstore.octoperf.com/actions/Catalog.action');
    //  cy.visit(login)
     
      
    // })
//     Cypress.Commands.add('login', (username, password) => {
//   cy.session(
//     ["ram123", "123"], // unique cache key
//     () => {
//       cy.visit('/login')
//       cy.xpath(selector.Username)
//       cy.xpath(selector.password)
//       cy.xpath(selector.logbtm).click()
//       //cy.url().should('include', '/dashboard')
//     },
//     {
//       validate() {
//         // Re-runs setup if this fails
//         cy.getCookie('auth_token').should('exist')
//       },
//       cacheAcrossSpecs: true // share session across all spec files
//     }
//   )
// })
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
    })
     it('To add Dogs to cart', () => {
        cy.xpath(selector.Dogs).click();
        cy.xpath(selector.Bulldog).click();
        cy.xpath(selector.AddtoCart).click();
    })
     it('To add Cat to cart', () => {
        cy.xpath(selector.Cat).click();
        cy.xpath(selector.Manxcat).click();
        cy.xpath(selector.AddtoCart).click();
    })
     it('To add Reptiles to cart', () => {
        cy.xpath(selector.Reptiles).click();
        cy.xpath(selector.Rattlesnake).click();
        cy.xpath(selector.AddtoCart).click();
    })
    it('To add Birds to cart', () => {
        cy.xpath(selector.Birds).click();
        cy.xpath(selector.AmazonParrot).click();
        cy.xpath(selector.AddtoCart).click();
    })
    it('To view cart and rmove from cart', () => {
        cy.xpath(selector.cart).click();
         cy.xpath(selector.Remove).click();
         cy.xpath(selector.Remove).click();
    })
//     it('To view cart and remove all items from cart', () => {
//   cy.xpath(selector.cart).click();

//   // Recursive function to remove all items one by one
//   function removeAllItems() {
//     cy.xpath(selector.Remove).then($buttons => {
//       if ($buttons.length > 0) {
//         cy.xpath(selector.Remove).first().click(); // remove first item
//         removeAllItems(); // check again for remaining items
//       }
//     });
//   }

//   removeAllItems();
// });
    
})