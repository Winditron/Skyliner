import { useSession, signOut } from "next-auth/react";
import { Nav, Navbar, Container, Offcanvas } from "react-bootstrap";

export default function Navigation() {
  const { data: session } = useSession();
  return (
    <Navbar expand="lg" variant="dark" bg="purple" fixed="top">
      <Container>
        <Navbar.Brand href="/">Skyliner</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
          variant="dark"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              Navigation
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className=" flex-grow-1 pe-3 text-center h-50 justify-content-around justify-content-lg-end">
              <Nav.Link href="/team">Team</Nav.Link>
              <Nav.Link href="/devlog">Dev-Log</Nav.Link>
              {session && <Nav.Link href="/admin/article">Artikel</Nav.Link>}
              {session && <Nav.Link onClick={() => signOut()}>Logout</Nav.Link>}
              <Nav.Link href="#pricing">
                <span className="btn btn-outline-yellow p-2 d-inline">
                  PLAY NOW
                </span>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
