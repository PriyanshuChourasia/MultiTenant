

export enum Gender{
    male = "male",
    fem = "female",
    oth = "others"
}


export interface IUserSchemaInterface{
    name:string;
    email: string;
    password: string;
    phoneNumber: string;
    address: string;
    gender: Gender
}