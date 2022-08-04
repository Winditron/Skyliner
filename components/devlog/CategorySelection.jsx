import { Button } from "react-bootstrap";

export default function CategorySelection({ onFilter }) {
  const categories = {
    "Web Design": { value: "Web Design", class: "web" },
    "Game Programming": { value: "Game Programming", class: "programming" },
    "Game Design": { value: "Game Design", class: "art" },
    Audio: { value: "Audio", class: "audio" },
    Alle: { value: "", class: "success" },
  };

  const handleOnClick = (e) => {
    const button = e.target;
    const buttons = button.parentNode.querySelectorAll("button");
    buttons.forEach((button) => button.removeAttribute("disabled"));
    button.setAttribute("disabled", "");

    onFilter(button.value);
  };

  const categoryButtons = Object.keys(categories).map((category) => {
    return (
      <Button
        variant={categories[category].class}
        className=" rounded-pill mx-2"
        onClick={(event) => handleOnClick(event)}
        value={categories[category].value}
      >
        {category}
      </Button>
    );
  });

  return (
    <div className="p-2 d-flex flex-row-reverse w-100">{categoryButtons}</div>
  );
}
