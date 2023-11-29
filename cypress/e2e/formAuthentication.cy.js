// loginScenario.spec.js

describe("Login Scenario", () => {
    it("should log in with valid credentials", () => {
        // Visit the login page
        cy.visit("https://the-internet.herokuapp.com/login");

        // Load valid credentials from fixtures
        cy.fixture("credentials.json").then((credentials) => {
            // Enter valid username and password
            cy.get("#username").type(credentials.validCredentials.username);
            cy.get("#password").type(credentials.validCredentials.password);

            // Click on the login button
            cy.get('button[type="submit"]').click();

            // Optionally, add assertions for successful login
            cy.url().should("include", "/secure");
            cy.get(".flash.success")
                .should("be.visible")
                .contains("You logged into a secure area!");
        });
    });

    it("should handle login with invalid username", () => {
        // Visit the login page
        cy.visit("https://the-internet.herokuapp.com/login");

        // Load invalid username from fixtures
        cy.fixture("credentials.json").then((credentials) => {
            // Enter invalid username and valid password
            cy.get("#username").type(credentials.invalidUsername.username);
            cy.get("#password").type(credentials.invalidUsername.password);

            // Click on the login button
            cy.get('button[type="submit"]').click();

            // Add assertions for error message
            cy.get(".flash.error")
                .should("be.visible")
                .contains("Your username is invalid!");
        });
    });

    it("should handle login with invalid password", () => {
        // Visit the login page
        cy.visit("https://the-internet.herokuapp.com/login");

        // Load invalid password from fixtures
        cy.fixture("credentials.json").then((credentials) => {
            // Enter valid username and invalid password
            cy.get("#username").type(credentials.invalidPassword.username);
            cy.get("#password").type(credentials.invalidPassword.password);

            // Click on the login button
            cy.get('button[type="submit"]').click();

            // Add assertions for error message
            cy.get(".flash.error")
                .should("be.visible")
                .contains("Your password is invalid!");
        });
    });
});
