// import LoginPage from '../auto/pageObjects/Loginpage'

describe('Test suite 1', function(){

    before(function(){
        // runs once before all tests in the block
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })
    
    
    
    it('login', function(){
        cy.login(this.data.email, this.data.password)

        //test page object model
        // const loginPage = new LoginPage()
        // cy.visit('https://v2.zetta-demo.space/session/login', {timeout:100000})
        // loginPage.getEmailfield().type(this.data.email)
        // loginPage.getPasswordfield().type(this.data.password)
        // loginPage.getLanguageButton().click()
        // cy.contains('Anglais').click()
        // loginPage.getLoginButton.click()


        cy.contains('Messages').click()
        cy.contains('Functionality Alert').click()
        cy.wait(6000)
        cy.get('button').contains('Add a new Alert').should('be.visible')
        cy.get('button').contains('Add a new Alert').click()
        cy.get('#mat-dialog-0').should('be.visible')
        cy.get('div.ng-untouched > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('AMD Alert functionality for testing 6')
        cy.get('.ng-value-container').type('Academic Director')
        cy.get('.ng-dropdown-panel').contains('Academic Director').click()
        cy.get('.ck-blurred').type('This is test text for Alert functionality')
        cy.get('.ng-invalid.ng-dirty > :nth-child(5) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').type('Very Happy')
        cy.get(':nth-child(6) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').type('Disappointing')
        cy.get('.justify-content-end > :nth-child(2)').contains('Save & Leave').click()
        cy.get('.swal2-popup').should('be.visible')
        cy.get('.swal2-confirm').click()
        
        
        // This to get data on table
        // cy.get('tbody > :nth-child(1) > .text-center', {timeout:50000}).find('input[type="Checkbox"]').click()
        // cy.get('tr td:nth-child(4)').each(($e1,index,$list) => {
        //     const text = $e1.text()
        //    if (text.includes('TURIN'))
        //    {
        //     cy.get('tr td:nth-child(1) input[type="checkbox"]', {timeout:15000}).eq(index).check({force:true})
        //    }
        // })
        // cy.get('tbody > :nth-child(1) > .text-center input[type="checkbox"]', {timeout:15000}).check({force: true}).should('be.checked')
        // cy.get('button').contains('Assign program').click()
    })

    it('Modify the existing alert', function(){
        cy.url('https://v2.zetta-demo.space/alert-functionality')
        cy.get('tbody > tr').contains('AMD Alert functionality for testing 6').should('be.visible')
        cy.get(':nth-child(1) > .cdk-column-action').contains('modify').click()

    })
})