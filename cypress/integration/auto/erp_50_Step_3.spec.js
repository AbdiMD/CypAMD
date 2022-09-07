import EDHSidebarmenu from './pageObjects/EDHSidebarmenu'
import EDHUserPermission from './pageObjects/EDHUserPermission'


describe('Step 1: Teacher management access & Permission', function(){
    beforeEach(function(){
        // runs once before all tests in the block
        cy.fixture('ERP_050').then(function(data){
            this.data=data
        })
        cy.fixture('Localization').then(function(localization){
            this.localization=localization
        })
    })

    it('Operator Director can access menu Teacher Management', function(){
        const sidebar = new EDHSidebarmenu
        
        // 1. Login as Operator director
        cy.visit(this.data.env, {timeout:150000})
        cy.EDHlogin(this.data.operatorDirectorEmail, this.data.operatorDirectorPassword)

        // 2. Check if side bar menu is there or not
        sidebar.getSideBarMenu().should('be.visible')

        // 3. Access menu Course & Sequences
        cy.get('mat-list-item > .mat-list-item-content > a[href="/template-sequences"]')
            .siblings()
            .children()
            .eq(0).should('have.text', this.localization.TemplateEN)

    })

})
