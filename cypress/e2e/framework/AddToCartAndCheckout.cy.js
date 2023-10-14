import LoginPage from "../pageObjects/LoginPage"
import HomePage from "../pageObjects/HomePage"
const homePage=new HomePage();
describe("Add to Cart and Checkout Test",()=>{
    before("Fixture and visit url",()=>{
        cy.fixture('login').then(function(data){
            this.data=data;
        })
        
        
   })
   beforeEach("Login",function(){
    
    cy.loginOpenCart(this.data.email,this.data.password)
   })
    it("Verify home page and clear cart",function(){
        //cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
        cy.log(Cypress.env('baseUrl'))
        cy.visit(Cypress.env('baseUrl')+Cypress.env('loginUrl'))
       let title=homePage.verifyTitle();
       //expect(title).to.be.eq('My Account')
       homePage.clickHomeButton();
       homePage.clickOnCartButton();
       homePage.clearCart(); 

    })
})