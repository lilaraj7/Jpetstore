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