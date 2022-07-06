import { Container } from "react-bootstrap";
import Link from "next/link";
import Aos from "aos";
import { useEffect } from "react";

export const DownloadCLA = ({ className }) => {
  //
  // For AOS Animation
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className={`download-cla ${className}`}>
      <Container className="py-6 py-sm-14">
        <div className="text-sm-center px-4 ">
          <h2 data-aos="fade-up" data-aos-duration="1000">
            Hast du Lust es zu probieren?
          </h2>
          <p
            className="w-50 w-sm-auto d-inline-block text-justify text-sm-center"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Lade dir das Spiel jetzt kostenlos herunter und tauche in die Welt
            von Skyliner ein.
          </p>
          <div>
            <Link href="/">
              <a
                className="btn btn-outline-yellow"
                data-aos="zoom-out-up"
                data-aos-duration="2000"
              >
                Herunterladen
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
