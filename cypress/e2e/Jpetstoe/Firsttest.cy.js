describe('My First Test', () => {

  it('My first Test case', () => {

    cy.visit('https://petstore.octoperf.com/actions/Catalog.action');
    cy.get("#SearchContent > form > input[type=submit]:nth-child(2)").should("have.value","Search");
    cy.log("The automation has successfuly done ");

  })
  it('Registeration', () => {

    cy.visit('https://petstore.octoperf.com/actions/Account.action');
    cy.xpath("/html/body/div[2]/div/a").click();
    cy.xpath("/html/body/div[2]/div/form/table[1]/tbody/tr[1]/td[2]/input").type("ram123");
    cy.xpath("/html/body/div[2]/div/form/table[1]/tbody/tr[2]/td[2]/input").clear().type('123');
    cy.xpath('/html/body/div[2]/div/form/table[1]/tbody/tr[3]/td[2]/input').type('123');
    cy.xpath("/html/body/div[2]/div/form/table[2]/tbody/tr[1]/td[2]/input").type("lila");
    cy.xpath("/html/body/div[2]/div/form/table[2]/tbody/tr[2]/td[2]/input").type("chaudhary");
    cy.xpath("/html/body/div[2]/div/form/table[2]/tbody/tr[3]/td[2]/input").type("li54@gmail.com");
    cy.xpath("/html/body/div[2]/div/form/table[2]/tbody/tr[4]/td[2]/input").type("9864525768");
    cy.xpath("/html/body/div[2]/div/form/table[2]/tbody/tr[5]/td[2]/input").type("kirtipur-2");
    cy.xpath("/html/body/div[2]/div/form/table[2]/tbody/tr[6]/td[2]/input").type("tarkeshore-2");
    cy.xpath("/html/body/div[2]/div/form/table[2]/tbody/tr[7]/td[2]/input").type("Kathamndu");
    cy.xpath("/html/body/div[2]/div/form/table[2]/tbody/tr[8]/td[2]/input").type("Nepal");
    cy.xpath("/html/body/div[2]/div/form/table[2]/tbody/tr[9]/td[2]/input").type("44600");
    cy.xpath("/html/body/div[2]/div/form/table[2]/tbody/tr[10]/td[2]/input").type("Nepal");
    cy.get('[name="account.languagePreference"]').select('japanese');  
    cy.get('[name="account.favouriteCategoryId"]').select('DOGS');    
    cy.get('input[name="account.listOption"][value="true"]').check()
    cy.get('input[name="account.bannerOption"][value="true"]').check()
    cy.get('input[value="Save Account Information"]').click()
    cy.wait(5000);
    cy.log("The automation Registration has successfuly done ");


  })
  it('LOgin', () => {

    cy.visit('https://petstore.octoperf.com/actions/Account.action;jsessionid=C0D955E9CC8709AC3EC69C47BBC4B35E?signonForm=');
    cy.xpath("/html/body/div[1]/div[2]/div/a[2]").click(); //login
    cy.xpath("/html/body/div[2]/div/form/input").should('have.value','Login');
    cy.xpath("/html/body/div[2]/div/form/p[2]/input[1]").type("ram123");
    cy.xpath("/html/body/div[2]/div/form/p[2]/input[2]").clear().type("123");
    cy.wait(5000);
    cy.xpath("/html/body/div[2]/div/form/input").click();
    cy.log("successfuly LOgedin ");

  })
  

})
