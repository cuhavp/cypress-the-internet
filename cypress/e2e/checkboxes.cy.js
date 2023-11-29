describe("checkboxes", () => {
    it("select checkbox 1", () => {
        cy.visit("https://the-internet.herokuapp.com/checkboxes");
        // cy.get("input").first().check();
        //handle checkbox state before check or uncheck
        cy.get("input")
            .first()
            .as("checkbox")
            .invoke("is", ":checked")
            .then((initial) => {
                cy.log(`Initial checkbox: **${initial}**`);
                if (initial) {
                    cy.get("@checkbox").uncheck();
                } else {
                    cy.get("@checkbox").check();
                }
            });
        cy.get("input").first().should("be.checked");
    });
});
