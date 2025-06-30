import Login from "../pages/login";
import Inventory from "../pages/inventory";
import Header from "../pages/header";
import Cart from "../pages/cart";

describe("Cart", () => {
  beforeEach(() => {
    Login.acessPage();
    Login.insertCredentials("standard_user", "secret_sauce");
  });

  it("Add product to cart with success", () => {
    const itemQtd = "1";

    Inventory.addProduct();

    Header.checkIfCartHasItems(itemQtd);

    Header.navigateToCart();

    Cart.validateProductInCart();
  });

  it("Remove product to cart with success", () => {
    Inventory.addProduct();

    Inventory.removeProduct();

    Header.checkIfCartHasNoItems();
  });
});
