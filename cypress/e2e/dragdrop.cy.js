describe("drag drop", () => {
    const dataTransfer = new DataTransfer();
    it("Drag and drop", () => {
        cy.visit("/drag_and_drop");
        cy.log("Mouse drag and drop with data transfer");
        cy.get("#column-a").invoke("text").should("eq", "A");
        cy.get("#column-b").invoke("text").should("eq", "B");

        cy.contains("A").trigger("dragstart", { dataTransfer });
        cy.contains("B").trigger("drop", { dataTransfer });

        cy.get("#column-a").invoke("text").should("eq", "B");
        cy.get("#column-b").invoke("text").should("eq", "A");
    });
});
