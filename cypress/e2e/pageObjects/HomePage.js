import Message from "../constants/Message";
class HomePage {
    weblocators = {
        homeButton: ".fa-home",
        cartButton: "#cart",
        cartCancelButton: ".fa-times"
    }

    verifyTitle() {
       cy.title().should('eq',Message.titleOfPage);
    }
    clickHomeButton() {
        cy.clickSafely(this.weblocators.homeButton)
    }
    clickOnCartButton() {
        cy.clickSafely(this.weblocators.cartButton)
    }
    clearCart(){
        cy.get('.fa-times').each(($ele,$index)=>{
            cy.log($index)
            cy.wrap($ele).eq($index).click();
    
        })
    }
}
export default HomePage