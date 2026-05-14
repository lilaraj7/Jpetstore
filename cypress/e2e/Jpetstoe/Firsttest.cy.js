import { selector } from "../../support/selector";

describe("My First Test", () => {
  const username = "ram_" + Date.now().toString().slice(-4);
  const password = "123_" + Date.now().toString().slice(-4);

  it("My first Test case", () => {
    cy.visit("https://petstore.octoperf.com/actions/Catalog.action");
    cy.get("#SearchContent > form > input[type=submit]:nth-child(2)").should(
      "have.value",
      "Search",
    );
    cy.log("The automation has successfuly done ");
  });
  it("Registeration for valid user", () => {
    cy.visit("https://petstore.octoperf.com/actions/Account.action");
    cy.xpath(selector.signin).click();
    cy.xpath(selector.username).type(username);
    cy.xpath(selector.password).clear().type(password);
    cy.xpath(selector.repeatpassword).type(password);
    cy.xpath(selector.firstname).type("lila");
    cy.xpath(selector.lastname).type("chaudhary");
    cy.xpath(selector.email).type("li54@gmail.com");
    cy.xpath(selector.phone).type("9864525768");
    cy.xpath(selector.address1).type("kirtipur-2");
    cy.xpath(selector.address2).type("tarkeshore-2");
    cy.xpath(selector.city).type("Kathamndu");
    cy.xpath(selector.state).type("Nepal");
    cy.xpath(selector.ZIP).type("44600");
    cy.xpath(selector.country).type("Nepal");
    cy.get(selector.language).select("japanese");
    cy.get(selector.category).select("DOGS");
    cy.get(selector.listoption).check();
    cy.get(selector.banneroption).check();
    cy.get(selector.savebutton).click();
    cy.wait(1000);
    cy.log("The automation Registration has successfuly done ");
  });
  it("LOgin", () => {
    cy.visit(
      "https://petstore.octoperf.com/actions/Account.action;jsessionid=C0D955E9CC8709AC3EC69C47BBC4B35E?signonForm=",
    );
    // cy.xpath(selector.signin2).click(); //login
    cy.xpath("/html/body/div[2]/div/form/input").should("have.value", "Login");
    cy.xpath(selector.username2).type(username);
    cy.xpath(selector.password2).clear().type(password);
    cy.wait(1000);
    cy.xpath("/html/body/div[2]/div/form/input").click();
    cy.log("successfuly LOgedin ");
  });
  it("Registeration for empty username", () => {
    cy.visit("https://petstore.octoperf.com/actions/Account.action");
    cy.xpath(selector.signin).click();
    cy.xpath(selector.username);
    cy.xpath(selector.password).clear().type(password);
    cy.xpath(selector.repeatpassword).type(password);
    cy.xpath(selector.firstname).type("lila");
    cy.xpath(selector.lastname).type("chaudhary");
    cy.xpath(selector.email).type("li54@gmail.com");
    cy.xpath(selector.phone).type("9864525768");
    cy.xpath(selector.address1).type("kirtipur-2");
    cy.xpath(selector.address2).type("tarkeshore-2");
    cy.xpath(selector.city).type("Kathamndu");
    cy.xpath(selector.state).type("Nepal");
    cy.xpath(selector.ZIP).type("44600");
    cy.xpath(selector.country).type("Nepal");
    cy.get(selector.language).select("japanese");
    cy.get(selector.category).select("DOGS");
    cy.get(selector.listoption).check();
    cy.get(selector.banneroption).check();
    cy.get(selector.savebutton).click();
    cy.wait(1000);
    cy.log("The automation Registration has successfuly done ");
  });

<<<<<<< HEAD
  })
  

})
=======
  it("Registeration for mismatch password", () => {
    cy.visit("https://petstore.octoperf.com/actions/Account.action");
    cy.xpath(selector.signin).click();
    cy.xpath(selector.username);
    cy.xpath(selector.password).clear().type(password12335);
    cy.xpath(selector.repeatpassword).type(password);
    cy.xpath(selector.firstname).type("lila");
    cy.xpath(selector.lastname).type("chaudhary");
    cy.xpath(selector.email).type("li54@gmail.com");
    cy.xpath(selector.phone).type("9864525768");
    cy.xpath(selector.address1).type("kirtipur-2");
    cy.xpath(selector.address2).type("tarkeshore-2");
    cy.xpath(selector.city).type("Kathamndu");
    cy.xpath(selector.state).type("Nepal");
    cy.xpath(selector.ZIP).type("44600");
    cy.xpath(selector.country).type("Nepal");
    cy.get(selector.language).select("japanese");
    cy.get(selector.category).select("DOGS");
    cy.get(selector.listoption).check();
    cy.get(selector.banneroption).check();
    cy.get(selector.savebutton).click();
    cy.wait(1000);
    cy.log("The automation Registration has successfuly done ");
  });
});
>>>>>>> 173874c9a71712fa1c607c260e850be3c78366ba
