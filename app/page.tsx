import { allPosts } from "@/.contentlayer/generated";
import { allPages } from "contentlayer/generated";

import { Tema } from "@/components/tema";
import Link from "next/link";

/* interface PageProps {
  params: {
    slug: string[]
  }
}
async function getPageFromParams(params: PageProps["params"]) {
  const slug = params?.slug?.join("/")
  const page = allPages.find((page) => page.slugAsParams === slug)

  if (!page) {
    null
  }

  return page
} */

export default async function Home() {
  //const page = await getPageFromParams(params)

  return (
    <div className="prose dark:prose-invert">
     

      {allPosts.map((post) => (
        <Tema  content={post} key={post._id} />
      ))}

      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  );
}
