import { Container, Row, Col, Nav } from "react-bootstrap";
import Aos from "aos";
import { useEffect } from "react";

export default function DevLogCla({ className }) {
  //
  // For AOS Animation
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className={`dev-log ${className}`}>
      <Container className="py-6 py-md-12">
        <Row>
          <Col
            sm={12}
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div data-aos="zoom-out" data-aos-duration="2000">
              <img src="/images/book.svg" alt="Buch mit Werkzeug" />
            </div>
          </Col>
          <Col
            sm={12}
            md={6}
            className="d-flex justify-content-center align-items-center  px-4  pt-4 pt-md-0"
          >
            <div className="mw-md-320">
              <h2 data-aos="fade-down" data-aos-duration="2000">
                Tagebuch
              </h2>
              {/* [Bug] Div mit overflow wegen der data aos animation, diese verrutscht beim
              abspielen der Animation das Layout */}
              <div className="overflow-hidden">
                <p
                  className="text-justify"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est
                </p>
                <Nav.Link href="/Dev" className="p-0">
                  <span
                    className="btn btn-outline-yellow"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                  >
                    ZUM Tagebuch
                  </span>
                </Nav.Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
