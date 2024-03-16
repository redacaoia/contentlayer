"use client";
import { Page, Post, allPages } from "@/.contentlayer/generated";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mdx } from "./mdx-components";
import { Writing } from "./writing";

type Props = {
  content: Post;
};

export function Tema({ content }: Props) {
  return (
    <Dialog>
      <Writing.DialogTrigger>
        <Writing.Root>
          
          <div>
            <Writing.Content title={content.title} />
          </div>
        </Writing.Root>
      </Writing.DialogTrigger>

      <Writing.DialogContent slug={content.slugAsParams} />
    </Dialog>
  );
}
