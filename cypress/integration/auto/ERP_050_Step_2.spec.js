import EDHSidebarmenu from './pageObjects/EDHSidebarmenu'
import EDHUserPermission from './pageObjects/EDHUserPermission'
import EDHtemplatepage from './pageObjects/EDHTemlatesequencesPage'


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
        const templatePage = new EDHtemplatepage
        
        // 1. Login as Operator director
        cy.visit(this.data.env, {timeout:150000})
        cy.EDHlogin(this.data.operatorDirectorEmail, this.data.operatorDirectorPassword)

        // 2. Check if side bar menu is there or not
        sidebar.getSideBarMenu().should('be.visible')

        // 3. Access menu Course & Sequences
        sidebar.getCourseandSequences().should('have.text',this.localization.CourseandsequencesEN).click()

        // 4. Access sub menu template and check each of the sub menu in EN
        sidebar.getTemplatesubmenu().should('have.text', this.localization.TemplateEN).click()
        cy.url().should('include', '/template-sequences')
        sidebar.getSequencessubmenu().should('have.text', this.localization.SequenceEN)
        sidebar.getModulessubmenu().should('have.text', this.localization.ModulesEN)
        sidebar.getSubjectssubmenu().should('have.text', this.localization.SubjectEN)

        // 5. Change the language to FR and check the text for sub menus
        cy.changeLanguage('FR');
        sidebar.getTemplatesubmenu().should('have.text', this.localization.TemplateFR)
        sidebar.getSequencessubmenu().should('have.text', this.localization.SequenceFR)
        sidebar.getModulessubmenu().should('have.text', this.localization.ModulesFR)
        sidebar.getSubjectssubmenu().should('have.text', this.localization.SubjectFR)

        // 6. As operator admin add a sequence
        cy.get('table').should('exist')

        // 7. Check 3 button above the table
        cy.get('th >div >div>button').should('have.length', 3)
        
        // 8. Click on button Add Template button and its open on new tab
        cy.window().then(win => {
            cy.stub(win, 'open').as('open')
          })

        templatePage.getAddTemplateButton()
        cy.window().its('open').should('be.called')

        // 9. Access page manually
        cy.visit('https://zetta-staging.work/template-sequences/form-detail')

        // 10. Add sequence
        cy.get('#mat-form-field-label-1').click().type('Template AMD')
        cy.get('#mat-input-1').click().type('This is the description')


    })

})
