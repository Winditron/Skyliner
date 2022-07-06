import Container from "./SubjectContainer";
import WorkerCard from "../WorkerCard";
import { Col, Row } from "react-bootstrap";

export default function WebDesign({ className }) {
  return (
    <Container title="Web Design" className={`${className}`}>
      <Row>
        <Col sm={12}>
          <WorkerCard
            name="Max Mustermann"
            email="max.mustermann@email.at"
            className="mx-auto"
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </WorkerCard>
        </Col>
      </Row>
    </Container>
  );
}
