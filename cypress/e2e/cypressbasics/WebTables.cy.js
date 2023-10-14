describe('WebTable Handling', () => {
    it('WebTable TC1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#product tr td:nth-child(2)').each(el => {
            if (el.text().includes('Selenium Webdriver')) {
                cy.log(el.text())
                cy.wrap(el).next().then(eleNext => {
                    let price = eleNext.text();
                    cy.log(price)
                    expect(price).to.be.eq(30)
                });

            }
        })
    })
})