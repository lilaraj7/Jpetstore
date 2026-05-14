<<<<<<< HEAD
import { seletor } from "../../support/selector";
describe('Cart Tests', () => {
   
          beforeEach(() => {
          cy.visit('https://petstore.octoperf.com/actions/Catalog.action');
          cy.login('kl','1223');
         })
//      beforeEach(() => {
//      cy.visit(seletor.Signin);
//    })
//         it('Valid Login', () => {
//  //cy.xpath("/html/body/div[1]/div[2]/div/a[2]").click(); //login
// //cy.xpath("/html/body/div[2]/div/form/input").should('have.value','Login');
// cy.xpath(seletor.username).type('kl');
// cy.xpath(seletor.pass).clear().type('1223');
// cy.xpath(seletor.loginbtn).click();
//   })
it('verify user can add to cart from  fish category',()=>{
    cy.xpath(seletor.Fish).click();
    cy.xpath(seletor.Angelfish).click();
    cy.xpath(seletor.ItemIdfish1).click();
    cy.xpath(seletor.ProceedtoCheckout).click();
    cy.xpath(seletor.continue).click();
    cy.xpath(seletor.confirm).click();
    cy.xpath(seletor.Returntomainmenu).click();


})
it.only('verify user can add to cart from  dog category',()=>{
    cy.xpath(seletor.Dog).click();
    cy.xpath(seletor.Bulldog).click();
   // cy.xpath(seletor.Malebulldog).click();
    cy.xpath(seletor.addtocart).click();
    for (let i = 0; i < 5; i++) {
    cy.reload()
  }
})
it('verify user can add to cart from  cat category',()=>{
        cy.xpath(seletor.Cats).click();
        cy.xpath(seletor.Manxcat).click();
        cy.xpath(seletor.addtocart).click();
    })
    it('verify user can add to cart from  reptile category',()=>{
        cy.xpath(seletor.Reptiles).click();
        cy.xpath(seletor.Rattlesnake).click();
         cy.xpath(seletor.addtocart).click();
         cy.xpath(seletor.ProceedtoCheckout).click();
    cy.xpath(seletor.continue).click();
    cy.xpath(seletor.confirm).click();
    cy.xpath(seletor.Returntomainmenu).click();
        
    })
    it('verify user can add to cart from  bird category',()=>{
        cy.xpath(seletor.Birds).click();
        cy.xpath(seletor.Ammazonparrot).click();
        cy.xpath(seletor.addtocart).click();
    })
        })
=======
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
>>>>>>> 173874c9a71712fa1c607c260e850be3c78366ba
