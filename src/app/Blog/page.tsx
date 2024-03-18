import React from "react";
import Image from "next/image";

import styles from "@/assets/css/home/styles.module.css";
import StockPhotoBlog from "@/assets/images/Stock_Photo_Blog.png";

export default function Blog() {
  return (
    <>
      <section className="bg-third py-4 py-md-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6">
              <p className="fs-1 fw-bold ">
                Explore global market trends and uncover how your business can
                leverage them to its advantage
                <span className="text-secondary ">.</span> <br></br>
              </p>
            </div>
          </div>
        </div>
      </section>
      <br></br>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="card ">
                    <Image
                      src={StockPhotoBlog}
                      alt="Stock photo"
                      className="card-img-top"
                      width={100}
                      height={200}
                    />{" "}
                    <div className="card-body">
                      <h5 className="card-title fw-bold">
                        Nearshoring: what it is, and how it can benefit you
                      </h5>
                      <p className="card-text">
                        January 27, 2024 <br></br> The strategic reconfiguration
                        of supply chains through nearshoring has emerged as a
                        prominent economic business trend.
                      </p>
                      <a href="BlogNearshoring" className="btn btn-primary">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card ">
                    <Image
                      src={StockPhotoBlog}
                      alt="Stock photo"
                      className="card-img-top"
                      width={100}
                      height={200}
                    />{" "}
                    <div className="card-body">
                      <h5 className="card-title fw-bold">
                        Nearshoring: what it is, and how it can benefit you
                      </h5>
                      <p className="card-text">
                        January 27, 2024 <br></br> The strategic reconfiguration
                        of supply chains through nearshoring has emerged as a
                        prominent economic business trend.
                      </p>
                      <a href="BlogNearshoring" className="btn btn-primary">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="container">
              <div className="row">
                <div className="col-md-6 offset-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title fs-4 text-primary fw-bold">
                        Stay informed about the latest market trends
                      </h5>
                      <div className="input-group flex-nowrap my-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email address"
                          aria-label="Email address"
                          aria-describedby="addon-wrapping"
                        ></input>
                      </div>

                      <a
                        href="#"
                        className="btn btn-primary bg-primary text-white fs-6 fw-bold text-center border-white"
                        type="button"
                      >
                        Subscribe <br></br>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
