"use client";
import React from "react";
import Image from "next/image";
import styles from "@/assets/css/home/styles.module.css";
import logoCirculo from "@/assets/images/Logo_Circulo.png";
import { useState } from "react";

export default function FAQ1() {
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
  function handleSelectionClick4() {
    if (value === "5") {
      setValue(null);
    } else if (value === null) {
      setValue("5");
    }
    console.log(value);
  }
  function handleSelectionClick5() {
    if (value === "6") {
      setValue(null);
    } else if (value === null) {
      setValue("6");
    }
    console.log(value);
  }
  function handleSelectionClick6() {
    if (value === "7") {
      setValue(null);
    } else if (value === null) {
      setValue("7");
    }
    console.log(value);
  }
  function handleSelectionClick7() {
    if (value === "8") {
      setValue(null);
    } else if (value === null) {
      setValue("8");
    }
    console.log(value);
  }
  function handleSelectionClick8() {
    if (value === "9") {
      setValue(null);
    } else if (value === null) {
      setValue("9");
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
              What are the basic requirements for a company to start working
              with LatAmLinks?
            </button>
            <div className="collapse" id="collapse-1">
              <div
                className={
                  "card card-body bg-transparent text-black fs-6 " +
                  styles.cardTimeline
                }
              >
                At LatAmLinks, we welcome businesses at any stage, whether
                you're nurturing an idea in the making or looking to expand an
                established operation. Our team is ready to guide you through
                the complexities of entering and thriving in Latin American
                markets.
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
              Is there a minimum or maximum business size or revenue requirement
              to work with LatAmLinks?
            </button>
            <div className="collapse" id="collapse-2">
              <div
                className={
                  "card card-body bg-transparent text-black fs-6 " +
                  styles.cardTimeline
                }
              >
                Our services are tailored to accommodate businesses of all sizes
                and revenue brackets. We believe in fostering growth and
                opportunity for everyone, from small startups to large
                corporations.
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
              data-bs-target="#collapse-3"
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
              What can LatAmLinks do for my business, if I´m starting with just
              an idea?
            </button>
            <div className="collapse" id="collapse-3">
              <div
                className={
                  "card card-body bg-transparent text-black fs-6 " +
                  styles.cardTimeline
                }
              >
                LatAmLinks transforms your ideas into actions. Need a lawyer,
                accountant, or supplier? We'll find the right partners for you.
                Starting from scratch? We guide you from concept to execution,
                making your entry into Latin America efficient and successful.
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
              data-bs-target="#collapse-4"
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
              How does a new client start the process of working with
              LatAmLinks?
            </button>
            <div className="collapse" id="collapse-4">
              <div
                className={
                  "card card-body bg-transparent text-black fs-6 " +
                  styles.cardTimeline
                }
              >
                Initiating a project with LatAmLinks is straightforward. We
                invite you to connect with us for an initial consultation to
                discuss your business objectives and explore how our expertise
                can align with your goals.
              </div>
            </div>
          </div>
          <hr className="hr-thick" />

          <div className="col-20">
            <button
              className={
                value === "5"
                  ? "btn btn-white bg-white text-secondary fs-5 fw-bold w-75 ms-2 text-start"
                  : "btn btn-white bg-white text-primary fs-5 fw-bold w-75 ms-2 text-start"
              }
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-5"
              aria-expanded="false"
              aria-controls="collapseWidthExample"
              onClick={handleSelectionClick4}
            >
              <span className="fs-3">
                {value === "5" ? (
                  <span className="text-secondary">-</span>
                ) : (
                  <span className="text-primary">+</span>
                )}
              </span>{" "}
              Does my company need to have a predefined business strategy for
              Latin America before consulting LatAmLinks?
            </button>
            <div className="collapse" id="collapse-5">
              <div
                className={
                  "card card-body bg-transparent text-black fs-6 " +
                  styles.cardTimeline
                }
              >
                Whether you're starting from scratch or refining an existing
                strategy, our team is ready to work. We adapt our services to
                suit your needs, supporting both emerging ideas and
                well-established business plans.
              </div>
            </div>
          </div>
          <hr className="hr-thick" />

          <div className="col-20">
            <button
              className={
                value === "6"
                  ? "btn btn-white bg-white text-secondary fs-5 fw-bold w-75 ms-2 text-start"
                  : "btn btn-white bg-white text-primary fs-5 fw-bold w-75 ms-2 text-start"
              }
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-5"
              aria-expanded="false"
              aria-controls="collapseWidthExample"
              onClick={handleSelectionClick5}
            >
              <span className="fs-3">
                {value === "6" ? (
                  <span className="text-secondary">-</span>
                ) : (
                  <span className="text-primary">+</span>
                )}
              </span>{" "}
              Can LatAmLinks assist in obtaining contacts within specific
              industries?
            </button>
            <div className="collapse" id="collapse-5">
              <div
                className={
                  "card card-body bg-transparent text-black fs-6 " +
                  styles.cardTimeline
                }
              >
                Absolutely. Our network is not just extensive; it's tailored. We
                focus on connecting you with contacts that align seamlessly with
                your business needs, ensuring meaningful and strategic
                partnerships.
              </div>
            </div>
          </div>
          <hr className="hr-thick" />

          <div className="col-20">
            <button
              className={
                value === "7"
                  ? "btn btn-white bg-white text-secondary fs-5 fw-bold w-75 ms-2 text-start"
                  : "btn btn-white bg-white text-primary fs-5 fw-bold w-75 ms-2 text-start"
              }
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-6"
              aria-expanded="false"
              aria-controls="collapseWidthExample"
              onClick={handleSelectionClick6}
            >
              <span className="fs-3">
                {value === "7" ? (
                  <span className="text-secondary">-</span>
                ) : (
                  <span className="text-primary">+</span>
                )}
              </span>{" "}
              Does LatAmLinks require a commitment for a certain duration of
              service?
            </button>
            <div className="collapse" id="collapse-6">
              <div
                className={
                  "card card-body bg-transparent text-black fs-6 " +
                  styles.cardTimeline
                }
              >
                Our engagement model is flexible and based on your project's
                needs. The duration of our services is adaptable to the
                complexity and scope of your business objectives, ensuring a
                tailored approach every step of the way.
              </div>
            </div>
          </div>
          <hr className="hr-thick" />

          <div className="col-20">
            <button
              className={
                value === "8"
                  ? "btn btn-white bg-white text-secondary fs-5 fw-bold w-75 ms-2 text-start"
                  : "btn btn-white bg-white text-primary fs-5 fw-bold w-75 ms-2 text-start"
              }
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-7"
              aria-expanded="false"
              aria-controls="collapseWidthExample"
              onClick={handleSelectionClick7}
            >
              <span className="fs-3">
                {value === "8" ? (
                  <span className="text-secondary">-</span>
                ) : (
                  <span className="text-primary">+</span>
                )}
              </span>{" "}
              Are there any specific industries or sectors that LatAmLinks
              specializes in?
            </button>
            <div className="collapse" id="collapse-7">
              <div
                className={
                  "card card-body bg-transparent text-black fs-6 " +
                  styles.cardTimeline
                }
              >
                Our primary specialization lies in the e-commerce sector, where
                we have developed considerable expertise. However, our
                experience is not limited to this area. We have successfully
                collaborated with a wide array of industries, ranging from oil
                to construction.
              </div>
            </div>
          </div>
          <hr className="hr-thick" />

          <div className="col-20">
            <button
              className={
                value === "9"
                  ? "btn btn-white bg-white text-secondary fs-5 fw-bold w-75 ms-2 text-start"
                  : "btn btn-white bg-white text-primary fs-5 fw-bold w-75 ms-2 text-start"
              }
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-8"
              aria-expanded="false"
              aria-controls="collapseWidthExample"
              onClick={handleSelectionClick8}
            >
              <span className="fs-3">
                {value === "9" ? (
                  <span className="text-secondary">-</span>
                ) : (
                  <span className="text-primary">+</span>
                )}
              </span>{" "}
              Are there any sectors or types of companies that are not a good
              fit for LatAmLinks' services?
            </button>
            <div className="collapse" id="collapse-8">
              <div
                className={
                  "card card-body bg-transparent text-black fs-6 " +
                  styles.cardTimeline
                }
              >
                At LatAmLinks, we recognize that each business has its unique
                challenges and opportunities. While our expertise is deeply
                rooted in e-commerce, our experience spans a wide range of
                industries. To truly understand whether we can be of assistance,
                we need to know the specifics of your case. We invite every
                potential client to discuss their unique situation with us, so
                we can accurately assess how our services can be aligned to meet
                your needs. Let's start a conversation and explore the
                possibilities!
              </div>
            </div>
          </div>
          <hr className="hr-thick" />
        </div>
      </div>
    </div>
  );
}
