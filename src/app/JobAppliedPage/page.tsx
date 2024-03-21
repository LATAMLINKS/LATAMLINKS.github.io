import React from "react";

export default function JobAppliedPage() {
  return (
    <div className="bg-gradient-primary">
      <section className="bg-third py-4 py-md-0 vh-100 d-flex align-items-center">
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
                Thank you for submitting your application to be a Student Intern
                at LatAmLinks! <br />
                We've received your application and are eager to review it.{" "}
                <br />
                Stay tuned for our response.
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
