import { Card } from "react-bootstrap";
import htmlParse from "html-react-parser";
import Category from "../article/Category";
import { useEffect } from "react";
import Aos from "aos";

export default function TimelineItem({ children, title, date, category }) {
  //
  // For AOS Animation
  useEffect(() => {
    Aos.init();
  }, []);
  const formatDate = (date) => new Date(date).toLocaleDateString("de-At");
  return (
    <div className="timeline-item">
      <div
        class="timeline-line"
        data-aos="fade-down-right"
        data-aos-duration="500"
      >
        <div className="line"></div>
      </div>
      <div
        className="timeline-item-content-container"
        data-aos="fade-left"
        data-aos-duration="750"
      >
        <h4 className="px-4">{formatDate(date)}</h4>
        <Card className="p-0 ">
          <Card.Body className="p-0">
            <Card.Header className="d-flex justify-content-between align-items-center ">
              <h3 className="text-truncate">{title}</h3>
              <div className="ml-1">
                <Category category={category} />
              </div>
            </Card.Header>
            <Card.Text className="p-5 mx-auto mw-600p timeline-item-content">
              {htmlParse(children)}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
