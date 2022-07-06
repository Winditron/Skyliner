import { Container, Card, Badge, Form } from "react-bootstrap";

export default function Timeline({ className }) {
  return (
    <section className={`devlog-timeline ${className} p-7`}>
      <Container>
        <h1 className="py-5">Entwicklerbuch</h1>
        {/* <Form.Select
          aria-label="Default select example"
          className="w-255 "
        >
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select> */}
        <div className="timeline">
          <div className="timeline-item">
            <div class="timeline-line">
              <div className="line"></div>
            </div>
            <div className="timeline-item-content">
              <h4 className="px-4">21.2.2022</h4>
              <Card className=" p-0">
                <Card.Body className="p-0">
                  <Card.Header className="d-flex justify-content-between align-items-center">
                    <h3>Mechaniken</h3>
                    <div>
                      <Badge pill bg="purple">
                        Web Design
                      </Badge>
                    </div>
                  </Card.Header>
                  <Card.Text className="p-5 mw-600p mx-auto">
                    Begonnen hat die Sliding Mechanik mit der Suche einer
                    passenden Animation auf Mixamo (https://www.mixamo.com/#/).
                    Daraufhin wurde diese durch ein Programm (Mixamo Converter –
                    Terriblis Studio: https://terribilisstudio.fr/?section=MC)
                    auf das Skelett des Unreal Engine 4 Charakters gebaked.
                    Durch dieses Baken konnte die Sliding Animation ohne
                    Probleme im Projekt verwendet werden.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
