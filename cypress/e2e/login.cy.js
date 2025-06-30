import Login from "../pages/login";
import Inventory from "../pages/inventory";

describe("Login", () => {
  beforeEach(() => {
    Login.acessPage();
  });

  it("Login with valid user and password", () => {
    Login.insertCredentials("standard_user", "secret_sauce");

    Inventory.checkPageAccess();
  });

  it("Login with invalid user and password", () => {
    Login.insertCredentials("teste123", "teste123");

    Login.checkInvalidLogin();
  });
});
