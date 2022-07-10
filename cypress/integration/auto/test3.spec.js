describe('Test suite 1', function(){

    before(function(){
        // runs once before all tests in the block
        cy.fixture('juryorganization').then(function(data){
            this.data=data
        })
    })
    
    
    
    it('login', function(){
        cy.login(this.data.email, this.data.password)
        cy.get('mat-nav-list > mat-list-item > .mat-list-item-content > a > span').each(($el, index, $list) => {
            if ($el.text() === 'Certification'){
                cy.wrap($el).click()
                cy.get('mat-nav-list > mat-list-item > .mat-list-item-content > mat-nav-list > mat-list-item').each(($el, index, $list) => {
                    if ($el.text() === 'Jury Organization'){
                        cy.wrap($el).click()
                        // cy.get('navbar-brand').contains(this.data.navbarBrand)
                    }
                })
            }
        })
        cy.get('.cdk-column-titleFilter > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('S-CPEB')
        cy.get(':nth-child(1) > .icon-hand > a').click()
        
        
    })

})