import { allPosts } from "@/.contentlayer/generated";
import { allPages } from "contentlayer/generated";

import { Tema } from "@/components/tema";
import Link from "next/link";


export default async function Home() {
  //const page = await getPageFromParams(params)

  return (
    <div className="prose dark:prose-invert">
      <div className="flex  flex-col gap-8">
      <Tema allPosts={allPosts} />
      </div>

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
