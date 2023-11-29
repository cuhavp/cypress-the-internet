describe("download file", () => {
    beforeEach(() => {
        cy.task("deleteDownloadFiles");
    });
    it("download txt file", () => {
        cy.visit("/download");
        // cy.get('[href="download/LambdaTest.txt"]').click();
        // cy.readFile("cypress/downloads/LambdaTest.txt");
    });
});
