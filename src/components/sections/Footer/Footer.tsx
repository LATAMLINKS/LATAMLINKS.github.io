import Image from "next/image";

import logoTipo from "../../../../public/assets/images/Logotipo.png";
import linkedInLogo from "../../../../public/assets/images/Socials/linkedin_1.svg";

const Footer = (props: any) => {
  return (
    <footer className="container mt-4">
      <div className="row">
        <div className="col-lg-3 mb-3">
          <a className="navbar-brand" href="/">
            <Image
              src={logoTipo}
              alt="logo"
              width={220}
              height={50}
              className="d-inline-block px-2 align-self-center"
            />
          </a>
        </div>
        <div className="col-lg-3">
          <span className="fs-5 text-secondary">Resources</span> <br></br>
          <a
            className="fs-6 text-primary"
            style={{ textDecoration: "none" }}
            href="F.A.Q"
          >
            F.A.Q
          </a>{" "}
          <br></br>
          <a
            className="fs-6 text-primary"
            style={{ textDecoration: "none" }}
            href="Careers"
          >
            Careers
          </a>{" "}
          <br></br>
          <a
            className="fs-6 text-primary"
            style={{ textDecoration: "none" }}
            href="Partners"
          >
            Partners
          </a>{" "}
          <br></br>
        </div>

        <div className="col-lg-3">
          <span className="fs-5 text-secondary">Legal</span> <br></br>
          <a
            className="fs-6 text-primary"
            style={{ textDecoration: "none" }}
            href="PrivacyPolicy"
          >
            Privacy Policy
          </a>{" "}
          <br></br>
          <a
            className="fs-6 text-primary"
            style={{ textDecoration: "none" }}
            href="TermsOfUse"
          >
            Terms of use
          </a>{" "}
          <br></br>
          <a
            className="fs-6 text-primary"
            style={{ textDecoration: "none" }}
            href="ServiceGuideline"
          >
            Service Guidelines
          </a>
        </div>

        <div className="col-lg-3 d-flex flex-column align-items-start text-primary">
          <a className="navbar-brand" href="/">
            <Image
              src={linkedInLogo}
              alt="logo"
              width={30}
              height={30}
              className="d-inline-block"
            />
          </a>
          <span className="fs-6">Inquiries?</span>
          <span className="fs-6">Inquiries@LatAmLinks.com</span> <br></br>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
