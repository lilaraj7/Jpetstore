import { selector } from "../../support/selector";


describe('Login Test', () => {
    beforeEach(() => {
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
    
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
