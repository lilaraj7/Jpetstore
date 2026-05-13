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
