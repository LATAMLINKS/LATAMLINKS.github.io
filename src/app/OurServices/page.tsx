"use client";
import React from "react";

import styles from "@/assets/css/home/styles.module.css";
import { useState } from "react";

export default function OurServices() {
  const [value, setValue] = useState<string | null>(null);

  function handleSelectionClick() {
    if (value === "1") {
      setValue(null);
    } else if (value === null) {
      setValue("1");
    }
    console.log(value);
  }

  function handleSelectionClick2() {
    if (value === "2") {
      setValue(null);
    } else if (value === null) {
      setValue("2");
    }
    console.log(value);
  }

  function handleSelectionClick3() {
    if (value === "3") {
      setValue(null);
    } else if (value === null) {
      setValue("3");
    }
    console.log(value);
  }
  return (
    <div>
      <section className="bg-third py-4 py-md-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-20">
              <p className="fs-1 fw-bold text-center">
                <br></br>
                <span className="text-primary">Our services</span>
              </p>
              <p className="fs-6 fw-bold text-center">
                We offer a comprehensive range of solutions <br></br> tailored
                to the unique attributes and distinct requirements of your
                organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <br></br>
      <br></br>

      <div className="col-6">
        <button
          className={
            value === "1"
              ? "btn btn-white bg-primary text-white fs-5 w-75 ms-2 text-center border-white"
              : "btn btn-white bg-white text-primary fs-5 w-75 ms-2 text-center border-primary"
          }
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse-1"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
          onClick={handleSelectionClick}
        >
          <br></br>
          <span className="fw-bold">Service 1:</span> For Companies with
          specific needs
          <span className="fs-1">
            {value === "1" ? (
              <p className="text-white">&#11015;</p>
            ) : (
              <p className="text-primary">&#11013;</p>
            )}
          </span>{" "}
        </button>
        <div className="row">
          <div className="collapse" id="collapse-1">
            <div
              className={
                "card card-body bg-white text-primary text-center fs-6 " +
                styles.cardTimeline
              }
            >
              This service is particularly well-suited for companies seeking
              specific contacts within a particular area of interest.<br></br>
              <br></br>
              For example, suppose you're exploring the possibility of
              manufacturing a component of your product in Mexico and have
              inquiries about potential tax implications.
            </div>
          </div>
          <div className="col g-20 collapse" id="collapse-1">
            <div
              className={
                "card card-body bg-white text-primary text-center fs-6 " +
                styles.cardTimeline
              }
            >
              In such scenario, we will offer you a range of options by
              providing contact information for tax lawyers who best match your
              company's characteristics.
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>

      <div className="col-6">
        <button
          className={
            value === "2"
              ? "btn btn-white bg-primary text-white fs-5 w-75 ms-2 text-center"
              : "btn btn-white bg-white text-primary fs-5 w-75 ms-2 text-center border-primary"
          }
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse-2"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
          onClick={handleSelectionClick2}
        >
          <br></br>
          <span className="fw-bold">Service 2:</span> For Companies with a
          diverse range of needs <br></br>
          <span className="fs-1">
            {value === "2" ? (
              <p className="text-white">&#11015;</p>
            ) : (
              <p className="text-primary">&#11013;</p>
            )}
          </span>{" "}
        </button>
        <div className="row">
          <div className=" col collapse" id="collapse-2">
            <div
              className={
                "card card-body bg-white text-primary text-center fs-6 " +
                styles.cardTimeline
              }
            >
              This Service is ideal for companies looking to execute projects
              that require multiple key contacts.<br></br>
              <br></br>
              For instance, if you are considering relocating your supply chain
              to Mexico.
            </div>
          </div>
          <div className="col g-20 collapse" id="collapse-2">
            <div
              className={
                "card card-body bg-white text-primary text-center fs-6 " +
                styles.cardTimeline
              }
            >
              We can customize a plan for your company that will facilitate your
              journey outlining specific steps and providing you with an optimal
              set of contacts.
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>

      <div className="col-6">
        <button
          className={
            value === "3"
              ? "btn btn-white bg-primary text-white fs-5 w-75 ms-2 text-center"
              : "btn btn-white bg-white text-primary fs-5 w-75 ms-2 text-center border-primary"
          }
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse-3"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
          onClick={handleSelectionClick3}
        >
          <br></br>
          <span className="fw-bold">Service 3:</span> For companies that require
          convenience
          <span className="fs-1">
            {value === "3" ? (
              <p className="text-white">&#11015;</p>
            ) : (
              <p className="text-primary">&#11013;</p>
            )}
          </span>{" "}
        </button>
        <div className="row">
          <div className="col collapse" id="collapse-3">
            <div
              className={
                "card card-body bg-white text-primary text-center fs-6 " +
                styles.cardTimeline
              }
            >
              This service is designed for companies that prefer the convenience
              of an intermediary.<br></br>
              <br></br>
              For example, If you´re considering the possibility of shifting
              your supply chain to Mexico and require assistance when
              communicating with suppliers, service providers, coordinating
              meetings and step-by-step guidance, this is the service that your
              company should choose.
            </div>
          </div>
          <div className="col g-20 collapse" id="collapse-3">
            <div
              className={
                "card card-body bg-white text-primary text-center fs-6 " +
                styles.cardTimeline
              }
            >
              We will provide you with a comprehensive plan that includes the
              necessary steps and contacts needed to achieve your objectives,
              with the added benefit of our active involvement in every stage of
              the process
            </div>
          </div>
        </div>
      </div>
      <div className="row bg-fifth mt-4 p-4">
        <div className="col-12 col-md-4 text-white fs-3 fw-bold">
          Inquiries<span className="text-secondary">?</span>
        </div>
        <div className="col-12 col-md-5">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="Your name"
              aria-label="Enter your name"
              aria-describedby="basic-addon2"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="Email Address"
              aria-label="Enter your email address"
              aria-describedby="basic-addon2"
            />
          </div>
          <div className="input-group mb-3">
            <textarea
              className="form-control rounded-pill"
              placeholder="Please, don't hesitate to ask us any questions on our services"
              aria-label="Enter your email address"
              aria-describedby="basic-addon2"
            />
          </div>
          <div className="col-6 offset-4">
            <a
              href="PartnersAppliedPage"
              className="btn btn-secondary bg-secondary text-white fs-6 ms-3 mt-4 text-center"
              type="button"
            >
              Send message <br></br>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
