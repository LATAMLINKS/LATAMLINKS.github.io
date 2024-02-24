import Image from "next/image";

import styles from "@/assets/css/home/styles.module.css"

import logoCirculo from "../../public/assets/images/Logo_Circulo.png"
import researchImage from "../../public/assets/images/HomePage/research-1.png"
import dropShipingImage from "../../public/assets/images/HomePage/drop-shipping-1.png"
import productionImage from "../../public/assets/images/HomePage/production-line-1.png"

export default function Home() {
  return (
    <main className=''>
      <section className="bg-third py-4 py-md-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-7">
              <p className="fs-1 fw-bold">
                Simplifying your path to success in Mexico and Latin America<span className="text-secondary">.</span>
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
      <section className="my-3">
        <div className="container">
          <div className="row gx-4 gy-2">
            <div className="p-3 col-12 col-md-4">
              <div className={"card bg-primary shadow-lg " + styles.card}>
                <div className="card-body">
                  <p className="card-text text-white fw-medium">
                    Seamlessly navigate the entry and expansion into new dynamic markets
                  </p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <Image src={researchImage} alt="Research image" className="w-50 h-75" />
                </div>
              </div>
            </div>
            <div className="p-3 col-12 col-md-4">
              <div className="card bg-third shadow-lg">
                <div className="card-body">
                  <p className="card-text fw-medium">
                    Our services span from facilitating small ventures, such as sourcing optimal shipping solutions
                  </p>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <Image src={dropShipingImage} alt="Drop Shiping image" className="w-50 h-75" />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 col-12 col-md-4">
              <div className="card shadow-lg h-100">
                <div className="card-body">
                  <p className="card-text fw-medium">
                    To larger ventures such as setting up manufacturing operations
                  </p>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <Image src={productionImage} alt="Production image" className="w-50 h-75" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-fourth">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <p className="fs-2 fw-bold my-4 text-white">
                Our firm is designed to <span className="text-secondary">simplify</span> business development
                for companies looking to establish a presence
                in <span className="text-secondary">Mexico</span> and <span className="text-secondary">Latin America</span>
              </p>
              <a href="" className="btn btn-primary mb-5">Learn More</a>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <ul className={styles.timeLineWithIcons}>
                  <li className={"container py-3 " + styles.timeLineItem}>
                    <div className="row">
                      <div className="col-2 text-center">
                        <div className={"pt-2 " + styles.listItemContainer}>
                          <span className="text-white fs-4 fw-semibold ">
                            1
                          </span>
                          <div className={styles.firstListItem} />
                        </div>
                      </div>
                      <div className="col-10">
                        <button
                          className="btn btn-fourth bg-fourth text-white fs-4 fw-bold w-75 ms-2"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-1"
                          aria-expanded="false"
                          aria-controls="collapseWidthExample"
                        >
                          Tailor Made
                        </button>
                        <div className="collapse" id="collapse-1">
                          <div
                            className={"card card-body bg-transparent text-white fs-6 " + styles.cardTimeline}
                          >
                            We´ll recommend companies that
                            best match the characteristics
                            and needs of our clients
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className={"container py-3 " + styles.timeLineItem}>
                    <div className="row">
                      <div className="col-2 text-center">
                        <div className={"pt-2 " + styles.listItemContainer}>
                          <span className="text-white fs-4 fw-semibold text-center">
                            2
                          </span>
                          <div className={styles.mediumListItem} />
                        </div>
                      </div>
                      <div className="col-10">
                        <button
                          className="btn btn-fourth bg-fourth text-white fs-6 fw-bold w-75 ms-2"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-2"
                          aria-expanded="false"
                          aria-controls="collapseWidthExample"
                        >
                          Simplify Business development
                        </button>
                        <div className="collapse" id="collapse-2">
                          <div
                            className={"card card-body bg-transparent text-white fs-6 " + styles.cardTimeline}
                          >
                            &quot;We´ll guide you in connecting and
                            building business relationships
                            within our network&quot;
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className={"container py-3 " + styles.timeLineItem}>
                    <div className="row">
                      <div className="col-2 text-center">
                        <div className={"pt-2 " + styles.listItemContainer}>
                          <span className="text-white fs-4 fw-semibold ">
                            3
                          </span>
                          <div className={styles.lastListItem} />
                        </div>
                      </div>
                      <div className="col-10">
                        <button
                          className="btn btn-fourth bg-fourth text-white fs-6 fw-bold w-75 ms-2"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-3"
                          aria-expanded="false"
                          aria-controls="collapseWidthExample"
                        >
                          Achieve your goals
                        </button>
                        <div className="collapse" id="collapse-3">
                          <div
                            className={"card card-body bg-transparent text-white fs-6 " + styles.cardTimeline}
                          >
                            &quot;We strive for a 100%
                            success rate&quot;
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main >
  )
}
