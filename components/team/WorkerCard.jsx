import { Card } from "react-bootstrap";
import { UserIcon } from "@heroicons/react/solid";
import Aos from "aos";
import { useEffect } from "react";

export default function WorkerCard({ name, email, children, className }) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Card
      className={` worker-card w-255 ${className} `}
      data-aos="zoom-in"
      data-aos-duration="750"
    >
      <Card.Title className="text-center" as="h4">
        <UserIcon className="h-50p my-3 d-block mx-auto text-dark-blue icon" />
        {name}
      </Card.Title>
      <Card.Body>
        <p className="text-center">{children}</p>
        <small className="text-center d-block">{email}</small>
      </Card.Body>
    </Card>
  );
}
