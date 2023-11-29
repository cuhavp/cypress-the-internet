describe("hover element", () => {
    it("hover avatar 1", () => {
        cy.visit("https://the-internet.herokuapp.com/hovers");
        cy.get(".figcaption").first().invoke("show"); //https://docs.cypress.io/api/commands/hover#Invoke
        cy.get(".figcaption")
            .first()
            .contains("h5", "name: user1")
            .should("be.visible");
        cy.contains("a", "View profile").should("be.visible");
    });
});
