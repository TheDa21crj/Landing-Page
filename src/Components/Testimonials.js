import React from "react";
import "./Css/Testimonials.css";

import A1 from "./../Img/avatar1.png";
import A2 from "./../Img/avatar2.png";
import A3 from "./../Img/avatar3.png";
import A4 from "./../Img/avatar4.png";

export default function Testimonials() {
  return (
    <div>
      <p className="PartnersmDiv">Testimonials</p>
      <div>
        <div className="TestimonialsRowCMDiv">
          <div className="TestimonialsCDivP">
            <div className="TestimonialsContentDivRows" id="TestimonialsMargin">
              <div className="TestimonialsUserDiv">
                <div className="UserIconDiv">
                  <img src={A1} alt="" />
                </div>
                <div>
                  <p>Claire Bell</p>
                  <p>Designer</p>
                </div>
              </div>
              <p className="TestimonialsPRowTag">
                Slate helps you see how many more days you need to work to reach
                your financial goal for the month and year. Slate helps you see
                how many more days you need to work to reach your financial goal
                for the month and year.your financial goal for the month and
                year.
              </p>
            </div>
            <div className="TestimonialsContentDivRows">
              <div className="TestimonialsUserDiv">
                <div className="UserIconDiv">
                  <img src={A3} alt="" />
                </div>
                <div>
                  <p>Claire Bell</p>
                  <p>Designer</p>
                </div>
              </div>
              <p className="TestimonialsPRowTag">
                Slate helps you see how many more days you need to work to reach
                your financial goal for the month and year. Slate helps you see
                how many more days you need to work to reach your financial goal
                for the month and year.
              </p>
            </div>
          </div>
          <div className="TestimonialsCDivP">
            <div className="TestimonialsContentDivRows" id="TestimonialsMargin">
              <div className="TestimonialsUserDiv">
                <div className="UserIconDiv">
                  <img src={A2} alt="" />
                </div>
                <div>
                  <p>Claire Bell</p>
                  <p>Designer</p>
                </div>
              </div>
              <p className="TestimonialsPRowTag">
                Slate helps you see how many more days you need to work to reach
                your financial goal for the month and year. Slate helps you see
                how many more days you need to work to reach your financial goal
                for the month and year.
              </p>
            </div>
            <div className="TestimonialsContentDivRows">
              <div className="TestimonialsUserDiv">
                <div className="UserIconDiv">
                  <img src={A4} alt="" />
                </div>
                <div>
                  <p>Claire Bell</p>
                  <p>Designer</p>
                </div>
              </div>
              <p className="TestimonialsPRowTag">
                Slate helps you see how many more days you need to work to reach
                your financial goal for the month and year. Slate helps you see
                how many more days you need to work to reach your financial goal
                for the month and year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
