import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="footer py-7 ">
      <Container>
        <Row>
          <Col sm={12} md={4} lg={6}>
            <div className="p-0 py-3 py-sm-0">SKYLINER</div>
          </Col>
          <Col sm={12} md={4} lg={3}>
            <ul className="p-0 py-4 py-sm-0">
              <li className="border-bottom mb-2">LINKS</li>
              <li>
                <Link href="/">
                  <a>Skyliner herunterladen</a>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <a>Entwicklerteam</a>
                </Link>
              </li>
              <li>
                <Link href="/devlog">
                  <a>Dev-Log</a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={4} lg={3}>
            <ul className="p-0 ">
              <li className="border-bottom mb-2">RECHTLICHES</li>
              <li>
                <Link href="/legal/privacy">
                  <a>Datenschutz</a>
                </Link>
              </li>
              <li>
                <Link href="/legal/impressum">
                  <a>Impressum</a>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
