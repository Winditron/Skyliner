import { Container } from "react-bootstrap";

export default function Subject({ title, children, className }) {
  return (
    <section className={`section-subject ${className}`}>
      <Container>
        <h2 className="text-center text-md-start">{title}</h2>
        <div className="pt-6">{children}</div>
      </Container>
    </section>
  );
}
