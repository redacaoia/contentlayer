import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { Page, Post, allPages } from "@/.contentlayer/generated";
import { Mdx } from "@/components/mdx-components";
import { DialogContent, DialogDescription, DialogTitle } from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";

type PostProps = Post & {
  params: {
    slug: string[];
  };
};

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    <div></div>;
  }

  return post;
}

export default function WritingDialogContent({ slug }: any) {
  const page = allPosts.find((post) => post.slugAsParams === slug);
  if (!page) {
    return (
      <DialogContent className="py-6 prose dark:prose-invert">
        <DialogTitle className="mb-2">tema não encontrato</DialogTitle>
      </DialogContent>
    );
  }

  return (
    <DialogContent className=" py-6 prose dark:prose-invert">
      <ScrollArea className="h-[90%]">
        <DialogTitle className="mb-2">{page.title}</DialogTitle>
        {page.description && (
          <DialogDescription className="text-xl mt-0 text-slate-700 dark:text-slate-200">
            {page.description}
          </DialogDescription>
        )}
        <hr className="my-4" />

        <Mdx code={page.body.code} />
      </ScrollArea>
    </DialogContent>
  );
}
