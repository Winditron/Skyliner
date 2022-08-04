import { Container, Button } from "react-bootstrap";
import CategorySelection from "./CategorySelection";
import TimelineItem from "./TimelineItem";
import { useState } from "react";

export default function Timeline({ className, articles }) {
  const [category, setCategory] = useState("");

  let filteredArticles = articles;

  if (category) {
    filteredArticles = articles.filter(
      (article) => article.category === category
    );
  }

  const timelineItems = filteredArticles?.map((article) => (
    <TimelineItem
      key={article.title}
      category={article.category}
      title={article.title}
      date={article.createdAt}
    >
      {article.content}
    </TimelineItem>
  ));

  return (
    <section className={`devlog-timeline ${className} py-7`}>
      <Container>
        <h1 className="py-5">Entwicklerbuch</h1>
        <CategorySelection onFilter={setCategory} />
        <div className="timeline">{timelineItems}</div>
      </Container>
    </section>
  );
}
