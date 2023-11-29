describe("dynamic loading", () => {
    it("wait loading progress complete", () => {
        cy.visit("https://the-internet.herokuapp.com/dynamic_loading/1");
        cy.get("button")
            .contains("Start")
            .click()
            .get("#loading")
            .contains("Loading", { timeout: 20000 })
            .should("not.be.visible")
            .get("#finish")
            .contains("Hello World!")
            .should("be.visible");
    });
});
