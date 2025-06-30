class Inventory {
  checkPageAccess() {
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
  }
}

export default new Inventory();
