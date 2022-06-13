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

import LoginPage from '../integration/auto/pageObjects/Loginpage'

Cypress.Commands.add('login', (email, password) => {
    const loginPage = new LoginPage()
        cy.visit('https://v2.zetta-demo.space/session/login', {timeout:100000})
        loginPage.getEmailfield().type(email)
        loginPage.getPasswordfield().type(password)
        loginPage.getLanguageButton().click()
        cy.contains('Anglais').click()
        loginPage.getLoginButton().click()
    })

// import LoginPage from '../integration/auto/pageObjects/Loginpage'

// Cypress.Commands.add('login', (email, password) => {
//     const loginPage = new LoginPage()
//         cy.visit('https://v2.zetta-demo.space/session/login', {timeout:100000})
//         cy.get('#mat-input-0').type(email)
//         cy.get('#mat-input-1').type(password)
//         cy.get('img').click()
//         cy.contains('Anglais').click()
//         cy.get('button[color=success]', {timeout:7000}).contains('LOGIN').click()
//     })