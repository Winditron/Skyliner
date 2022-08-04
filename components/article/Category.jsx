import { Badge } from "react-bootstrap";

export default function Category({ category }) {
  const categories = {
    Audio: "audio",
    "Game Design": "art",
    "Game Programming": "programming",
    "Web Design": "web",
  };
  return (
    <Badge pill bg={categories[category]}>
      {category}
    </Badge>
  );
}
