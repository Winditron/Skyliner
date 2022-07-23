import { Form } from "react-bootstrap";

export default function TitleInput({
  defaultValue,
  register,
  required,
  error,
}) {
  return (
    <Form.Group className="mb-3" controlId="title">
      <Form.Label>Titel:</Form.Label>
      <Form.Control
        type="text"
        defaultValue={defaultValue}
        {...register("title", { required })}
        isInvalid={error}
      />

      <Form.Control.Feedback type="invalid">
        {error?.message}
      </Form.Control.Feedback>
    </Form.Group>
  );
}
