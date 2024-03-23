import React from "react";
import styles from "@/assets/css/home/styles.module.css";

export default function ContactUs() {
  return (
    <div className={styles.simpleBg}>
      <section className="py-4 py-md-0 vh-100 d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="fs-1 fw-bold ms-4">
                <br></br>
                <span className="text-primary">Contact our team</span>{" "}
                <span className="text-secondary">.</span>
              </div>
              <div className="fs-6 ms-4">
                Feel free to reach out with any <br></br> question, our team is
                ready to assist<br></br>you<br></br>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="container">
                <div className="row my-4">
                  {" "}
                  <div className="input-group flex-nowrap  mt-4 mb-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your name"
                      aria-label="Enter your name"
                      aria-describedby="addon-wrapping"
                    ></input>
                  </div>{" "}
                  <div className="input-group flex-nowrap my-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your email"
                      aria-label="Enter your email address"
                      aria-describedby="addon-wrapping"
                    ></input>
                  </div>
                  <div className="dropdown">
                    <button
                      className="btn btn-white bg-white dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Where did you hear from us?
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          LinkedIn
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Google search
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          LatAmLinks client
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Social media
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Other
                        </a>
                      </li>
                    </ul>
                  </div>{" "}
                  <div className="input-group flex-nowrap my-1">
                    <textarea
                      className="form-control"
                      placeholder="What brings you here today?"
                      aria-label="What brings you here today?"
                      aria-describedby="addon-wrapping"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-start">
                    <a
                      href="#"
                      className="btn btn-secondary bg-secondary text-white fs-6 fw-bold text-center border-secondary w-50 mb-3"
                      type="button"
                    >
                      Send message <br></br>
                    </a>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
