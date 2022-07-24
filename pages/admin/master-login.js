import { Card, Form, Button } from "react-bootstrap";
import { LoginIcon } from "@heroicons/react/outline";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn, getSession } from "next-auth/react";

export default function masterLogin({ csrfToken }) {
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
    data["csrfToken"] = csrfToken;
    data["callbackUrl"] = "/admin/article";
    signIn("credentials", data);
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-2-dark-blue">
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
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/admin/article",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
