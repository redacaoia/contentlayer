import { allPosts } from "contentlayer/generated";
import { Post } from "@/.contentlayer/generated";
import { Mdx } from "@/components/mdx-components";
import { DialogContent, DialogDescription, DialogTitle } from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";

type PostProps = Post & {
  params: {
    slug: string[];
  };
};

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
    <DialogContent className="h-[80%] w-[80%] max-w-auto py-6 prose dark:prose-invert">
      <ScrollArea>
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
