import { ChangeEventHandler } from "react";

export interface SelectInterface {
  name: string;
  value: number | string | object;
  onChange: ChangeEventHandler;
  options?: Array<string>;
}
