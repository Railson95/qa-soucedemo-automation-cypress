import { elements as el } from "./elements";
import { BASE_URL } from "../../support/constants";
class Inventory {
  checkPageAccess() {
    cy.url().should("eq", `${BASE_URL}inventory.html`);
  }

  addProduct() {
    cy.get(el.addToCart).click();
  }

  removeProduct() {
    cy.get(el.removeToCart).click();
  }
}

export default new Inventory();
