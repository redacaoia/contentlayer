import { FaRegHeart } from "react-icons/fa";

interface Pros {
  category: string;
}

export function WritingCategory({ category }: Pros) {
  return <h6>{category}</h6>;
}
