import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    btnType?: "button" | "submit";
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
}

export interface CustomManufacturerProps {
    manufacturer: string;
    setManufacturer: React.Dispatch<React.SetStateAction<string>>;
}

export interface CustomFilterProps {
    title: string;
}