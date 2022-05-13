import React, {InputHTMLAttributes} from "react";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    value: string | number;
    label?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
