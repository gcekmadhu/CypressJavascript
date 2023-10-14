describe("Naveen Automation Labs Ecommerce Websit", () => {
    beforeEach("Launch url", () => {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php");
    })
    it("Verify the logo on the page", () => {

        cy.get('#logo > a').should('be.visible');
    })
    it("Verify if 4 products are displayed", () => {
        cy.get('.product-layout').as('productLocator').should('have.length', 4)
    })

    it("Add Macbook to cart", () => {
        cy.get('.product-layout').find('> div').each($el => {
            cy.log($el)
            let productName = $el.find(' >div:nth-child(2) > h4 >a').text();
            cy.log(productName)
            if (productName === 'MacBook') {
                cy.wrap($el).contains('Add to Cart').click();
            }

        })
    })

    it("Verify Cart and checkout", () => {
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

    })


    it("Verify Cart and checkout and enter billing details", () => {
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
})




function getPrice(productName){
    let price;
    cy.get('.product-layout').find('> div').each($el => {
                    let product = $el.find(' >div:nth-child(2) > h4 >a').text();
                    cy.log(product)
                    if (product === productName) {
                        let price=$el.find('.caption p.price').text();
                        cy.log(price)
                    }
        
                })
}
