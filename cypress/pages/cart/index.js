import { elements as el } from "./elements";

class Cart {
  validateProductInCart() {
    cy.contains(el.inventoryItemName, "Sauce Labs Backpack").should(
      "be.visible"
    );
  }
}

export default new Cart();
