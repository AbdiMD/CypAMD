import EDHLoginPage from '../integration/auto/pageObjects/EDHloginPage'
import EDHUserPermission from '../integration/auto/pageObjects/EDHUserPermission'

Cypress.Commands.add('EDHlogin', (email, password) => {
    const loginPage = new EDHLoginPage()
        loginPage.getEmailfield().type(email)
        loginPage.getPasswordfield().type(password)
        loginPage.getLoginButton().click()
    })


Cypress.Commands.add('EDHCheckListofUsertypeEN', () => {
    const tableHeader = new EDHUserPermission()
        tableHeader.getTableHeader().contains('Academic Director').should('exist')
        tableHeader.getTableHeader().contains('Academic Member').should('exist')
        tableHeader.getTableHeader().contains('Academic Referent').should('exist')
        tableHeader.getTableHeader().contains('Admission Director').should('exist')
        tableHeader.getTableHeader().contains('Admission Member').should('exist')
        tableHeader.getTableHeader().contains('Alumni Member').should('exist')
        tableHeader.getTableHeader().contains('CEO').should('exist')
        tableHeader.getTableHeader().contains('Company Relation Director').should('exist')
        tableHeader.getTableHeader().contains('Company Relation Member').should('exist')
        tableHeader.getTableHeader().contains('Continuous Formation Manager').should('exist')
        tableHeader.getTableHeader().contains('Contract Manager').should('exist')
        tableHeader.getTableHeader().contains('Finance Director').should('exist')
        tableHeader.getTableHeader().contains('Finance Member').should('exist')
        tableHeader.getTableHeader().contains('Mentor').should('exist')
        tableHeader.getTableHeader().contains('Student').should('exist')
        tableHeader.getTableHeader().contains('Teacher').should('exist')
        tableHeader.getTableHeader().contains('Operator Admin').should('exist')
        tableHeader.getTableHeader().contains('Operator Director').should('exist')
})

Cypress.Commands.add('EDHCheckListofUsertypeFR', () => {
    const tableHeader = new EDHUserPermission()
        tableHeader.getTableHeader().contains('Directeur de la pédagogie').should('exist')
        tableHeader.getTableHeader().contains('Membre de la pédagogie').should('exist')
        tableHeader.getTableHeader().contains('Référent pédagogique').should('exist')
        tableHeader.getTableHeader().contains('Directeur des admissions').should('exist')
        tableHeader.getTableHeader().contains('Membre des admissions').should('exist')
        tableHeader.getTableHeader().contains('Membre des alumni').should('exist')
        tableHeader.getTableHeader().contains('CEO').should('exist')
        tableHeader.getTableHeader().contains('Directeur relation entreprise').should('exist')
        tableHeader.getTableHeader().contains('Membre relation entreprise').should('exist')
        tableHeader.getTableHeader().contains('Responsable formation continue').should('exist')
        tableHeader.getTableHeader().contains('Gestionnaire de contrat').should('exist')
        tableHeader.getTableHeader().contains('Directeur de la Finance').should('exist')
        tableHeader.getTableHeader().contains('Membre de la Finance').should('exist')
        tableHeader.getTableHeader().contains('Tuteur d’Entreprise').should('exist')
        tableHeader.getTableHeader().contains('Apprenant').should('exist')
        tableHeader.getTableHeader().contains('Enseignant').should('exist')
        tableHeader.getTableHeader().contains('Opérateur Admin').should('exist')
        tableHeader.getTableHeader().contains('Opérateur Directeur').should('exist')
})


Cypress.Commands.add('changeLanguage', (language) => {
    let lang = language;
    cy.get('ms-language-drop-down').click()
    if (lang === 'EN'){
        cy.get('.mat-menu-content > :nth-child(1)').click()
    } else if (lang === 'FR'){
        cy.get('.mat-menu-content > :nth-child(2)').click()
    } else {
        cy.get('.mat-menu-content > :nth-child(1)').click()
    }
    
})