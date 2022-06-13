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
            if ($el.text() === 'Certification'){
                cy.wrap($el).click()
                cy.get('mat-list-item a').each(($el, index, $list) => {
                    if ($el.text() === 'Jury Organization'){
                        cy.wrap($el).click()
                        cy.get('navbar-brand').should('have.value','Jury Organization')
                    }
                })
            }
        })
        
        
    })

})