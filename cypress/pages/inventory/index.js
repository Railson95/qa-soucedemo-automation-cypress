import { elements as el } from "./elements";
import { BASE_URL } from "../../support/constants";
class Inventory {
  checkPageAccess() {
    cy.url().should("eq", `${BASE_URL}inventory.html`);
  }

  addProduct(productName) {
    cy.get(el.addToCart(productName)).click();
  }

  removeProduct(productName) {
    cy.get(el.removeToCart(productName)).click();
  }

  formatProductName(name) {
    return name.toLowerCase().replace(/\s+/g, "-");
  }
}

export default new Inventory();
