import { Container, Row, Col } from "react-bootstrap";
import Aos from "aos";
import { useEffect } from "react";

export default function Edu({ className }) {
  //
  // For AOS Animation
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className={`dev-log ${className}`}>
      <Container className="py-6 py-md-10">
        <Row>
          <Col
            sm={12}
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div data-aos="zoom-out" data-aos-duration="2000">
              <img
                src="/images/edu.svg"
                alt="Buch mit Werkzeug"
                className="opacity-75"
              />
            </div>
          </Col>
          <Col
            sm={12}
            md={6}
            className="d-flex justify-content-center align-items-center  px-4  pt-4 pt-md-0"
          >
            <div className="mw-md-320">
              <h2 data-aos="fade-down" data-aos-duration="2000">
                Studium
              </h2>
              <p
                className="text-justify"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
