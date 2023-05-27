import { ChangeEventHandler } from "react";

export interface SelectInterface {
  name: string;
  value: number | string;
  onChange: ChangeEventHandler;
  options?: Array<string>;
}
