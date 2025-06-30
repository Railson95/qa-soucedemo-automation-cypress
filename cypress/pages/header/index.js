import { elements as el } from "./elements";
class Header {
  checkIfCartHasItems(itemQtd) {
    cy.get(el.cartBadge).should("be.visible").and("have.text", itemQtd);
  }

  checkIfCartHasNoItems() {
    cy.get(el.cartBadge).should("not.exist");
  }

  navigateToCart() {
    cy.get(el.cartLink).click();
  }
}

export default new Header();
