describe("Viewport tests",()=>{
    it("Different Size and orientation tests",()=>{

        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

        //for id use #<value of id>
        //for class use .<classname>
        //attr [attr='value']
        //multiple class .<className1>.<className2>
        //Nth value => div > span > div
        //staring text is fixed and ending changes test123/456 e.g [span^='xyz']
        //Ending text fixed e.g 123/456-Test [span$='xyz']
    })
})