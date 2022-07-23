import React from "react";
import { Form } from "react-bootstrap";

export default function CategorySelect(props) {
  let { defaultValue, error } = props;
  const categories = {
    Audio: "Audio",
    "Game Design": "Game Design",
    "Game Programming": "Game Programming",
    "Web Design": "Web Design",
  };
  defaultValue = "";
  return (
    <Form.Group className="mb-3" controlId="category">
      <Form.Label>Kategorie:</Form.Label>
      <Form.Control
        as="select"
        type="select"
        name="category"
        defaultValue={defaultValue}
        isInvalid={error}
        aria-label="Default select example"
        {...props}
      >
        <option disabled value="">
          -- bitte Kategorie auswählen --
        </option>
        {Object.keys(categories).map((category, index) => {
          return <option value={categories[category]}>{category}</option>;
        })}
      </Form.Control>
      <Form.Control.Feedback type="invalid">
        {error?.message}
      </Form.Control.Feedback>
    </Form.Group>
  );
}
