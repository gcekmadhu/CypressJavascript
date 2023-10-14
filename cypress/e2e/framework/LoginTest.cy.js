import LoginPage from "../pageObjects/LoginPage"
const loginPage=new LoginPage();
describe("Login Test",()=>{
    before("Fixture and visit url",()=>{
        cy.fixture('login').then(function(data){
            this.data=data;
        })
        cy.visit(Cypress.env('baseUrl')+Cypress.env('loginUrl'))
    })
    it("Successfull login Test",function(){

        loginPage.enterEmail(this.data.email)
        loginPage.enterPassword(this.data.password)
        loginPage.continue();
        


    })
})