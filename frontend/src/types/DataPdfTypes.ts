export interface GroupsTypes {
    id: number;
    name: string;
    isRequired: boolean;
    appOrder: number;
    printOrder: number;
    groupType: string;
    s3File: string;
    data: string;
}


export interface DataPdfTypes {
    id: number;
    notes: null;
    customizationConfig: {
        id: number;
        s3File: {
            url: string;
            fileType: string;
        },
        primaryColor: string;
        secondColor: string;
        primaryFontColor: string;
        secondFontColor: string;
    },
    createData: string;
    completeDate: string;
    unit: {
        dueDate: null,
        billingDate: string | null;
        name: string;
        fantasyName: string;
        cnpj: string;
        phone: string;
        cnaCode: string;
        stateRegistration: string;
        municipalRegistration: string;
        responsiblePerson: string;
        startDate: string;
    };
    client: string | null;
    expert: {
        id: number;
        firstName: string;
        lastName: string;
        cpf: string;
        signature: string;
    };
    analyst: null;
    groups: Array<GroupsTypes>;
    approvalStatus: {
        id: number;
        name: string;
        color: string;
        approvalStatusPurpose: string;
    }
}