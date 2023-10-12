describe("Basic Assertions",()=>{
    it("Green Kart",()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca',{force:true});
        cy.wait(2000)
        cy.get('.products .product div.product-image:visible').should('have.length',4);
    })
})