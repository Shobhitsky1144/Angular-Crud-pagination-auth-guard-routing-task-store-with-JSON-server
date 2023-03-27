export interface todo{
   id?:any | null ,
    fullName?:string | null,
 weight?:string | null,
height?:string | null,
type?:string | null
}

export interface login{
    email?:string | null,
    password?:string | null;
}

export interface taskList{
    name?:string | null;
    desc?:string | null;
}