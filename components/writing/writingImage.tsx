import Image from "next/image";

interface Props {
  imageUrl: string;
}

export function WritingImage({ imageUrl }:Props) {
  return (
    <Image
      src={imageUrl}
      className="rounded-sm"
      alt="Precedent logo"
      width={200}
      height={200}
    />
  );
}