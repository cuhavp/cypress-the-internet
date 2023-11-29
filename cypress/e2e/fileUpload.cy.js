describe("file upload", () => {
    it("drag drop upload file", () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#drag-drop-upload")
            .selectFile("image.png", {
                action: "drag-drop",
            })
            .contains("image.png")
            .should("be.visible");
    });

    it("browse upload file", () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload")
            .selectFile("image.png")
            .get("#file-submit")
            .click()
            .get("#uploaded-files")
            .contains("image.png")
            .should("be.visible");
    });
});
