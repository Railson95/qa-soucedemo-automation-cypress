import { elements as el } from "./elements";
class Header {
  checkIfCartHasItems() {
    cy.get(el.cartBadge).should("be.visible").and("have.text", "1");
  }

  checkIfCartHasNoItems() {
    cy.get(el.cartBadge).should("not.exist");
  }

  navigateToCart() {
    cy.get(el.cartLink).click();
  }
}

export default new Header();
