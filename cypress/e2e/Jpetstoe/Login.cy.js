<<<<<<< HEAD
import { seletor } from "../../support/selector";


describe('Login Tests', () => {
    before(() => {
          cy.visit(seletor.BaseURL);
         })
     beforeEach(() => {
     cy.visit(seletor.Signin);
   })
  //  beforeEach(() => {
  //   // Runs before each test — most common pattern
  //   cy.clearAllCookies();
  //   cy.clearAllLocalStorage();
  //   cy.clearAllSessionStorage();
  // });
  
  it('Valid Login', () => {
 //cy.xpath("/html/body/div[1]/div[2]/div/a[2]").click(); //login
//cy.xpath("/html/body/div[2]/div/form/input").should('have.value','Login');
cy.xpath(seletor.username).type('kl');
cy.xpath(seletor.pass).clear().type('1223');
cy.xpath(seletor.loginbtn).click();
  })
   it('Empty username', () => {
  cy.xpath(seletor.username);
  cy.xpath(seletor.pass).clear().type('1223');
  cy.xpath(seletor.loginbtn).click();
    
   })
   it('empty password', () => {
  cy.xpath(seletor.username).type('kl');
  cy.xpath(seletor.pass).clear();
  cy.xpath(seletor.loginbtn).click();
    
   })
    it('wrong password', () => {
  cy.xpath(seletor.username).type('kl');
  cy.xpath(seletor.pass).clear().type('wrongpassword');
  cy.xpath(seletor.loginbtn).click();
    
   })
})
=======
import { selector } from "../../support/selector";


describe('Login Test', () => {
      const baseurl = Cypress.env('Url')  
    beforeEach(() => {
       cy.visit(baseurl);
        cy.xpath(selector.Enterthestore).click()
    
    })
    beforeEach(() => {
        cy.xpath(selector.signin2).click();
    })
    it('Login with valid credentials', () => {
        cy.xpath(selector.username2).type("ram123");
        cy.xpath(selector.password2).clear().type("123");
        cy.wait(1000);
        cy.xpath("/html/body/div[2]/div/form/input").click();
        cy.log("successfuly LOgedin "); 
    })
    it('To verify login functionality with empty username', () => {
        cy.xpath(selector.username2);
        cy.xpath(selector.password2).clear().type("123");
        cy.wait(1000);
        cy.xpath("/html/body/div[2]/div/form/input").click();
        cy.log("successfuly LOgedin "); 
    })
    it('To verify login functionality with empty password', () => {
        cy.xpath(selector.username2).type("ram123");
        cy.xpath(selector.password2).clear();
        cy.wait(1000);
        cy.xpath("/html/body/div[2]/div/form/input").click();
        cy.log("successfuly LOgedin "); 
    })
    it('To verify login functionality with empty password', () => {
        cy.xpath(selector.username2);
        cy.xpath(selector.password2).clear();
        cy.wait(1000);
        cy.xpath("/html/body/div[2]/div/form/input").click();
        cy.log("successfuly LOgedin "); 
    })

})
>>>>>>> 173874c9a71712fa1c607c260e850be3c78366ba
