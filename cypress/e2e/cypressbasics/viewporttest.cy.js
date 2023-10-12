describe("Viewport tests",()=>{
    it("Different Size and orientation tests",()=>{

        cy.viewport(768,1024)
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
    })

    it("Different Size using preset",()=>{

        cy.viewport('iphone-xr')
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
    })
    it("Different Size using preset and landscape",()=>{

        cy.viewport('iphone-xr','landscape')
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
    })
})



describe("Viewport tests defined at suite level",{viewportWidth:768,viewportHeight:1024},()=>{
    it("Different Size and orientation tests",()=>{

        // cy.viewport(768,1024)
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
    })

    it("Different Size using preset",()=>{

        // cy.viewport('iphone-xr')
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
    })
    it("Different Size using preset and landscape",()=>{

        // cy.viewport('iphone-xr','landscape')
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
    })
})