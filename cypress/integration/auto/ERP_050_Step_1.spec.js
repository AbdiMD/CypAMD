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
        cy.visit(this.data.env, {timeout:100000})
        cy.EDHlogin(this.data.operatorDirectorEmail, this.data.operatorDirectorPassword)

        // 2. Check if side bar menu is there or not
        sidebar.getSideBarMenu().should('be.visible')

        // 3. Check if menu Teacher management is there or not and click on it if it is there
        sidebar.getTeacherManagementMenu().should('have.text',this.localization.TeacherManagementMenuEN).click()
        cy.url().should('include', '/teacher-management/follow-up')

        // 4. Check if there are 3 sub menus inside the Teacher management menu in EN localization
        sidebar.getTeacherManagementFollowUpSubMenu().should('have.text', this.localization.TeacherMgtFollowUpEN)
        sidebar.getTeacherManagementTeachersSubMenu().should('have.text', this.localization.TeacherMgt_teachersEN)
        sidebar.getTeacherManagementContractMgtSubMenu().should('have.text', this.localization.TeacherMgt_ContractMgtEN)

        // 5. Change language to FR
        cy.get('ms-language-drop-down').click()
        cy.get('.mat-menu-content > :nth-child(2)').click()

        // 6. Check if menu Teacher management is there or not have correct FR localization
        sidebar.getTeacherManagementMenu().should('have.text',this.localization.TeacherManagementMenuFR)

        // 7. Check if there are 3 sub menus inside the Teacher management menu in FR Localization
        sidebar.getTeacherManagementFollowUpSubMenu().should('have.text', this.localization.TeacherMgtFollowUpFR)
        sidebar.getTeacherManagementTeachersSubMenu().should('have.text', this.localization.TeacherMgt_teachersFR)
        sidebar.getTeacherManagementContractMgtSubMenu().should('have.text', this.localization.TeacherMgt_ContractMgtFR)

        // 8. Make sure Table follow up is exist in menu Follow up
        cy.get('table').should('be.visible')

        // 9. Click on Teacher sub menu and check if the UI for Teacher page displayed or not
        sidebar.getTeacherManagementTeachersSubMenu().click()
        cy.url().should('include', '/teacher-management/teachers')

        // 10. Log out from platform
        cy.get('mat-toolbar > .secondary-menu > button > span > mat-icon').contains('person').click()
        cy.get('.mat-menu-item').click()

    })

    it('Operator Admin can access menu Teacher Management', function(){

        const sidebar = new EDHSidebarmenu
        
        // 1. Login as Operator Admin
        cy.visit(this.data.env, {timeout:100000})
        cy.EDHlogin(this.data.operatorAdminEmail, this.data.operatorAdminPassword)

        // 2. Check if side bar menu is there or not
        sidebar.getSideBarMenu().should('be.visible')

        // 3. Check if menu Teacher management is there or not and click on it if it is there
        sidebar.getTeacherManagementMenu().should('have.text',this.localization.TeacherManagementMenuEN).click()
        cy.url().should('include', '/teacher-management/follow-up')

        // 4. Check if there are 3 sub menus inside the Teacher management menu in EN localization
        sidebar.getTeacherManagementFollowUpSubMenu().should('have.text', this.localization.TeacherMgtFollowUpEN)
        sidebar.getTeacherManagementTeachersSubMenu().should('have.text', this.localization.TeacherMgt_teachersEN)
        sidebar.getTeacherManagementContractMgtSubMenu().should('have.text', this.localization.TeacherMgt_ContractMgtEN)

        // 5. Change language to FR
        cy.get('ms-language-drop-down').click()
        cy.get('.mat-menu-content > :nth-child(2)').click()

        // 6. Check if menu Teacher management is there or not have correct FR localization
        sidebar.getTeacherManagementMenu().should('have.text',this.localization.TeacherManagementMenuFR)

        // 7. Check if there are 3 sub menus inside the Teacher management menu in FR Localization
        sidebar.getTeacherManagementFollowUpSubMenu().should('have.text', this.localization.TeacherMgtFollowUpFR)
        sidebar.getTeacherManagementTeachersSubMenu().should('have.text', this.localization.TeacherMgt_teachersFR)
        sidebar.getTeacherManagementContractMgtSubMenu().should('have.text', this.localization.TeacherMgt_ContractMgtFR)

        // 8. Make sure Table follow up is exist in menu Follow up
        cy.get('table').should('be.visible')

        // 9. Click on Teacher sub menu and check if the UI for Teacher page displayed or not
        sidebar.getTeacherManagementTeachersSubMenu().click()
        cy.url().should('include', '/teacher-management/teachers')

        // 10. Log out from platform
        cy.get('mat-toolbar > .secondary-menu > button > span > mat-icon').contains('person').click()
        cy.get('.mat-menu-item').click()


    })

    it('Contract Manager can access menu Teacher Management', function(){

        const sidebar = new EDHSidebarmenu
        
        // 1. Login as Contract manager
        cy.visit(this.data.env, {timeout:100000})
        cy.get('#mat-input-0').type(this.data.contractManagerEmail)
        cy.get('#mat-input-1').type(this.data.contractManagerPassword)
        cy.get('#mat-select-0').click()
        cy.get('mat-option[ng-reflect-value="academic"]').click()
        cy.get('#mat-select-1').click()
        cy.get('mat-option').click()
        cy.get('button[color=success]', {timeout:7000}).click()

        // 2. Check if side bar menu is there or not
        sidebar.getSideBarMenu().should('be.visible')

        // 3. Check if menu Teacher management is there or not and click on it if it is there
        sidebar.getTeacherManagementMenu().should('have.text',this.localization.TeacherManagementMenuEN).click()
        cy.url().should('include', '/teacher-management/follow-up')

        // 4. Check if there are 3 sub menus inside the Teacher management menu in EN localization
        sidebar.getTeacherManagementFollowUpSubMenu().should('have.text', this.localization.TeacherMgtFollowUpEN)
        sidebar.getTeacherManagementTeachersSubMenu().should('have.text', this.localization.TeacherMgt_teachersEN)
        sidebar.getTeacherManagementContractMgtSubMenu().should('have.text', this.localization.TeacherMgt_ContractMgtEN)

        // 5. Change language to FR
        cy.get('ms-language-drop-down').click()
        cy.get('.mat-menu-content > :nth-child(2)').click()

        // 6. Check if menu Teacher management is there or not have correct FR localization
        sidebar.getTeacherManagementMenu().should('have.text',this.localization.TeacherManagementMenuFR)

        // 7. Check if there are 3 sub menus inside the Teacher management menu in FR Localization
        sidebar.getTeacherManagementFollowUpSubMenu().should('have.text', this.localization.TeacherMgtFollowUpFR)
        sidebar.getTeacherManagementTeachersSubMenu().should('have.text', this.localization.TeacherMgt_teachersFR)
        sidebar.getTeacherManagementContractMgtSubMenu().should('have.text', this.localization.TeacherMgt_ContractMgtFR)

        // 8. Make sure Table follow up is exist in menu Follow up
        cy.get('table').should('be.visible')

        // 9. Click on Teacher sub menu and check if the UI for Teacher page displayed or not
        sidebar.getTeacherManagementTeachersSubMenu().click()
        cy.url().should('include', '/teacher-management/teachers')

        // 10. Log out from platform
        cy.get('mat-toolbar > .secondary-menu > button > span > mat-icon').contains('person').click()
        cy.get('.mat-menu-item').click()

    })

    it('As Operator, I can see Menu Teacher Management displayed in User Permission Table with correct Permission for each User', function(){

        const sidebar = new EDHSidebarmenu
        const userpermission = new EDHUserPermission
        
        // 1. Login as Operator director
        cy.visit(this.data.env, {timeout:100000})
        cy.EDHlogin(this.data.operatorDirectorEmail, this.data.operatorDirectorPassword)

        // 2. Check if side bar menu is there or not
        sidebar.getSideBarMenu().should('be.visible')

        // 3. Check if menu Setting is there
        sidebar.getSettingMenu().should('have.text', this.localization.SettingEN).click()
        cy.url().should('include', '/import-register')

        // 4. Check sub menu inside setting menu
        sidebar.getImportObjectivesMenu().should('have.text', this.localization.ImportObjectiveEN)
        sidebar.getImportOfFinanceObjMenu().should('have.text', this.localization.ImportofFinanceObjectivesEN)
        sidebar.getImportofFinancialN1().should('have.text', this.localization.ImportofFinancialN1EN)
        sidebar.getDiaposExternal().should('have.text', this.localization.DiaposExternalEN)
        sidebar.getMessageSteps().should('have.text', this.localization.MessageStepsEN)
        sidebar.getNotificationManagement().should('have.text', this.localization.NotificationManagementEN)
        sidebar.getUserPermission().should('have.text', this.localization.UserPermissionEN)

         // 5. Change language to FR
         cy.get('ms-language-drop-down').click()
         cy.get('.mat-menu-content > :nth-child(2)').click()

        // 6. Check if menu Setting is there
        sidebar.getSettingMenu().should('have.text', this.localization.SettingFR).click()

        // 7. Check sub menu inside setting menu
        sidebar.getImportObjectivesMenu().should('have.text', this.localization.ImportObjectiveFR)
        sidebar.getImportOfFinanceObjMenu().should('have.text', this.localization.ImportofFinanceObjectivesFR)
        sidebar.getImportofFinancialN1().should('have.text', this.localization.ImportofFinancialN1FR)
        sidebar.getDiaposExternal().should('have.text', this.localization.DiaposExternalFR)
        sidebar.getMessageSteps().should('have.text', this.localization.MessageStepsFR)
        sidebar.getNotificationManagement().should('have.text', this.localization.NotificationManagementFR)
        sidebar.getUserPermission().should('have.text', this.localization.UserPermissionFR)

        // 8. I can click on User Permission sub menu and will redirect to User Permission page
        sidebar.getSettingMenu().click()
        sidebar.getUserPermission().click()
        cy.url().should('include', '/user-permission')

        // 9. On User Permission page I can see there is User Permission table
        userpermission.getUserPermissionTable().should('exist')

        // 10. I can see there is User Permission details above the User Permission table
        userpermission.getTextPermission().should('have.text', this.localization.UserPermissionFR)
        userpermission.getTextforView().should('have.text', this.localization.ViewPermissionFR)
        userpermission.getTextforEdit().should('have.text', this.localization.EditPermissionFR)
        userpermission.getTextHP().should('have.text', this.localization.HomepageFR)
        cy.get('ms-language-drop-down').click()
        cy.get('.mat-menu-content > :nth-child(1)').click()
        userpermission.getTextPermission().should('have.text', this.localization.UserPermissionEN)
        userpermission.getTextforView().should('have.text', this.localization.ViewPermissionEN)
        userpermission.getTextforEdit().should('have.text', this.localization.EditPermissionEN)
        userpermission.getTextHP().should('have.text', this.localization.HomepageEN)
        
        // 11. I can see there are 19 columns on User Permission table
        cy.EDHCheckListofUsertypeEN()
        cy.get('ms-language-drop-down').click()
        cy.get('.mat-menu-content > :nth-child(2)').click()
        cy.EDHCheckListofUsertypeFR()


    })

})