import { Card } from "react-bootstrap";
import Aos from "aos";
import { useEffect } from "react";

export default function MechanicCard({ title, titleAs, children, className }) {
  //
  // For AOS Animation
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Card
      className={`w-255 h-255 ${className}`}
      data-aos="zoom-in"
      data-aos-duration="750"
    >
      <Card.Body className="d-flex align-items-center justify-content-center flex-column">
        <Card.Title className="text-center pb-4" as={titleAs}>
          {title}
        </Card.Title>
        <Card.Text className="text-center">{children}</Card.Text>
      </Card.Body>
    </Card>
  );
}
