import Image from 'next/image'

import logoTipo from "../../../../public/assets/images/Logotipo.png"
import linkedInLogo from "../../../../public/assets/images/Socials/linkedin_1.svg"

const Footer = (props: any) => {
  return (
    <footer className="container">
      <div className="row">
        <div className="col-lg-3 mb-3">
          <a className="navbar-brand" href="/">
            <Image src={logoTipo} alt="logo" width={220} height={50} className="d-inline-block px-2 align-self-center" />
          </a>
        </div>
        <div className="col-lg-3">
          <span className="fs-3 text-secondary">Resources</span>
        </div>
        <div className="col-lg-3">
          <span className="fs-3 text-secondary">Legal</span>
        </div>
        <div className="col-lg-3 d-flex align-items-end">
          <a className="navbar-brand" href="/">
            <Image src={linkedInLogo} alt="logo" width={30} height={30} className="d-inline-block" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export { Footer }