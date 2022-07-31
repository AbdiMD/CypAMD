class EDHUserPermission
{
getTitlePage()
{
    return cy.get('#pageTitle > div > span')
}

getTextPermission(){
    return cy.get('ms-user-permission > .p-grid > div > .label')
}

getTextforView(){
    return cy.get('ms-user-permission > .p-grid > div > .view-perm')
}

getTextforEdit(){
    return cy.get('ms-user-permission > .p-grid > div > :nth-child(3)')
}

getTextHP(){
    return cy.get('ms-user-permission > .p-grid > div > :nth-child(4)')
}

getUserPermissionTable(){
    return cy.get('.table-school')
}

getTableHeader(){
    return cy.get('.fixed-header > .array-data')
}

}

export default EDHUserPermission;