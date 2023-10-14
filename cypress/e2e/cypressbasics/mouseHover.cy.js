describe("Mouse Hover",()=>{
    it("Mouse TC1",()=>{
        cy.visit('https://www.amazon.com/ref=nav_bb_logo');
        cy.wait(2000)
       cy.get('.icp-nav-link-inner').trigger('mouseover')
       
       //OR forcebally click on hidden element
        cy.contains('Deutsch').click({force:true})
    })
})