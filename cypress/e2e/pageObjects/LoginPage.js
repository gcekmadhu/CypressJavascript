class LoginPage{
    weblocator={
        email:"#input-email",
        password:"#input-password",
        continue:"input.btn.btn-primary"

    }

   
    enterEmail(email){
    
        cy.typeSafely(this.weblocator.email,email)
    }
    enterPassword(password){
        cy.typeSafely(this.weblocator.password,password)
    }
    continue(){
        cy.clickSafely(this.weblocator.continue)
    }
}

export default LoginPage