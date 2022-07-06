import Link from "next/link";
import { Container } from "react-bootstrap";

export default function HeroSection({ className }) {
  return (
    <section className={`hero-section ${className}`}>
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <div className="w-100">
          <h1 className="text-center">SKYLINER</h1>
          <h5 className="text-center">
            Bewege dich schnell mit Parkour-Mechanics durch atemberaubende
            Levels!
          </h5>
          <div className="text-center">
            <Link href="/">
              <a className="btn btn-outline-yellow">Jetzt Herunterladen</a>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
