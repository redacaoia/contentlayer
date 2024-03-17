import type { ReactNode } from "react";
import {  DialogTrigger } from "../ui/dialog";

interface Props {
  children: ReactNode;
}

export function WritingDialogTrigger({ children }: Props) {
  return <DialogTrigger className="p-0 m-0">{children}</DialogTrigger>;
}
