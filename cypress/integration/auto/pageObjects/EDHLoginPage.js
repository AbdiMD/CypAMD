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

}

export default EDHLoginPage;