import { MouseEventHandler } from "react";

export interface formProps{
    onSubmit:MouseEventHandler<HTMLButtonElement>,
    message:string,
    setMessage:Function

}