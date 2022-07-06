import { Carousel, Container } from "react-bootstrap";

export default function Media({ className }) {
  return (
    <section className={`media ${className}`}>
      <Container className="py-6 py-md-12">
        <h2 className="text-center mb-6">Media</h2>
        <Carousel className="h-250">
          <Carousel.Item>
            <div className="d-flex justify-content-center h-250 w-100">
              <img src="/images/media/galaxy.jpg" height="100%" width="100%" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center h-250 w-100">
              <img src="/images/media/2.jpg" height="100%" width="100%" />
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
}
