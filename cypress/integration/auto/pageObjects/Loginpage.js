class LoginPage
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
    return cy.get('img')
}

getLoginButton()
{
    return cy.get('button[color=success]', {timeout:7000}).contains('LOGIN')
}

}

export default LoginPage;