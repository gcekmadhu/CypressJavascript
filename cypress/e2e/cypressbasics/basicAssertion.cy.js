
describe("Basic Assertions", () => {
    it("Green Kart", () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca', { force: true });
        cy.wait(2000)
        cy.get('.products .product div.product-image:visible').should('have.length', 4);
        //Assertion implicit (provided by cypress)=>should, and explicit assertion (by chai)=>expect,assert
    })

    //Assertion implicit (provided by cypress)=>should, and explicit assertion (by chai)=>expect,assert

    it("Implicit Assetion", () => {
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
        // cy.url().should('include','naveenautomationlabs')
        // cy.url().should('eq','https://naveenautomationlabs.com/opencart/index.php?route=account/login')
        // cy.url().should('contain','login')

        // //if multiple time below is one way 
        // cy.url().should('include','naveenautomationlabs')
        // .should('eq','https://naveenautomationlabs.com/opencart/index.php?route=account/login')
        // .should('contain','login')

        //if multiple time below is other way 
        cy.url().should('include', 'naveenautomationlabs')
            .and('eq', 'https://naveenautomationlabs.com/opencart/index.php?route=account/login')
            .and('contain', 'login')
            .and('not.contain', 'register')
        cy.title().should('include', 'Account Login')
        cy.get("[id='logo'] >a [title='naveenopencart']").should('be.visible')

        //capture all links
        cy.get('a[href]').should('have.length', '81');
        //cy.get("#input-email").should('have.','placeholder')
        cy.get("#input-email").should('have.attr', 'placeholder','E-Mail Address')
    })


    it("Explicit Assetion", () => {
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
        cy.get('#input-email').type('m@r.com',{force:true})
        cy.get('#input-password').type('Abcd1234',{force:true})
        cy.get('input.btn.btn-primary').click();
        cy.contains('Edit Account').click();

        let expName='Madhuri';

        cy.get('#input-firstname').then(element=>{
            let actualName=element.attr('value');
            cy.log(actualName)
            //BDD style
            expect(actualName).to.be.eq(expName);

            //TDD Style
            assert.equal(actualName,expName)
        })


    });
})