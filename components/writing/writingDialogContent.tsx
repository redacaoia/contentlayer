import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import { Mdx } from "@/components/mdx-components";
import { DialogContent, DialogDescription, DialogTitle } from "../ui/dialog";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function WritingDialogContent({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    return (
      <DialogContent className="py-6 prose dark:prose-invert">
        <DialogTitle className="mb-2">tema não encontrato</DialogTitle>
      </DialogContent>
    );
  }

  return (
    <DialogContent className="py-6 prose dark:prose-invert">
      <DialogTitle className="mb-2">{post.title}</DialogTitle>
      {post.description && (
        <DialogDescription className="text-xl mt-0 text-slate-700 dark:text-slate-200">
          {post.description}
        </DialogDescription>
      )}
      <hr className="my-4" />
      <Mdx code={post.body.code} />
    </DialogContent>
  );
}
