import { Container, Col, Row } from "react-bootstrap";
import MechanicCard from "./MechanicCard";

export default function Mechanics({ className }) {
  return (
    <section className={`mechanics ${className}`}>
      <Container className="py-6 py-md-12">
        <h2 className="text-center mb-5">parkour mechanics</h2>
        <Row>
          <Col md={6} lg={4} className="py-4 py-md-7">
            <MechanicCard title="Sprinten" className="mx-auto">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </MechanicCard>
          </Col>
          <Col md={6} lg={4} className="py-4 py-md-7">
            <MechanicCard title="Sliden" className="mx-auto">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </MechanicCard>
          </Col>
          <Col md={6} lg={4} className="py-4 py-md-7">
            <MechanicCard title="Grinding" className="mx-auto">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </MechanicCard>
          </Col>
          <Col md={6} lg={6} className="px-6 py-4 py-md-7 py-md-0 ">
            <MechanicCard
              title="Wall Running"
              className="mx-auto ml-lg-0 float-lg-end"
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </MechanicCard>
          </Col>
          <Col md={12} lg={6} className="px-6  py-4 py-md-7 py-md-0">
            <MechanicCard title="Platformen" className="mx-auto mx-lg-0 ">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </MechanicCard>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
