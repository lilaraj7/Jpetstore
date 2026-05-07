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