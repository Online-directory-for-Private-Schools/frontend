import { ChangeEventHandler } from "react";

export interface InputInterface {
  type: string;
  label: string;
  value: string;
  onChange: ChangeEventHandler;
}