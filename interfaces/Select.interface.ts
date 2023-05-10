import { ChangeEventHandler } from "react";

export interface SelectInterface {
  name: string;
  value: string;
  onChange: ChangeEventHandler;
  options?: Array<string>;
}
