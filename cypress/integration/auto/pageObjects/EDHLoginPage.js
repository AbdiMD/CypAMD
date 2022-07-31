class EDHLoginPage
{
getEmailfield()
{
    return cy.get('#mat-input-0')
}

getPasswordfield()
{
    return cy.get('#mat-input-1')
}

getLanguageButton()
{
    return cy.get('ms-language-drop-down')
}

getLoginButton()
{
    return cy.get('button[color=success]', {timeout:7000})
}

getSelectEntity()
{
    return cy.get('#mat-select-0')
}

getSelectEntityDropdown()
{
    return cy.get('.mat-select-panel > mat-option > .mat-option-text')
}

getSelectUserType()
{
    return cy.get('#mat-select-1')
}

getSelectUserTypeDropdown()
{
    return cy.get('mat-option > .mat-option-text')
}

}

export default EDHLoginPage;