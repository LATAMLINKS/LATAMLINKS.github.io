import React from "react";
import styles from "@/assets/css/home/styles.module.css";

export default function JobListing() {
  return (
    <div>
      <section className="bg-third py-4 py-md-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-7">
              <p className="fs-1 fw-bold">
                <br></br>
                <span className="text-black">
                  Careers with <br></br>
                </span>
                <span className="text-primary">LatAmLinks</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="col-12">
        <div className="container bg-white rounded">
          <div className="row">
            <div className="col-12 col-md-8 offset-md-2"></div>
            <br></br>
            <a className="fs-6 text-primary" href="Careers">
              &larr; All Jobs
            </a>{" "}
            <br></br>
            <div className="fs-4">
              <br></br>
              <span className="fw-bold">Student internship</span>
              <p className="fs-6">
                CDMX, Mexico - Full Time - Internship <br></br>
              </p>
            </div>
            <span className="text-primary fw-bold fs-6">Role Overview:</span>
            <br></br>
            As a Student Intern at LatAmLinks, you will be involved in a dynamic
            environment focused on simplifying business development for
            companies expanding to Mexico and Latin America. This role provides
            an excellent opportunity to get hands-on experience in various
            aspects of international business, from market analysis to client
            relationship management. You'll be part of a team dedicated to
            provide strategic support and solutions to businesses venturing into
            these vibrant markets.<br></br>
            <span className="text-black fw-bold fs-6">
              <br></br>Key Responsibilities:
            </span>
            <br></br>
            <ul className={styles.ul}>
              <li>
                Assist in market research and analysis to identify business
                opportunities.
              </li>
              <li>
                Support development and deployment of business strategies.
              </li>
              <li>
                Help with coordination and management in communication with
                clients and partners.
              </li>
              <li>
                Participate in the planning and execution of business
                development initiatives.
              </li>
              <li>
                Assist in the creation of presentation materials and reports.
              </li>
              <li>
                Engage in administrative tasks to support the team as needed.
              </li>
            </ul>
            <span className="text-black fw-bold fs-6">
              <br></br>Requirements:
            </span>
            <br></br>
            <ul className={styles.ul}>
              <li>
                A strong interest in business development and international
                markets.
              </li>
              <li>
                Basic understanding of business principles; prior experience is
                a plus, but not necessary.
              </li>
              <li>Analytical and problem-solving skills.</li>
              <li>Excellent communication and interpersonal skills.</li>
              <li>Ability to work independently and as part of a team.</li>
            </ul>
            <span className="text-black fw-bold fs-6">
              <br></br>Learning opportunities
            </span>
            <br></br>
            <ul className={styles.ul}>
              <li>
                Acquire real-world experience in international business
                development.
              </li>
              <li>
                Develop a deep understanding of the business landscape in Latin
                America and Mexico.
              </li>
              <li>Network with professionals and experts in the field.</li>
              <li>
                Enhance communication, research, and analytical skills in a
                professional setting.
              </li>
            </ul>
            <div className="row">
              <span className="text-primary fw-bold fs-5">
                <br></br>First Name:
              </span>
              <div className="col-6">
                <div className="input-group flex-nowrap">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your first name"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  ></input>
                </div>
              </div>
              <span className="text-primary fw-bold fs-5">
                <br></br>Last Name:
              </span>
              <div className="col-6">
                <div className="input-group flex-nowrap">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your last name"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  ></input>
                </div>
              </div>
              <span className="text-primary fw-bold fs-5">
                <br></br>Email:
              </span>
              <div className="col-6">
                <div className="input-group flex-nowrap">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email address"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  ></input>
                </div>
              </div>
              <span className="text-primary fw-bold fs-5">
                <br></br>Phone:
              </span>
              <div className="col-6">
                <div className="input-group flex-nowrap">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your phone number"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  ></input>
                </div>
              </div>
              <br></br>
              <a className="fs-6 text-secondary" href="Careers">
                Attach resume
              </a>{" "}
              <br></br>
              <span className="text-primary fw-bold fs-5">
                <br></br>Personal note:
              </span>
              <div className="col-6">
                <div className="input-group flex-nowrap">
                  <textarea
                    className="form-control"
                    placeholder="Enter your text here"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  ></textarea>
                </div>
              </div>
              <div className="col-6 offset-4">
                <a
                  href="#"
                  className="btn btn-primary bg-primary text-white fs-6 fw-bold ms-3 mt-4 text-center border-white"
                  type="button"
                >
                  Submit Application <br></br>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
