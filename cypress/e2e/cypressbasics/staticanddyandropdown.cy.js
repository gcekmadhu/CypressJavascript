describe("Dropdowns",()=>{
    it("Static dropdown",()=>{
        cy.visit("https://the-internet.herokuapp.com/dropdown")
        cy.get('#dropdown').select(2).should('contain','Option 2')
    })

    it.skip("Dynamic dropdown",()=>{
        cy.visit('');
        cy.get('.product-layout').find('> div').each($el => {
            cy.log($el)
            let productName = $el.find(' >div:nth-child(2) > h4 >a').text();
            cy.log(productName)
            if (productName === 'MacBook') {
                cy.wrap($el).contains('Add to Cart').click();
            }

        })
        cy.wait(2000)
        cy.get('#cart').as('cartItems').click();
        cy.get('@cartItems').then(ele => {
            let price = ele.find('>ul>li td:nth-child(4)').text();
            cy.log(price)
        })

        getPrice('MacBook')

        cy.get('@cartItems').contains('View Cart').click();
        cy.get('.buttons').contains('Checkout').click(); 
        
        cy.log("Returning user enter email and password")
        cy.get('#input-email').type('m@r.com',{force:true})
        cy.get('#input-password').type('Abcd1234',{force:true})
        cy.get('#button-login').click();

    })

    it("Dynamic dropdown",()=>{
     cy.visit("https://amazon.com")
     cy.get('#twotabsearchtextbox').as('search').click();
     cy.get('@search').type("microwave");
     cy.get('.left-pane-results-container .s-suggestion-container div').each($el=>{
        if($el.text()==='microwave cover'){
            cy.wrap($el).click();
        }
     })
     cy.get('@search').should('have.value','microwave cover')

     //below is for multiple checkbox
     cy.get('#brandsRefinements ul li span a >span').each(el=>{

        if(el.text()==='Bezrat' || el.text()==='Nordic Ware'){
            cy.wrap(el).click();
        }
       
     })
        
    })
})