"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Tentative Forms for Events"
          paragraph=""
          center
          width="665px"
        />

        <div className="w-full">
          <div
            className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-wow-delay=".1s"
          >
            
           
           
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          <PricingBox
            packageName="Registration Form for Workshop & Conference 
            "
            link="https://docs.google.com/forms/d/1UPyyxGaoDoCOg_yUfVL9mxGhkQBkutK8ui62u-MTCCA/viewform?pli=1&pli=1&edit_requested=true"
           
          >
           
          </PricingBox>
          <PricingBox
            packageName="Competitions Form           "
            link="https://docs.google.com/forms/d/1kLZRgaae5Y63w7Z093NCJzbm2EigDNDJ_Vm6Q4rg2ww/edit?usp=forms_home&ths=true"
           
          >
           
          </PricingBox>
          <PricingBox
            packageName="Abstract submission Form            "
            link="https://docs.google.com/forms/d/1tLIUz7caLuTXSNlS8-EosD67guMqxMjy9Iqu75Ny6Cc/edit?usp=forms_home&ths=true"
            
          >
           
          </PricingBox>
          <PricingBox
            packageName="Workshop registration Form           "
            link="https://docs.google.com/forms/d/1OWdbQ9IQh0CMwXPnILNyt4Hdy4qE6Fk-E6y8QtDGoCM/edit?usp=forms_home&ths=true"
            
          >
           
          </PricingBox>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
