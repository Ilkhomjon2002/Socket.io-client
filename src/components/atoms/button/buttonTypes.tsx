import { MouseEventHandler, ReactNode } from "react";

export interface buttonProps{
    onClick:MouseEventHandler<HTMLButtonElement>,
    type: "Primary" | "Secondary",
    children: ReactNode
}