import EDHLoginPage from '../integration/auto/pageObjects/EDHloginPage'

Cypress.Commands.add('EDHlogin', (email, password) => {
    const loginPage = new EDHLoginPage()
        loginPage.getEmailfield().type(email)
        loginPage.getPasswordfield().type(password)
        loginPage.getLoginButton().click()
    })