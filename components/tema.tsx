"use client";
import { Post } from "@/.contentlayer/generated";
import { Dialog } from "@/components/ui/dialog";

import { Writing } from "./writing";
import { useEffect, useState } from "react";
import { buttonsWritingThemes } from "./writingThemes ";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

type Props = {
  allPosts: Post[];
};

export function filterWritingThemes(pokeType: string, allPosts: Post[]) {
  let filtredWritingThemes = allPosts.filter((type) =>
    type.title.toLowerCase().includes(pokeType.toLowerCase())
  );
  return filtredWritingThemes;
}

export function Tema({ allPosts }: Props) {
  const [filtredWritingThemes, setFiltredWritingThemes] = useState<Post[]>([]);

  useEffect(() => {
    setFiltredWritingThemes(allPosts);
  }, []);

  function handleWritingThemes(e) {
    let typeWritingThemes = 'dynamic';
    typeWritingThemes !== "all"
      ? setFiltredWritingThemes(
          filterWritingThemes(typeWritingThemes, allPosts)
        )
      : setFiltredWritingThemes(allPosts);
  }
  return (
    <section>
      <ToggleGroup type="single">
        {buttonsWritingThemes &&
          buttonsWritingThemes.map((type, index) => (
            <>
              <ToggleGroupItem
                aria-label="Toggle bold"
                key={index}
                value={type.value}
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                onClick={handleWritingThemes}
              >
                {type.name}
              </ToggleGroupItem>
            </>
          ))}
      </ToggleGroup>

      {filtredWritingThemes &&
        filtredWritingThemes.map((content) => (
          <Dialog key={content._id}>
            <Writing.DialogTrigger>
              <Writing.Root>
                {/*   <Writing.Image imageUrl="https://github.com/walysonMoura.png" /> */}
                <div className="flex flex-col items-start justify-between gap-2 sm:gap-4">
                  <Writing.Content title={content.title} />
                </div>
              </Writing.Root>
            </Writing.DialogTrigger>

            <Writing.DialogContent slug={content.slugAsParams} />
          </Dialog>
        ))}
    </section>
  );
}
