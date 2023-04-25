import { ChangeEventHandler } from "react";

export interface RadioButton {
    label: string;
    value: string;
    onChange: ChangeEventHandler,
}