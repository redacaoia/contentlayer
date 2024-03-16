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

type Props = {
  content: Post;
};

async function getPageFromParams(slug: string) {
  const page = allPages.find((page) => page.slugAsParams === slug);

  if (!page) {
    null;
  }

  return page;
}
export async function Tema({ content }: Props) {
  
  const page = await getPageFromParams(content.slug);

  return (
    <Dialog>
      <DialogTrigger>
        {content.title}
        {/*  {content.description} */}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{content.title}</DialogTitle>
          <DialogDescription>
            <Mdx code={page.body.code} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
