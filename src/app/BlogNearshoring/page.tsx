import React from 'react'
import Image from "next/image";

import styles from "@/assets/css/home/styles.module.css"
import logoCirculo from "@/assets/images/Logo_Circulo.png"
import StockPhotoBlog from "@/assets/images/Stock_Photo_Blog.png"


export default function PageB1() {
  return(
    <div>
     
      <div className="col-12">
          <div className="container bg-white">
            <div className="row">
              <div className="col-12 col-md-8 offset-md-2">
              <p className="fs-1 fw-bold text-center">
                Nearshoring: what is it, and how it can benefit you
              </p>
              <p className="fs-6">
                January 27, 2024
              </p>
              <div className="text-center">
                <Image src={StockPhotoBlog} alt="Stock photo" className="w-30 h-30 " />
              </div>

              <br></br>The strategic reconfiguration of supply chains through nearshoring has emerged as a prominent economic and business trend. 
              Fundamentally, nearshoring involves relocating a company's production to a country near its operations. Although not a novel 
              business approach, nearshoring has witnessed an unprecedented surge in popularity, propelled by recent global challenges. As companies 
              reassess and fortify their supply chain strategies, the agility and resilience offered by nearshoring have become increasingly vital 
              considerations in navigating the complexities of the contemporary business landscape.

              <p className="fs-5 fw-bold"> <br></br> China vs. the United States trade escalation </p>    
              China’s economic growth and influence has become a more prominent political and economic concern for the US interest. Since former 
              president Donald Trump’s administration, the US increased tariffs and imposed restrictions of imports from China. These measures 
              prompted businesses to reconsider their production locations, seeking alternatives beyond Chinese borders. To further encourage the
              relocation of production away from China, additional initiatives have been pursued in the US. Notably, in February 2023, the bill H.R.722
              Western Hemisphere Nearshoring Act aimed to produce incentives for US companies to move their production to Latin America from China. 
              Although the bill did not secure approval, its proposal signals an ongoing shift in geopolitical and economic strategies as nations 
              navigate the complexities of global trade relations.

              <p className="fs-5 fw-bold"><br></br>The COVID-19 pandemic</p>
              In the aftermath of the extensive disruptions witnessed in global supply chains during the COVID-19 pandemic, companies find 
              themselves compelled to reassess their business models. The profound scarcity and delays in goods, stemming from the widespread 
              closure of borders and restrictions on exporting capabilities, pushed numerous enterprises to the border of collapse. While supply 
              chains are slowly reemerging and reestablishing, the heightened demand for goods availability, amplified by shifts in consumer behavior, 
              has contributed to an increased cost of importing. According to the International Monetary Fund, transport costs, particularly in the 
              maritime sector, experienced a staggering 500% surge in 2022. This dramatic escalation underscores the complexities and challenges 
              faced by companies as they navigate the evolving terrain of global commerce in a post-pandemic era.<br></br>

              <p className="fs-5 fw-bold"><br></br>Ukraine vs. Russian conflict</p>
              The vulnerability of supply chains to disruptions is pronounced due to their current heavy reliance on globalization. The recent 
              Russian invasion of Ukraine, particularly its impact on commodities like oil, has reverberated across markets, causing disruptions, 
              and constraining the availability of crucial raw materials. Furthermore, the imposition of Western sanctions against Russia has emerged 
              as a significant operational challenge for numerous companies.<br></br>
              In this landscape of uncertainty, the appeal of nearshoring becomes evident. Unlike offshoring, where production is intricately tied 
              to the outsourcing capabilities of a distant provider, nearshoring offers a strategic advantage in optimizing business operations. 
              Proximity plays a pivotal role, allowing for more direct control over operations without the constraints of time zones. This not only 
              facilitates a faster speed to market but also expedites the transit from manufacturers to customers. In essence, nearshoring presents 
              a proactive approach to mitigating the risks associated with global disruptions, enhancing operational efficiency, and ensuring a more
              resilient and responsive supply chain for your company.

              <p className="fs-5 fw-bold"><br></br>Nearshoring to Mexico</p>
              Mexico emerges a top-choice hub for nearshoring among US companies, capitalizing on its geographical proximity. Fueled by economic
              growth, particularly in within the manufacturing sector, Mexico has become an increasingly attractive landscape for investors. In the 
              initial half of 2023, an impressive 88.6% of the country’s exports comprised manufactures goods, underlining its pivotal role in global
              supply chains. Significantly, Mexico achieved a historic milestone by becoming the largest trading partner of the US, with trade volumes
              surpassing USD 263 billion in the initial four months of 2023, a milestone attributed to the growing trend of nearshoring. <br></br>
              Mexico benefits from advantageous production laws and initiatives. These include robust intellectual property laws and the Manufacturing,
              Maquila and Export Services Industry program. Under this program, foreign manufacturers can import raw materials without incurring in 
              taxes and duties if the final product is exported out of Mexico within the stipulated timeframe. Additionally, the country provides 
              wages for skilled labor in various industries, particularly in the northern Mexican region, when compared to the US and China. <br></br>
      
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}