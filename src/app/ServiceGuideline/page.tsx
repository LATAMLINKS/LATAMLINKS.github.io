import React from "react";
import Image from "next/image";

import styles from "@/assets/css/home/styles.module.css";

import logoCirculo from "../../public/assets/images/Logo_Circulo.png";

export default function serviceGuidelines() {
  return (
    <div>
      <section className={styles.simpleBg}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-7">
              <p className="fs-1 fw-bold">
                <span className="text-primary">Service guidelines</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="container bg-white rounded">
            <div className="row">
              <div className="col-12 col-md-8 offset-md-2">
                <p className="fs-5 fw-bold">
                  <br></br>
                  LatAmLinks Service Guidelines
                </p>
                Handling of Business Project Progress and Client Engagement
                <br></br>
                <br></br>
                <p className="fs-6 fw-bold">
                  1. Project Monitoring and Updates
                </p>
                1.1. LatAmLinks monitors the progress of each business project
                closely.<br></br>
                1.2. Regular updates are provided to Clients through their
                online profile.<br></br>
                1.3. In case of any significant changes or delays, LatAmLinks
                will promptly inform the Client and suggest possible
                adjustments.<br></br>
                <br></br>
                <p className="fs-6 fw-bold">2. Client Account Management</p>
                2.1. Clients are required to maintain accurate and up-to-date
                information in their profiles.<br></br>
                2.2. LatAmLinks reserves the right to pause services if critical
                account information is missing or outdated.<br></br>
                2.3. Re-engagement of services occurs once the Client updates or
                confirms the accuracy of their information.<br></br>
                <br></br>
                <p className="fs-6 fw-bold">
                  3. Financial Transactions and Payments
                </p>
                3.1. All payments from Clients are processed via ACH transfer.
                <br></br>
                3.2. In case of payment failures, LatAmLinks will contact the
                Client to resolve the issue.<br></br>
                3.3. Services may be paused until the payment issue is resolved.
                <br></br>
                <br></br>
                <p className="fs-6 fw-bold">
                  4. Client Support and Communication
                </p>
                4.1. LatAmLinks provides ongoing support through a dedicated
                client service team.<br></br>
                4.2. Clients can raise queries or concerns through their online
                profile or via direct contact.<br></br>
                4.3. LatAmLinks commits to responding to client inquiries within
                a specified timeframe.<br></br>
                <br></br>
                <p className="fs-6 fw-bold">
                  5. Compliance and Legal Requirements
                </p>
                5.1. LatAmLinks operates in strict compliance with applicable
                laws and regulations.<br></br>
                5.2. Clients are expected to adhere to the Terms of Use and
                Privacy Policy.<br></br>
                5.3. LatAmLinks reserves the right to take necessary legal
                action in cases of non-compliance or breach of contract.
                <br></br>
                <br></br>
                <p className="fs-6 fw-bold">
                  6. Platform and Account Connectivity
                </p>
                6.1. Continuous connectivity to the Client’s online profile is
                essential for uninterrupted service.<br></br>
                6.2. In the event of a disconnection, services may be paused
                until reconnection.<br></br>
                6.3. LatAmLinks will assist Clients in restoring connectivity.
                <br></br>
                <br></br>
                <p className="fs-6 fw-bold">
                  7. Business Information Verification
                </p>
                7.1. LatAmLinks may conduct periodic verifications of business
                information provided by Clients.<br></br>
                7.2. This includes checks on company financials, industry
                status, and operational metrics.<br></br>
                7.3. Clients are required to cooperate with these verifications
                to ensure service continuity.<br></br>
                <br></br>
                <p className="fs-6 fw-bold">
                  8. Modification and Adjustment of Services
                </p>
                8.1. LatAmLinks may modify or adjust services based on the
                evolving needs of the Client or market changes.<br></br>
                8.2. Any significant changes to services will be communicated to
                the Client in advance.<br></br>
                <br></br>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
      </section>
    </div>
  );
}
