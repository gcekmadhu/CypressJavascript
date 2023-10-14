describe('Child Tabs or windows', () => {
    it('Child', () => {
        // cy.visit('https://the-internet.herokuapp.com/windows');
        // //remove target
        // cy.get('.example a').invoke('removeAttr', 'target').click();
        // cy.url().should('contain', 'new')



        //New window
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/').then(win=>{
            cy.spy(win,'open').as('open')
        })
        cy.get('#openwindow').click()
        cy.get('@open')
        .should('have.been.called')
        .its('firstCall.returnValue')
        .then((childWindow)=>{
           // expect(childWindow.document.body.querySelector('#header-part .logo')).to.be.visible();
        }).wait(2000).invoke('close')
        

    })
})