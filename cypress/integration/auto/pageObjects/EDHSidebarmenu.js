class EDHSidebarmenu
{
    getSideBarMenu(){
        return cy.get('mat-nav-list')
    }
    
    getAdmissionsMenu(){
        return cy.get('mat-list-item > .mat-list-item-content > a[href="/candidates"] > span')
    }

    // Teacher Management menu
    getTeacherManagementMenu(){
        return cy.get('mat-list-item > .mat-list-item-content > a[href="/teacher-management"] > span')
    }

    getTeacherManagementFollowUpSubMenu(){
        return cy.get(':nth-child(5) > :nth-child(1) > .sub-menu > :nth-child(1) > .mat-list-item-content > div.ng-star-inserted > .gene-relative > span')
    }

    getTeacherManagementTeachersSubMenu(){
        return cy.get(':nth-child(5) > :nth-child(1) > .sub-menu > :nth-child(2) > .mat-list-item-content > div.ng-star-inserted > .gene-relative > span')
    }

    getTeacherManagementContractMgtSubMenu(){
        return cy.get(':nth-child(5) > :nth-child(1) > .sub-menu > :nth-child(3) > .mat-list-item-content > div.ng-star-inserted > .gene-relative > span')
    }

    getSettingMenu(){
        return cy.get('mat-list-item > .mat-list-item-content > a[href="/import-register"] > span')
    }

    getImportObjectivesMenu(){
        return cy.get('mat-list-item > .mat-list-item-content > mat-nav-list > mat-list-item > .mat-list-item-content > div > a[href="/import-register"] > span')
    }

    getImportOfFinanceObjMenu(){
        return cy.get('mat-list-item > .mat-list-item-content > mat-nav-list > mat-list-item > .mat-list-item-content > div > a[href="/import-finance"] > span')
    }

    getImportofFinancialN1(){
        return cy.get('mat-list-item > .mat-list-item-content > mat-nav-list > mat-list-item > .mat-list-item-content > div > a[href="/import-previous-finance"] > span')
    }

    getDiaposExternal(){
        return cy.get('mat-list-item > .mat-list-item-content > mat-nav-list > mat-list-item > .mat-list-item-content > div > a[href="/promo-external"] > span')
    }

    getMessageSteps(){
        return cy.get('mat-list-item > .mat-list-item-content > mat-nav-list > mat-list-item > .mat-list-item-content > div > a[href="/step-validation-message"] > span')
    }

    getNotificationManagement(){
        return cy.get('mat-list-item > .mat-list-item-content > mat-nav-list > mat-list-item > .mat-list-item-content > div > a[href="/notification-management"] > span')
    }

    getUserPermission(){
        return cy.get('mat-list-item > .mat-list-item-content > mat-nav-list > mat-list-item > .mat-list-item-content > div > a[href="/user-permission"] > span')
    }

}

export default EDHSidebarmenu