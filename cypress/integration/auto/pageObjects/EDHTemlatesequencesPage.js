class EDHtemplatepage
{
    getAddTemplateButton()
    {
        return cy.get('tr > th > div > div > button[color="accent"]')
                    .click()
                    .get('.mat-menu-content')
                    .click()
    }

    



}

export default EDHtemplatepage;