import React from 'react'
import Image from "next/image";

import styles from "@/assets/css/home/styles.module.css"
import StockPhotoBlog from "@/assets/images/Stock_Photo_Blog.png"

export default function Blog() {
  return (
    <div>
    <section className="bg-third py-4 py-md-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-7">
              <p className="fs-1 fw-bold">
                Explore global market trends and uncover <br></br> how your business can leverage <br></br> them to its advantage<span className="text-secondary ">.</span> <br></br>
              </p>
            </div>
          </div>
         </div>
    </section>
    <br></br>
    <div> 
      <p className="fs-4 fw-bold">
        Nearshoring: what it is, and <br></br>how it can benefit you
      </p>
      <p className="fs-6">
        January 27, 2024 <br></br> The strategic reconfiguration of supply chains through nearshoring has <br></br> emerged as a 
        prominent economic business trend. 
      </p>
      <a className="fs-6 text-primary" href="BlogNearshoring">Read more</a> <br></br>
      <Image src={StockPhotoBlog} alt="Stock photo" className="w-25 h-50" />
      <br></br>
    </div> 
  </div>
  )
}
