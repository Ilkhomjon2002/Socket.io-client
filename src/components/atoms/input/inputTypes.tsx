import { ChangeEventHandler, ReactNode } from "react";

export interface inputProps{
    onChange:ChangeEventHandler<HTMLInputElement>,
    type: "text" | "password",
    minLength?:number,
    name:string,
    id:string,
    value:string,
    inputType:"textarea" | "input",
    button?: ReactNode,
    placeholder? :string,
    boxShadow?:string,
}