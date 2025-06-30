import Login from "../pages/login";
import Inventory from "../pages/inventory";
import Header from "../pages/header";
import Cart from "../pages/cart";

describe("Cart", () => {
  let loginData;

  beforeEach(() => {
    Login.acessPage();
    cy.fixture("loginData").then((data) => {
      loginData = data;
    });
  });

  it("Add product to cart with success", () => {
    Login.insertCredentials(loginData.usernameValid, loginData.passwordValid);

    const itemQtd = "1";

    var productName = "Sauce Labs Backpack";

    var productName = Inventory.formatProductName(productName);

    Inventory.addProduct(productName);

    Header.checkIfCartHasItems(itemQtd);

    Header.navigateToCart();

    Cart.validateProductInCart();
  });

  it("Remove product to cart with success", () => {
    Login.insertCredentials(loginData.usernameValid, loginData.passwordValid);

    var productName = "Sauce Labs Backpack";

    var productName = Inventory.formatProductName(productName);

    Inventory.addProduct(productName);

    Inventory.removeProduct(productName);

    Header.checkIfCartHasNoItems();
  });
});
