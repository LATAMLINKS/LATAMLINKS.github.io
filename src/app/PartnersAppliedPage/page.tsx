import React from "react";
import styles from "@/assets/css/home/styles.module.css";

export default function PartnersAppliedPage() {
  return (
    <div className={styles.simpleBg}>
      <section className=" py-4 py-md-0 vh-100 d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12  text-center">
              <div className="fs-1 fw-bold ms-4">
                <br></br>
                <span className="text-primary">
                  Your application has been submitted
                </span>{" "}
                <span className="text-secondary">!</span>
              </div>
              <div className="fs-5 ms-4 text-center">
                We're looking forward to work
                <br />
                with your company!
                <br />
                <a
                  href="/"
                  className="btn btn-primary bg-primary text-white fs-6 fw-bold ms-3 mt-4 text-center border-white"
                  type="button"
                >
                  Back to Homepage <br></br>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
