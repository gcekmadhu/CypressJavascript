describe('Parent Child Chaining',()=>{
    it("Test to find prodcut",()=>{
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=common/home')
        cy.get('.product-layout').find('> div').eq(0).contains('Add to Cart').click();
    });
        
})