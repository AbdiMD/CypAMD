import EDHLoginPage from './pageObjects/EDHLoginPage'

describe('Step 1: Teacher management access & Permission', function(){
    before(function(){
        // runs once before all tests in the block
        cy.fixture('ERP_050').then(function(data){
            this.data=data
        })
    })

    it('Operator Director can access menu Teacher Management', function(){
        cy.EDHlogin(this.data.env, this.data.operatorDirectorEmail, this.data.operatorDirectorPassword)
        

    })

})