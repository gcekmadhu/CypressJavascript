describe('Javascript Alerts', () => {
    it('JS Alerts', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')
        cy.contains('JavaScript Alerts').find("[type='button']").click()
     
        cy.contains('Confirm box:').find("[type='button']").click();

        cy.on('window:alert',(alertText)=>{
            //cy.log(alertText)
            expect(alertText).to.be.eq('I am an alert box!')
            
        })

        cy.on('window:confirm',(alertText)=>{
            //cy.log(alertText)
            expect(alertText).to.be.eq('Press a button!')        
        })

        cy.on('window:confirm',()=>false)
        cy.get('#confirm-demo').should('have.text','You pressed Cancel!')


        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome');
        })
        cy.contains('Prompt box').find("[type='button']").click();

        // cy.on('window:prompt',()=>false)

        //Authenticate user
        cy.visit('https://the-internet.herokuapp.com/basic_auth',
        {auth:{username:"admin",password:"admin"}})
        cy.get('#content').contains('Congratulations')

        
    })
})