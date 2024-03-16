import type { ReactNode } from "react";
import {  DialogTrigger } from "../ui/dialog";

interface Props {
  children: ReactNode;
}

export function WritingDialogTrigger({ children }: Props) {
  return <DialogTrigger>{children}</DialogTrigger>;
}
