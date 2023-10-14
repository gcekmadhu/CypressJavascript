class RegisterPage{

    weblocators = {
        firstName: "#input-firstname",
        lastName: "#input-lastname",
        email: "#input-email",
        telephone: "#input-telephone",
        password: "#input-password",
        confirmPassword: "#input-confirm",
        privacyPolicy: "input[type=\"checkbox\"]",
        continue: ".btn.btn-primary",
        subscribe:".radio-inline > input[type=radio]"
    }

    enterFirstName(fn) {
        cy.typeSafely(this.weblocators.firstName,fn)
    }
    enterLastName(ln) {
        cy.typeSafely(this.weblocators.lastName,ln)
       
    }
    enterEmail(emailId) {
        cy.typeSafely(this.weblocators.email,emailId)
    }
    enterTelephone(ph) {
        cy.typeSafely(this.weblocators.telephone,ph)
    }
    enterPassword(pwd) {
        cy.typeSafely(this.weblocators.password,pwd)
    }
    enterConfirmPassword(pwd) {
        cy.typeSafely(this.weblocators.confirmPassword,pwd)
    }
    confirmPrivacyPolicy() {
        cy.selectCheckboxSafely(this.weblocators.privacyPolicy)
    }
    continue() {
        cy.clickSafely(this.weblocators.continue);
    }

    subscribe(value){
        cy.selectRadioButtonByValue(this.weblocators.subscribe,value)
    }

}

export default RegisterPage;