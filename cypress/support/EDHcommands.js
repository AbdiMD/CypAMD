import EDHLoginPage from './pageObjects/EDHLoginPage'

Cypress.Commands.add('EDHlogin', (env, email, password) => {
    const loginPage = new EDHLoginPage()
        cy.visit(env, {timeout:100000})
        loginPage.getEmailfield().type(email)
        loginPage.getPasswordfield().type(password)
        loginPage.getLoginButton().click()
    })