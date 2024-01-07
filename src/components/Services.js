import React from "react";
import Headings from "./Headings";
import { services } from "../data";
import Service from "./Service";
const Services = () => {
  return (
    <section className="section services" id="services">
      <Headings title="Our" subTitle="Services"></Headings>
      <div className="section-center services-center">
        {services.map((service) => {
           
          return (
           <Service key={service.id} {...service}></Service>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
