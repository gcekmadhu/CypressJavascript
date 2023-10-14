describe('WebTable Handling', () => {
    it('WebTable TC1', () => {
        //install npm install -D cypress-iframe and import 'cypress-iframe'; or require('cypress-iframe');
        cy.visit('https://www.lambdatest.com/selenium-playground/iframe-demo/')
        cy.frameLoaded("#myiFrame");
        cy.iframe('#myiFrame').find("div#__docusaurus nav div button.DocSearch")
       
    })
})