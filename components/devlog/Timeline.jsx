import { Container } from "react-bootstrap";
import TimelineItem from "./TimelineItem";

export default function Timeline({ className, articles }) {
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
          {articles?.map((article) => (
            <TimelineItem
              key={article.title}
              category={article.category}
              title={article.title}
              date={article.createdAt}
            >
              {article.content}
            </TimelineItem>
          ))}
        </div>
      </Container>
    </section>
  );
}
