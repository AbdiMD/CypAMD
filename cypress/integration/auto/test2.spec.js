describe('Test suite 1', function(){

    before(function(){
        // runs once before all tests in the block
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })
    
    
    
    it('login', function(){
        cy.login(this.data.email, this.data.password)
        cy.contains(this.data.menuToClick).click()
        cy.get('mat-list-item a').each(($el, index, $list) => {
            if ($el.text() === 'Messages'){
                cy.wrap($el).click()
                cy.contains(this.data.subMenus).should('be.visible')
                cy.get('mat-list-item a').each(($el, index, $list) => {
                    if ($el.text() === 'Messages'){
                        cy.wrap($el).click()
                        cy.get('navbar-brand').should('have.value','List of alert')
                    }
                })
            }
        })
        cy.pause()
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
        
    })

    it('Modify the existing alert', function(){
        cy.url('https://v2.zetta-demo.space/alert-functionality')
        cy.get('tbody > tr').contains('AMD Alert functionality for testing 6').should('be.visible')
        cy.get(':nth-child(1) > .cdk-column-action').contains('modify').click()

    })
})