

class SignupPage {
    
    go() {
        cy.visit('/')
        cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
        cy.get('a').click()
    }

    fillForm(dados)  {
        cy.get('input[name="fullName"]').type(dados.name)
        cy.get('input[name="cpf"]').type(dados.cpf)
        cy.get('input[name="email"]').type(dados.email)
        cy.get('input[name="whatsapp"]').type(dados.whatsapp)

        cy.get('input[name="postalcode"]').type(dados.address.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(dados.address.number)
        cy.get('input[name="address-details"]').type(dados.address.details)

        cy.get('input[name="address"]').should('have.value', dados.address.street)
        cy.get('input[name="district"]').should('have.value', dados.address.district)
        cy.get('input[name="city-uf"]').should('have.value', dados.address.city_state)

        cy.contains('.delivery-method li', dados.delivery_method).click()
        cy.get('input[accept^="image"]').attachFile('/images/' + dados.cnh)
    }

    submit() {
        cy.get('form button[type="submit"]').click()
    }

    modalContentShouldBe(expectedMessage) {
        cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage)
    }
    
    alertMessageShouldBe(expectedMessage) {
        //cy.get('.alert-error').should('have.text',expectedMessage)
        cy.contains('.alert-error', expectedMessage).should('be.visible')
    }

}

export default new SignupPage;