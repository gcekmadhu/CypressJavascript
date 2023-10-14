// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
Cypress.Commands.add('loginOpenCart',(username,password)=>{
    cy.session([username,password],()=>{
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
        cy.get('#input-email').type(username)
        cy.get('#input-password').type(password)
        cy.get('input.btn.btn-primary').click()
    })
})
Cypress.Commands.add('typeSafely',(locator,text)=>{
    cy.get(locator).type(text)
})

Cypress.Commands.add('selectCheckboxSafely',(locator)=>{
    cy.get(locator).check()
})

Cypress.Commands.add('clickSafely',(locator)=>{
    cy.get(locator).click()
})

Cypress.Commands.add('selectRadioButtonByValue',(locator,valueExp)=>{
    cy.get(locator).each(ele => {
        cy.log(ele.attr('value'))
        if (ele.attr('value') == valueExp) {
            cy.wrap(ele).check()

        }

    })
})
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


/// <reference types="cypress" />

