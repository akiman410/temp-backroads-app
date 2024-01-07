import React from "react";
import Headings from "./Headings";
import { tours } from "../data";
import Tour from "./Tour";
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Headings title="Featured" subTitle="Tours"></Headings>

      <div className="section-center featured-center">
        {tours.map((tour) => {         
          return (
            <Tour  key={tour.id} {...tour}></Tour>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
