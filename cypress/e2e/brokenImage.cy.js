describe("broken image", () => {
    it("avatar 1 is broken", () => {
        cy.visit("https://the-internet.herokuapp.com/broken_images");
        cy.get(".example img")
            .first()
            .then((image) => {
                expect(image[0].naturalWidth).to.be.eql(0);
            });
    });
});
