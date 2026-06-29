"use client";

import Image from "next/image";
import { useState } from "react";

type Step = {
  title: string;
  desc: string;
};

const stepTopClassByValue: Record<number, string> = {
  3784: "bb-dynamic-057",
  3877: "bb-dynamic-058",
  3950: "bb-dynamic-059",
  3970: "bb-dynamic-060",
  4043: "bb-dynamic-061",
  4063: "bb-dynamic-062",
  4136: "bb-dynamic-063",
  4156: "bb-dynamic-064",
  4229: "bb-dynamic-065"
};

const stepsData: Step[] = [
{
  title: "Consultation & Carrier Onboarding",
  desc: "We learn about your equipment, preferred lanes, operating region, and revenue goals. Then we complete the onboarding process and set up communication channels."
},
{
  title: "Load Planning & Rate Negotiation",
  desc: "We search premium load boards and utilize direct broker networks to find high-paying cargo. We negotiate rates aggressively to secure the highest RPM possible."
},
{
  title: "Dispatch & Route Coordination",
  desc: "Once a load is accepted, we handle dispatching details and map out the optimal routes to minimize deadhead miles and keep fuel costs low."
},
{
  title: "Real-Time Load Management",
  desc: "We track the cargo in real-time, maintain communication with brokers and shippers, and handle check-calls so you can stay focused on driving safely."
},
{
  title: "Paperwork & Payment Follow-Up",
  desc: "We take care of all rate confirmations, setup packets, and invoices. We coordinate with your factoring company to ensure you receive payments within 24-48 hours."
}];


export default function ServicesProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const stepHeight = (index: number) => activeStep === index ? 146 : 73;
  const stepTops: number[] = [];
  let currentStepTop = 3784;

  for (let i = 0; i < 5; i++) {
    stepTops.push(currentStepTop);
    currentStepTop += stepHeight(i) + 20;
  }

  return (
    <>
      <div className="bb-blog-001">
        <div className="bb-services-process-001">
          How We Manage Your Box Truck in 5 Simple Steps
        </div>
        <Image
          className="bb-services-process-002"
          src="/Images/Rectangle 1093.webp"
          alt="Managing Box Truck"
          width={750}
          height={518} />
        

        {stepsData.map((step, idx) => {
          const isOpen = activeStep === idx;

          return (
            <div
              key={step.title}
              onClick={() => setActiveStep(idx)}
              className={`bb-services-process-003 ${
              isOpen ?
              "bb-services-process-004" :
              "bb-faq-004"} ${
              stepTopClassByValue[stepTops[idx]]}`}>
              
              <div className="bb-services-process-005">
                {step.title}
              </div>

              {isOpen &&
              <div className="bb-services-process-006">
                  {step.desc}
                </div>
              }

              <div className="bb-faq-007">
                <div className="bb-faq-008" />
                <div
                  className={`bb-faq-009 ${
                  isOpen ? "bb-faq-010" : "bb-faq-011"}`
                  } />
                
              </div>
            </div>);

        })}
      </div>

      <section
        data-responsive-section="process"
        className="bb-services-process-007">
        
        <div className="bb-blog-021">
          <h2 className="bb-services-process-008">
            How We Manage Your Box Truck in 5 Simple Steps
          </h2>

          <div className="bb-services-process-009">
            <Image
              className="bb-services-process-010"
              src="/Images/Rectangle 1093.webp"
              alt="Managing Box Truck"
              width={750}
              height={518} />
            

            <div className="bb-services-process-011">
              {stepsData.map((step, idx) => {
  const isOpen = activeStep === idx;

  return (
    <div
      key={step.title}
      onClick={() => setActiveStep(idx)}
      className={`bb-services-process-003 ${
        isOpen ? "bb-services-process-004" : "bb-faq-004"
      } ${stepTopClassByValue[stepTops[idx]]}`}
    >
      <h3 className="bb-services-process-005">
        {step.title}
      </h3>

      {isOpen && (
        <div className="bb-services-process-006">
          {step.desc}
        </div>
      )}

      <div className="bb-faq-007">
        <div className="bb-faq-008" />
        <div
          className={`bb-faq-009 ${
            isOpen ? "bb-faq-010" : "bb-faq-011"
          }`}
        />
      </div>
    </div>
  );
})}
            </div>
          </div>
        </div>
      </section>
    </>);

}
