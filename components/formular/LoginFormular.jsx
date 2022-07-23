import { Card, Form, Button } from "react-bootstrap";
import { LoginIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function LoginFormular() {
  const validationSchema = yup
    .object({
      user: yup.string().trim().required(),
      password: yup.string().trim().required(),
    })
    .required();

  const { handleSubmit, register } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Card className="w-320">
      <Card.Title className="text-center pt-3">
        <LoginIcon className="h-40 d-block mx-auto" />
        Login
      </Card.Title>
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Benutzername:</Form.Label>
            <Form.Control
              type="user"
              placeholder="Enter Username"
              {...register("user")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Passwort:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password")}
            />
          </Form.Group>
          <Button type="submit" variant="purple">
            Sign in
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
