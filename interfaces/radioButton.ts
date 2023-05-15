import { ChangeEventHandler } from "react";

export interface RadioButton {
    name: string | undefined;
    label: string;
    value: string;
    onChange: ChangeEventHandler;
}