import Image from "next/image";

import styles from "@/assets/css/home/styles.module.css"

import logoCirculo from "../../public/assets/images/Logo_Circulo.png"

export default function Home() {
  return (
    <main className=''>
      <section className="bg-third py-4 py-md-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-7">
              <p className="fs-1 fw-bold">
                Simplifying your path to success in Mexico and Latin America.
              </p>
              <p className="fs-5 fw-medium">
                If you’re currently considering developing your business in Mexico and Latin America we can help you save time and money by facilitating the process
              </p>
              <div className="row">
                <div className="col-12">
                  <button type="button" className="btn btn-light bg-white text-primary shadow-lg rounded">
                    Start Here
                  </button>
                </div>
              </div>
            </div>
            <div className="d-none d-md-block col-12 col-md-5">
              <div className={styles.imageContainer}>
                <Image src={logoCirculo} alt="logo" className={styles.mainBannerImage} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.parallax}>
        <div className="h-100 d-flex flex-column justify-content-center align-items-center">
          <p className="fs-4 fw-semibold text-white text-center w-75"> Whether you&apos;re pursuing significant ventures or simply need
            a company&apos;s contact, <span className="text-secondary">LatAmLinks</span> is ready to help you</p>
          <br />
          <button className="btn btn-primary mx-auto text-white">
            Learn More
          </button>
        </div>
      </section>
      <section className={"bg-primary " + styles.colorBanner}>
        <div className="h-100 d-flex flex-column justify-content-center align-items-center">
          <p className="fs-4 fw-semibold text-white text-center w-50">
            We have a unique network to support you in your business development journey
          </p>
        </div>
      </section>
      <section className="mt-3">
        <div className="container">
          <div className="row gx-4 gy-2">
            <div className="p-3 col-12 col-md-4">
              <div className={"card bg-primary shadow-lg " + styles.card}>
                <div className="card-body">
                  <p className="card-text text-white">
                    Seamlessly navigate the entry and expansion into new dynamic markets
                  </p>
                </div>
              </div>
            </div>
            <div className="p-3 col-12 col-md-4">
              <div className="card bg-third shadow-lg">
                <div className="card-body">
                  <p className="card-text">
                    Our services span from facilitating small ventures, such as sourcing optimal shipping solutions
                  </p>
                </div>
              </div>
            </div>
            <div className="p-3 col-12 col-md-4">
              <div className="card shadow-lg">
                <div className="card-body">
                  <p className="card-text">
                    To larger ventures such as setting up manufacturing operations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main >
  )
}
