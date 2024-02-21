import Image from 'next/image'

import logoCirculo from "../../../../public/assets/images/Logo_Circulo.png"
import logoTipo from "../../../../public/assets/images/Logotipo.png"

const Navbar = (props: any) => (
  <nav className="navbar navbar-expand-lg bg-white text-primary">
    <div className="container-fluid text-bg-white">
      <a className="navbar-brand" href="/">
        <Image src={logoTipo} alt="logo" width={200} height={40} className="d-inline-block px-2 align-self-center" />
      </a>
      <a className="navbar-brand" href="/">
        <Image src={logoCirculo} alt="logo" width={60} height={40} className="d-inline-block px-2 align-self-center" />
      </a>
    </div>
  </nav>
)

export { Navbar }