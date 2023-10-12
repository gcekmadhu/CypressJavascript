before("Before All",()=>{
    cy.log("Before 1st Test Case------")
})

after("After All",()=>{
    cy.log("After Last  Test Case------")
})
beforeEach("Before Each Test Suite",()=>{
    cy.log("Before Each Test Suite Run ------")
})
describe('Test Suites 1',()=>{
    beforeEach("Before Each Test Case",()=>{
        cy.log("Before Each Test Case Run ------")
    })
    it('Test Case 1',()=>{

        cy.log("Print message for TC1")

    })
    it('Test Case 2',()=>{

        cy.log("Print message for TC2")

    })
    afterEach("Before Each Test Case",()=>{
        cy.log("Before Each Test Case Run ------")
    })
})

describe('Test Suites 2',()=>{
    it('Test Case 1',()=>{

        cy.log("Print message for TC1")

    })
    it('Test Case 2',()=>{

        cy.log("Print message for TC2")

    })
})