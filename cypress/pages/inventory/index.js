import { elements as el } from "./elements";
class Inventory {
  checkPageAccess() {
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
  }

  addProduct() {
    cy.get(el.addToCart).click();
  }

  removeProduct() {
    cy.get(el.removeToCart).click();
  }
}

export default new Inventory();
