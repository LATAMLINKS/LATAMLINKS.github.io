"use client";
import React from "react";
import Image from "next/image";

import styles from "@/assets/css/home/styles.module.css";

import logoCirculo from "../../../public/assets/images/Logo_Circulo.png";
import Table from "@/assets/images/Table.png";
import { useState } from "react";

export default function FAQ() {
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
  function handleSelectionClick9() {
    if (value === "10") {
      setValue(null);
    } else if (value === null) {
      setValue("10");
    }
    console.log(value);
  }
  function handleSelectionClick10() {
    if (value === "11") {
      setValue(null);
    } else if (value === null) {
      setValue("11");
    }
    console.log(value);
  }
  function handleSelectionClick11() {
    if (value === "12") {
      setValue(null);
    } else if (value === null) {
      setValue("12");
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
        <div className="question mt-3">
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
              What is LatAmLinks?
            </button>

            <div className="collapse" id="collapse-1">
              <div
                className={
                  "card card-body bg-transparent text-black fs-6 " +
                  styles.cardTimeline
                }
              >
                We are a company designed to simplify business development for
                foreign enterprises looking to establish a presence in Mexico
                and the broader Latin American region. Whether you're pursuing
                significant ventures or simply need a company's contact
                information, Latamlinks will help you save time, amplify
                financial rewards, and seamlessly navigate the entry and
                expansion in these dynamic markets.
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
              What can we do for you?
            </button>
            <div className="collapse" id="collapse-2">
              <div
                className={
                  "card card-body bg-transparent text-black fs-6 " +
                  styles.cardTimeline
                }
              >
                We streamline business development for your company in Latin
                America, tailored to your specific needs. Our services span from
                small ventures such as sourcing optimal shipping solutions to
                larger ones such as setting up manufacturing operations. While
                our primary focus is e-commerce, we've successfully worked with
                clients across diverse sectors such as construction and oil
                industries.
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
              What can LatAmLinks do for my business, if I&apos;m starting with
              just an idea?
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
              How we do what we do?
            </button>
            <div className="collapse" id="collapse-4">
              <div
                className={
                  "card card-body bg-transparent text-black fs-6 " +
                  styles.cardTimeline
                }
              >
                We have built a network of reliable and experienced companies,
                ready to collaborate with you in optimizing and expanding your
                operations. The companies in our network are recognized for
                their credibility and professionalism in their respective
                industries, demonstrating both extensive experience and a
                consistent commitment to excellence.
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
              Why are we we important for your business?
            </button>
            <div className="collapse" id="collapse-5">
              <div
                className={
                  "card card-body bg-transparent text-black fs-6 " +
                  styles.cardTimeline
                }
              >
                Venturing into new international markets, such as Latin America,
                presents unique challenges, including navigating different
                cultural norms, language barriers, and diverse legal and tax
                frameworks. Identifying reliable business partners and optimal
                solutions in these environments can be a complex task. This is
                why our network, known for its excellence, stands ready to
                support you.
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
              data-bs-target="#collapse-6"
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
              How does LatAmLinks ensure the quality and reliability of its
              services?
            </button>
            <div className="collapse" id="collapse-6">
              <div
                className={
                  "card card-body bg-transparent text-black fs-6 " +
                  styles.cardTimeline
                }
              >
                At LatAmLinks, we maintain a rigorous vetting process for our
                network partners and continuously monitor their performance. Our
                team comprises experts with in-depth knowledge of Latin American
                markets, ensuring high-quality and reliable services.
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
              data-bs-target="#collapse-7"
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
              What sets LatAmLinks apart from other business development firms
              in Latin America?
            </button>
            <div className="collapse" id="collapse-7">
              <div
                className={
                  "card card-body bg-transparent text-black fs-6 " +
                  styles.cardTimeline
                }
              >
                What distinguishes us is our specialized focus on Latin America,
                a deep understanding of local business cultures, and a robust
                network of contacts. We offer personalized, hands-on support,
                ensuring that our clients' specific needs are met, regardless of
                their size - from individual entrepreneurs to large
                corporations.
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
              data-bs-target="#collapse-8"
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
              Which product is better for my company?
            </button>
            <div className="collapse" id="collapse-8">
              <div
                className={
                  "card card-body bg-transparent text-black fs-6 " +
                  styles.cardTimeline
                }
              >
                - If you are seeking specific contacts within a particular area
                of interest, choose Service 1. <br></br>- If you are seeking to
                execute projects that require multiple key contacts, choose
                Service 2. <br></br>- If you are seeking multiple key contacts
                but prefer the convenience of an intermediary, choose Service 3.
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
              data-bs-target="#collapse-9"
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
              What are the differences between the three products?
            </button>
            <div className="collapse" id="collapse-9">
              <div
                className={
                  "card card-body bg-transparent text-black fs-6 " +
                  styles.cardTimeline
                }
              >
                <Image src={Table} alt="Stock photo" className="w-50 h-75" />
              </div>
            </div>
          </div>
          <hr className="hr-thick" />

          <div className="col-20">
            <button
              className={
                value === "10"
                  ? "btn btn-white bg-white text-secondary fs-5 fw-bold w-75 ms-2 text-start"
                  : "btn btn-white bg-white text-primary fs-5 fw-bold w-75 ms-2 text-start"
              }
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-10"
              aria-expanded="false"
              aria-controls="collapseWidthExample"
              onClick={handleSelectionClick9}
            >
              <span className="fs-3">
                {value === "10" ? (
                  <span className="text-secondary">-</span>
                ) : (
                  <span className="text-primary">+</span>
                )}
              </span>{" "}
              Where can I see the progress of my project?
            </button>
            <div className="collapse" id="collapse-10">
              <div
                className={
                  "card card-body bg-transparent text-black fs-6 " +
                  styles.cardTimeline
                }
              >
                You will have continuous access to real-time updates on your
                project via your company´s profile.
              </div>
            </div>
          </div>
          <hr className="hr-thick" />

          <div className="col-20">
            <button
              className={
                value === "11"
                  ? "btn btn-white bg-white text-secondary fs-5 fw-bold w-75 ms-2 text-start"
                  : "btn btn-white bg-white text-primary fs-5 fw-bold w-75 ms-2 text-start"
              }
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-11"
              aria-expanded="false"
              aria-controls="collapseWidthExample"
              onClick={handleSelectionClick10}
            >
              <span className="fs-3">
                {value === "11" ? (
                  <span className="text-secondary">-</span>
                ) : (
                  <span className="text-primary">+</span>
                )}
              </span>{" "}
              Questions about the progress of your project?
            </button>
            <div className="collapse" id="collapse-11">
              <div
                className={
                  "card card-body bg-transparent text-black fs-6 " +
                  styles.cardTimeline
                }
              >
                Via your company´s profile you´ll have 24/7 acccessibility to
                reach our team.
              </div>
            </div>
          </div>
          <hr className="hr-thick" />

          <div className="col-20">
            <button
              className={
                value === "12"
                  ? "btn btn-white bg-white text-secondary fs-5 fw-bold w-75 ms-2 text-start"
                  : "btn btn-white bg-white text-primary fs-5 fw-bold w-75 ms-2 text-start"
              }
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-12"
              aria-expanded="false"
              aria-controls="collapseWidthExample"
              onClick={handleSelectionClick11}
            >
              <span className="fs-3">
                {value === "12" ? (
                  <span className="text-secondary">-</span>
                ) : (
                  <span className="text-primary">+</span>
                )}
              </span>{" "}
              How does LatAmLinks handle client information confidentiality and
              security?
            </button>
            <div className="collapse" id="collapse-12">
              <div
                className={
                  "card card-body bg-transparent text-black fs-6 " +
                  styles.cardTimeline
                }
              >
                Client confidentiality is paramount. We adhere to strict data
                protection protocols and ensure all our partners comply with
                these standards, safeguarding sensitive information at all
                times.
              </div>
            </div>
          </div>
          <hr className="hr-thick" />
        </div>
      </div>
      <br></br>
    </div>
  );
}
