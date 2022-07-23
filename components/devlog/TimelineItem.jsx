import { Card, Badge } from "react-bootstrap";
import htmlParse from "html-react-parser";

export default function TimelineItem({ children, title, date, category }) {
  return (
    <div className="timeline-item">
      <div class="timeline-line">
        <div className="line"></div>
      </div>
      <div className="timeline-item-content">
        <h4 className="px-4">{date}</h4>
        <Card className="p-0 ">
          <Card.Body className="p-0">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <h3>{title}</h3>
              <div>
                <Badge pill bg="purple">
                  {category}
                </Badge>
              </div>
            </Card.Header>
            <Card.Text className="p-5 mx-auto mw-600p">
              {htmlParse(children)}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
