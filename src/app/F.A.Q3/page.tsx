"use client";
import React from "react";
import Image from "next/image";
import styles from "@/assets/css/home/styles.module.css";
import logoCirculo from "@/assets/images/Logo_Circulo.png";
import { useState } from "react";

export default function FAQ3() {
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
              What plans does LatAmLinks have for the future?
            </button>
            <div className="collapse" id="collapse-1">
              <div
                className={
                  "card card-body bg-transparent text-black fs-6 " +
                  styles.cardTimeline
                }
              >
                We are continuously expanding our network and expertise to
                include more sectors and regions within Latin America, aiming to
                provide even more comprehensive support to businesses entering
                these markets.
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
              How does LatAmLinks stay informed about changes and trends in
              Latin American markets?
            </button>
            <div className="collapse" id="collapse-2">
              <div
                className={
                  "card card-body bg-transparent text-black fs-6 " +
                  styles.cardTimeline
                }
              >
                Our team regularly engages in market research, attends industry
                events, and collaborates with local experts to stay ahead of
                market trends and regulatory changes.
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
              How does LatAmLinks contribute to economic and business
              development in Latin America?
            </button>
            <div className="collapse" id="collapse-2">
              <div
                className={
                  "card card-body bg-transparent text-black fs-6 " +
                  styles.cardTimeline
                }
              >
                We not only assist foreign businesses in entering the market but
                also work towards creating local partnerships and opportunities,
                contributing to economic growth and development in the region.
              </div>
            </div>
          </div>
          <hr className="hr-thick" />
        </div>
      </div>
    </div>
  );
}
