import Container from "./SubjectContainer";
import WorkerCard from "../WorkerCard";
import { Col, Row } from "react-bootstrap";

export default function GameDesign({ className }) {
  return (
    <Container title="Game Design" className={`${className}`}>
      <Row>
        <Col xs={12} sm={6} lg={4} className="pb-5">
          <WorkerCard
            name="Max Mustermann"
            email="max.mustermann@email.at"
            className="mx-auto"
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </WorkerCard>
        </Col>
        <Col xs={12} sm={6} lg={4} className="pb-5">
          <WorkerCard
            name="Max Mustermann"
            email="max.mustermann@email.at"
            className="mx-auto"
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </WorkerCard>
        </Col>
        <Col xs={12} sm={12} lg={4}>
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
