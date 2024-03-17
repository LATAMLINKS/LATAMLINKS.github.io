import React from 'react'
import Image from "next/image";

import styles from "@/assets/css/home/styles.module.css"


import logoCirculo from "@/assets/images/Logo_Circulo.png"

export default function ContactUs() {
  return(
    <div className="bg-gradient-primary">
    <section className="bg-third py-4 py-md-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-7">
              <p className="fs-1 fw-bold">
                <br></br>
                <span className="text-primary text-center">Our services</span>
              </p>
              <p className="fs-6">
                Feel free to reach out with any <br></br> question, our team is ready to assist<br></br>you<br></br>
              </p>
            </div>
          </div>
        </div>
    </section>
    
    </div>
  )
}