import Login from "../pages/login";
import Inventory from "../pages/inventory";

describe("Login", () => {
  let loginData;

  beforeEach(() => {
    Login.acessPage();
    cy.fixture("loginData").then((data) => {
      loginData = data;
    });
  });

  it("Login with valid user and password", () => {
    Login.insertCredentials(loginData.usernameValid, loginData.passwordValid);

    Inventory.checkPageAccess();
  });

  it("Login with invalid user and password", () => {
    Login.insertCredentials(
      loginData.usernameInvalid,
      loginData.passwordInvalid
    );

    Login.checkInvalidLogin();
  });
});
