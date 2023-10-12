describe("DOM Suites", () => {
    it("DOM Commands", () => {

        cy.visit("https://naveenautomationlabs.com/opencart");
        //cy.get('.image').first().click();
        // cy.get('.image').last().click();
        // cy.get('.image').eq(2).click();
        // cy.contains('MacBook'.trim()).click();
        cy.get('.image').find('> a > img[title="iPhone"]').click();

    })
})