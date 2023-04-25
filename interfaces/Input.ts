import { ChangeEventHandler } from "react";

export interface InputInterface {
  type: string;
  label: string;
  value: string | number;
  onChange: ChangeEventHandler;
}