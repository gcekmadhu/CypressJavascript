describe("Upload File",()=>{
    it("TC1 Upload file with input field",()=>{
        cy.visit('https://www.lambdatest.com/selenium-playground/upload-file-demo')
        cy.fixture('user.text').as('text')
        cy.get('#file').selectFile('@text')

        cy.fixture('abc.pdf').as('pdf')
        cy.get('#file').selectFile('@pdf')
    })
    // it("TC1 Upload file with input field wit drag and drop",()=>{
    //     cy.visit('https://www.lambdatest.com/selenium-playground/upload-file-demo')
    //     cy.fixture('abc.pdf').as('pdf')
    //     cy.get('#file').selectFile('@pdf',{action:'drag-drop'})
    // })
})