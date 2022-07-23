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
        return cy.get(':nth-child(4) > :nth-child(1) > .sub-menu > :nth-child(1) > .mat-list-item-content > div.ng-star-inserted > .gene-relative > span')
    }

    getTeacherManagementTeachersSubMenu(){
        return cy.get(':nth-child(4) > :nth-child(1) > .sub-menu > :nth-child(2) > .mat-list-item-content > div.ng-star-inserted > .gene-relative > span')
    }

    getTeacherManagementContractMgtSubMenu(){
        return cy.get(':nth-child(4) > :nth-child(1) > .sub-menu > :nth-child(3) > .mat-list-item-content > div.ng-star-inserted > .gene-relative > span')
    }

}

export default EDHSidebarmenu