describe("CheapOAir Web",()=>{
    it("Select direct Flights checkBox",()=>{
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register")
        cy.get("[name='agree']").check().should('be.checked');
        cy.get("[name='agree']").uncheck().should('not.be.checked');
    })
})