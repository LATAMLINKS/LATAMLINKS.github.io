"use client";
import React from "react";
import Image from "next/image";
import styles from "@/assets/css/home/styles.module.css";
import logoCirculo from "@/assets/images/Logo_Circulo.png";
import { useState } from "react";

export default function FAQ2() {
  const [value, setValue] = useState<string | null>(null);
  function handleSelectionClick() {
    if (value === "1") {
      setValue(null);
    } else if (value === null) {
      setValue("1");
    }
    console.log(value);
  }
  function handleSelectionClick1() {
    if (value === "2") {
      setValue(null);
    } else if (value === null) {
      setValue("2");
    }
    console.log(value);
  }
  function handleSelectionClick2() {
    if (value === "3") {
      setValue(null);
    } else if (value === null) {
      setValue("3");
    }
    console.log(value);
  }
  function handleSelectionClick3() {
    if (value === "4") {
      setValue(null);
    } else if (value === null) {
      setValue("4");
    }
    console.log(value);
  }
  return (
    <div>
      <section className="bg-third py-4 py-md-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-7">
              <p className="fs-1 fw-bold">
                <br></br>
                <br></br>
                Find out more about<br></br>
                <span className="text-primary">LatAmLinks</span>
              </p>
            </div>
            <div className="d-none d-md-block col-12 col-md-5">
              <div className={styles.imageContainer}>
                <Image
                  src={logoCirculo}
                  alt="logo"
                  className={styles.mainBannerImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="content">
        <div className="question">
          <div className="col-20">
            <button
              className={
                value === "1"
                  ? "btn btn-white bg-white text-secondary fs-5 fw-bold w-75 ms-2 text-start"
                  : "btn btn-white bg-white text-primary fs-5 fw-bold w-75 ms-2 text-start"
              }
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-1"
              aria-expanded="false"
              aria-controls="collapseWidthExample"
              onClick={handleSelectionClick}
            >
              <span className="fs-3">
                {value === "1" ? (
                  <span className="text-secondary">-</span>
                ) : (
                  <span className="text-primary">+</span>
                )}
              </span>{" "}
              How are LatAmLinks&apos; services customized for different types
              of businesses?
            </button>
            <div className="collapse" id="collapse-1">
              <div
                className={
                  "card card-body bg-transparent text-black fs-6 " +
                  styles.cardTimeline
                }
              >
                We tailor our services based on a detailed analysis of each
                client's business model and objectives, ensuring personalized
                solutions that cater to their specific needs, whether they are a
                small start-up or a large multinational."
              </div>
            </div>
          </div>
          <hr className="hr-thick" />

          <div className="col-20">
            <button
              className={
                value === "2"
                  ? "btn btn-white bg-white text-secondary fs-5 fw-bold w-75 ms-2 text-start"
                  : "btn btn-white bg-white text-primary fs-5 fw-bold w-75 ms-2 text-start"
              }
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-2"
              aria-expanded="false"
              aria-controls="collapseWidthExample"
              onClick={handleSelectionClick1}
            >
              <span className="fs-3">
                {value === "2" ? (
                  <span className="text-secondary">-</span>
                ) : (
                  <span className="text-primary">+</span>
                )}
              </span>{" "}
              What support does LatAmLinks offer to overcome cultural and
              language barriers in Latin America?
            </button>
            <div className="collapse" id="collapse-2">
              <div
                className={
                  "card card-body bg-transparent text-black fs-6 " +
                  styles.cardTimeline
                }
              >
                LatAmLinks acts as a communication bridge between businesses in
                the USA and Latin America. We facilitate clear, effective
                interactions, ensuring mutual understanding and smooth business
                transactions across cultural and linguistic divides.
              </div>
            </div>
          </div>
          <hr className="hr-thick" />

          <div className="col-20">
            <button
              className={
                value === "3"
                  ? "btn btn-white bg-white text-secondary fs-5 fw-bold w-75 ms-2 text-start"
                  : "btn btn-white bg-white text-primary fs-5 fw-bold w-75 ms-2 text-start"
              }
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-2"
              aria-expanded="false"
              aria-controls="collapseWidthExample"
              onClick={handleSelectionClick2}
            >
              <span className="fs-3">
                {value === "3" ? (
                  <span className="text-secondary">-</span>
                ) : (
                  <span className="text-primary">+</span>
                )}
              </span>{" "}
              What kind of follow-up and support does LatAmLinks offer after
              initial contacts or project initiation?
            </button>
            <div className="collapse" id="collapse-2">
              <div
                className={
                  "card card-body bg-transparent text-black fs-6 " +
                  styles.cardTimeline
                }
              >
                Our commitment extends beyond initial contact. We provide
                ongoing support, regular progress updates, and are always
                available to assist with any adjustments or additional needs
                that arise.
              </div>
            </div>
          </div>
          <hr className="hr-thick" />

          <div className="col-20">
            <button
              className={
                value === "4"
                  ? "btn btn-white bg-white text-secondary fs-5 fw-bold w-75 ms-2 text-start"
                  : "btn btn-white bg-white text-primary fs-5 fw-bold w-75 ms-2 text-start"
              }
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-2"
              aria-expanded="false"
              aria-controls="collapseWidthExample"
              onClick={handleSelectionClick3}
            >
              <span className="fs-3">
                {value === "4" ? (
                  <span className="text-secondary">-</span>
                ) : (
                  <span className="text-primary">+</span>
                )}
              </span>{" "}
              How does LatAmLinks measure the success of its interventions and
              services?
            </button>
            <div className="collapse" id="collapse-2">
              <div
                className={
                  "card card-body bg-transparent text-black fs-6 " +
                  styles.cardTimeline
                }
              >
                Success is measured through client satisfaction, achievement of
                set objectives, and the sustainability and growth of our
                clients' operations in Latin America.
              </div>
            </div>
          </div>
          <hr className="hr-thick" />
        </div>
      </div>
    </div>
  );
}
