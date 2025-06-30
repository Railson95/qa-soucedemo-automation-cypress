import { elements as el } from "./elements";

class Login {
  insertCredentials(username, password) {
    cy.get(el.username).type(username);
    cy.get(el.password).type(password);

    cy.get(el.loginButton).click();
  }

  checkInvalidLogin() {
    cy.get(el.errorMessage).should(
      "contain.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  }

  acessPage() {
    cy.visit("https://www.saucedemo.com/");
  }
}

export default new Login();
