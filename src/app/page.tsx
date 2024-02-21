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
    </main>
  )
}
