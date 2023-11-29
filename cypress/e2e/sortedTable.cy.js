chai.use(require("chai-sorted"));

describe("validate max due person is Jason Doe", () => {
    beforeEach("open page", () => {
        cy.visit("https://the-internet.herokuapp.com/tables");
    });
    it('should identify "Doe Jacson" as the person with the largest due', () => {
        let person = [];

        cy.get("#table1 tbody tr").each((tr) => {
            cy.get(tr)
                .find("td")
                .then(($td) => {
                    person.push({
                        firstName: $td[1].innerText,
                        lastName: $td[0].innerText,
                        due: parseFloat(
                            $td[3].innerText.replace("$", "").trim()
                        ),
                    });
                });
        });
        cy.wrap(person).as("personList");
        cy.get("@personList").then((personArray) => {
            const maxDueValue = Math.max(...personArray.map((p) => p.due), 0);
            const maxDuePerson = personArray.find((p) => p.due == maxDueValue);
            const lname = maxDuePerson.lastName;
            const fname = maxDuePerson.firstName;
            expect(`${fname} ${lname}`).equal("Jason Doe");
        });
    });

    it("should be not sorted by due", async () => {
        cy.get("#table1 tbody td:nth-child(4)")
            .then(($cell) => Cypress._.map($cell, "innerText"))
            .then((strings) => Cypress._.map(strings, getDue))
            .should("not.be.sorted");
    });
});
