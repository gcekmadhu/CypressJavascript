import RegisterPage from "../pageObjects/RegisterPage"
const registerPage=new RegisterPage();

describe("Open Cart Application", () => {
    before("Get Test Data from Fixture", () => {
        
        cy.fixture('register').then(function(data) {
            this.data = data;
        })
    })
    it('Register Open Cart Application', function() {
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
        let randomNum = Math.random() * 10;

        registerPage.enterFirstName(this.data.firstname)
        registerPage.enterLastName(this.data.lastname)
        registerPage.enterEmail(this.data.email+randomNum+"@k.com")
        registerPage.enterTelephone(this.data.telephone)
        registerPage.enterPassword(this.data.password)
        registerPage.enterConfirmPassword(this.data.password)
        registerPage.subscribe('1')
        registerPage.confirmPrivacyPolicy()
        registerPage.continue()
        
        // //With fixture:
        // cy.get('#input-firstname').should('have.attr','placeholder',"First Name")
        // //cy.get('#input-firstname').type(this.data.firstname)
        // cy.typeSafely('#input-firstname',this.data.firstname)
        // cy.get('#input-lastname').should('have.attr','placeholder',"Last Name")
        // cy.get('#input-lastname').type(this.data.lastname)
        // cy.get('#input-email').should('have.attr','placeholder','E-Mail')
        // cy.get('#input-email').type(this.data.email+randomNum+"@k.com")
        // cy.get('#input-telephone').should('have.attr','placeholder','Telephone')
        // cy.get('#input-telephone').type(this.data.telephone)
        // cy.get('#input-password').should('have.attr','placeholder','Password')
        // cy.get('#input-password').type(this.data.password)
        // cy.get('#input-confirm').should('have.attr','placeholder','Password Confirm')
        // cy.get('#input-confirm').type(this.data.password)
        // cy.get(".radio-inline > input[type=radio]").each(ele => {
        //     cy.log(ele.attr('value'))
        //     if (ele.attr('value') == 1) {
        //         cy.wrap(ele).check()

        //     }

        // })
        // cy.get("input[type='checkbox']").check();
        // cy.get('.btn.btn-primary').click();

    })
})