
describe('Parent Child Chaining',()=>{
    it("Test to find prodcut",()=>{
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=common/home')
        // cy.get('.product-layout').find('> div').each($el=>{
        //     cy.log($el)
        //     let productName=$el.find(' >div:nth-child(2) > h4 >a').text();
        //     cy.log(productName)
        //     if(productName==='MacBook'){
        //         cy.wrap($el).contains('Add to Cart').click();
        //     }
        
        // })

        cy.get('.product-layout').each($el=>{
            cy.log($el)
            let productName=$el.find('>div >div:nth-child(2) > h4 >a').text();
            cy.log(productName)
            if(productName==='MacBook'){
                cy.wrap($el).contains('Add to Cart').click();
            }
        
        })

        cy.get('#logo').then(ele=>{
            cy.wrap(ele).should('be.visible')
        })
    
    });
        
})