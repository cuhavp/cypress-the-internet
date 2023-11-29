describe("dropdown", () => {
    it("should able to select option 1", () => {
        cy.visit("https://the-internet.herokuapp.com/dropdown");
        cy.get("select").select("Option 1").invoke("val").should("eq", "1");
        cy.get("select option:selected")
            .invoke("text")
            .should("eq", "Option 1");
    });
});
