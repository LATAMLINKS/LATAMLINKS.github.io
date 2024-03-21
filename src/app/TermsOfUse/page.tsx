import React from "react";
import Image from "next/image";

import styles from "@/assets/css/home/styles.module.css";

import logoCirculo from "../../public/assets/images/Logo_Circulo.png";

export default function TermsOfUse() {
  return (
    <div>
      <section className={styles.simpleBg}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-7">
              <p className="fs-1 fw-bold">
                <span className="text-primary">Terms of use</span>
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
                  Terms of Use for LatAmLinks
                </p>
                <p className="fs-6 fw-bold">1. Acceptance of Terms</p>
                By accessing and using the services of LatAmLinks ("Services"),
                you, the "Client", agree to be bound by these Terms of Use
                ("Terms"), including our Privacy Policy, which is incorporated
                herein by reference. These Terms govern your access to and use
                of the Services and constitute a binding legal agreement between
                you and LatAmLinks.<br></br>
                <br></br>
                <p className="fs-6 fw-bold">2. Services Description</p>
                LatAmLinks provides a platform designed to facilitate business
                development for foreign enterprises looking to establish
                presence in Mexico and the broader Latin American region. This
                includes providing Clients with a personalized online profile to
                track current project progress, new projects, ask questions, and
                receive business management guidance tailored to their specific
                profile.<br></br>
                <br></br>
                <p className="fs-6 fw-bold">
                  3. Client Account and Information
                </p>
                3.1 To access our Services, Clients must create an account on
                our website, providing essential information such as foundation,
                location, revenues, gross margin, company name, warehousing,
                manufacturing, and industry details.<br></br>
                3.2 Clients are responsible for maintaining the confidentiality
                of their account information, including their username and
                password, and for all activities that occur under their account.
                <br></br>
                3.3 Clients may update or modify their information at any time.
                Such information is crucial for us to provide personalized and
                effective recommendations.<br></br>
                <br></br>
                <p className="fs-6 fw-bold">4. Payment Terms</p>
                Services are rendered upon the signing of a service contract and
                are payable via ACH transfer, including the routing number
                details.<br></br>
                <br></br>
                <p className="fs-6 fw-bold">5. Use of Services</p>
                5.1 The Services are provided to assist Clients in navigating
                business development and expansion in Mexico and Latin America.
                Our role is strictly limited to business management, providing
                suitable contacts and guidance for project execution.<br></br>
                5.2 Clients agree to use the Services only for lawful purposes
                and in a manner that does not infringe the rights of or restrict
                or inhibit the use and enjoyment of the Services by any third
                party.<br></br>
                <br></br>
                <p className="fs-6 fw-bold">6. Intellectual Property</p>
                All content and materials provided on our platform, including
                text, graphics, logos, and software, are the property of
                LatAmLinks or its licensors and are protected by applicable
                intellectual property laws.<br></br>
                <br></br>
                <p className="fs-6 fw-bold">7. Disclaimer of Warranties</p>
                LatAmLinks provides the Services on an "as is" and "as
                available" basis. We make no representations or warranties of
                any kind, express or implied, as to the operation of the
                Services or the information, content, materials, or products
                included on our platform.<br></br>
                <br></br>
                <p className="fs-6 fw-bold">8. Limitation of Liability</p>
                LatAmLinks will not be liable for any damages of any kind
                arising from the use of the Services, including, but not limited
                to direct, indirect, incidental, punitive, and consequential
                damages.<br></br>
                <br></br>
                <p className="fs-6 fw-bold">9. Amendments to Terms</p>
                LatAmLinks reserves the right to amend these Terms at any time.
                Your continued use of the Services following any changes
                indicates your acceptance of the new Terms.<br></br>
                <br></br>
                <p className="fs-6 fw-bold">10. Governing Law</p>
                These Terms are governed by the laws of Mexico City, Mexico,
                without regard to its conflict of law provisions.<br></br>
                <br></br>
                <p className="fs-6 fw-bold">11. Contact Information</p>
                For any queries regarding these Terms, please contact us at
                service@latamlinks.com<br></br>
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
