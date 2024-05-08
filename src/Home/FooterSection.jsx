import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Common/Button";
import location from "../../assets/HeaderAndFooter/locationFooter.svg";
import cameraFooter from "../../assets/HeaderAndFooter/cameraFooter.svg";
import emailFooter from "../../assets/HeaderAndFooter/emailFooter.svg";
import phone from "../../assets/HeaderAndFooter/phoneFooter.svg";
import footerLogo from "../../assets/HeaderAndFooter/footerLogo.svg";
import whatsp from "../../assets/HeaderAndFooter/whatspFooter.svg";
import facebook from "../../assets/HeaderAndFooter/facebookFooter.svg";
import headerImage from "../../assets/HeaderAndFooter/headerImage.svg";

const FooterSection = ({ isShow }) => {
  const navigate = useNavigate();

  const [openhours, setOpenHours] = useState([
    {
      title: "Openings hours",
      mon: "Mon - Closed",
      tue: "Tue - 08:30-17:30",
      wed: "Wed - 08:30-18:00",
      thurs: "Thu - 08:30-17:30",
      fri: "Fri - 09:00-17:30",
      sat: "Sat - 10am-2pm",
      sun: "Sun - Closed",
    },
  ]);

  return (
    <>
      <footer className="bg-[#E9E6D6] relative">
        <section className="w-full absolute top-[-72px] left-[50%] right-[50%] transform -translate-x-1/2 -translate-y-1/2sF justify-center bg-white rounded-2xl max-w-[95%] xl:max-w-[1130px] mx-auto gap-x-3 py-3 md:py-7 lg:py-7 xl:py-7 px-4 md:px-7 lg:px-9 xl:px-9">
          <div className="flex flex-col flex-1 gap-2">
            <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-4 items-start md:items-center lg:items-center xl:items-center">
              <div className="font-semibold text-[#000] text-[25px] vietnam">
                Newsletter
              </div>
              <div className="flex flex-col xs:gap-4 sm:gap-4 sm:flex-row md:flex-row lg:flex-row xl:flex-row w-full">
                <input
                  type="text"
                  placeholder="Enter Email Address"
                  className="bg-[#F5F4F8] flex-grow input-field"
                />
                <button className="subscribe-btn vietnam  w-[150px] md:w-[200px] lg:w-[253px] xl:w-[253px]">
                  Subscribe
                </button>
              </div>
            </div>
            <div className=" pt-2 pl-[15px] text-xs vietnam  text-[#000] xs:text-sm ms-0 md:ms-[140px] lg:ms-[140px] xl:ms-[140px]">
              Subscribe to Our Newsletter and get updated every time.
            </div>
          </div>
        </section>

        {/* footer top end */}
        <div className="xs:pt-[200px] sm:pt-[200] pt-[120px] pb-[37px] max-w-[1240px] mx-auto px-[30px]">
          <img src={footerLogo} />
        </div>
        <section className="footer-content">
          <div className="flex flex-wrap justify-center sm:justify-normal gap-y-12  text-[#000] mt-7 max-w-[1240px] px-[30px] mx-auto sm:mb-4 xs:mb-4">
            <div className=" w-[100%] sm:w-[50%] md:w-[25%] lg:w-[25%] xl:w-[25%]">
              <div className="mb-6  vietnam text-[18px] md:text-[20px] lg:text-[22px] xl:text-[22px] font-semibold text-[#000]">
                Home
              </div>
              <div
                className="mb-5 text-[14px] vietnam "
                onClick={() => navigate("/")}
              >
                Home
              </div>
              <div
                className="mb-5 text-[14px] vietnam "
                onClick={() => navigate("/about")}
              >
                About Us
              </div>
              <div className="mb-5 text-[14px] vietnam ">Products</div>
              <div className="mb-5 text-[14px] vietnam ">Our Values</div>
              <div className="mb-5"></div>
              <div className="mb-5 text-[14px] vietnam ">Our assortment</div>
              <div className="mb-5 text-[14px] vietnam ">Why Hout Total</div>
              <div className="mb-5 text-[14px] vietnam ">Contact Us</div>
              <div className="mb-5 text-[14px] vietnam ">
                <Link to="/terms-conditions">Terms & Conditions</Link>
              </div>
              <div className="mb-5 text-[14px]">
                <Link to="privacy-policy vietnam ">Privacy Policy</Link>
              </div>
              <div className="mb-5 text-[14px] vietnam ">
                Customer Support/Faq
              </div>
            </div>

            <div className=" w-[100%] sm:w-[50%] md:w-[25%] lg:w-[25%] xl:w-[25%]">
              {openhours.map((item, index) => (
                <div key={index}>
                  <div className="mb-6 text-[18px] md:text-[20px] lg:text-[22px] xl:text-[22px] font-semibold text-[#000]">
                    {item.title}
                  </div>
                  <div className="mb-5 text-[14px] vietnam ">{item.mon}</div>
                  <div className="mb-5 text-[14px] vietnam ">{item.tue}</div>
                  <div className="mb-5 text-[14px] vietnam ">{item.wed}</div>
                  <div className="mb-5 text-[14px] vietnam ">{item.thurs}</div>
                  <div className="mb-5 text-[14px] vietnam ">{item.fri}</div>
                  <div className="mb-5 text-[14px] vietnam ">{item.sat}</div>
                  <div className="mb-5 text-[14px] vietnam ">{item.sun}</div>
                </div>
              ))}
            </div>

            <div className=" w-[100%] sm:w-[50%] md:w-[25%] lg:w-[25%] xl:w-[25%]">
              <div className="mb-6 text-[18px] vietnam  md:text-[20px] lg:text-[22px] xl:text-[22px] font-semibold text-[#000]">
                Contact Us
              </div>
              <div className="flex items-start gap-x-2 mb-5 text-[14px] vietnam ">
                {" "}
                <img src={location} /> Lageweg 35K 2222AG <br /> Katwijk aan Zee
                The <br />
                Netherlands{" "}
              </div>
              <div className="flex items-center mb-5 text-[14px] gap-x-2 vietnam ">
                {" "}
                <img src={whatsp} /> +316 339 66 002
              </div>
              <div className="flex items-center mb-5 text-[14px] gap-x-2 vietnam ">
                {" "}
                <img src={phone} /> +31 71 203 40 90
              </div>
              <div className="flex items-center mb-5 text-[14px] gap-x-2 vietnam ">
                {" "}
                <img src={emailFooter} /> info@makeyourplank.nl
              </div>
              <div className="flex items-center mb-5 text-[14px] gap-x-6">
                <div className="flex items-center">
                  <img src={facebook} />{" "}
                </div>
                <div>
                  {" "}
                  <img src={cameraFooter} />
                </div>
              </div>
            </div>

            <div className=" w-[100%] sm:w-[50%] md:w-[25%] lg:w-[25%] xl:w-[25%]">
              <div className="mb-6 text-[18px] vietnam  md:text-[20px] lg:text-[22px] xl:text-[22px] font-semibold text-[#000]">
                Chamber of Commerce
              </div>
              <div className="mb-5 text-[14px] vietnam ">61392421</div>
              <div className="mb-5 text-[14px] font-semibold vietnam ">
                Bank
              </div>
              <div className="mb-5 text-[14px] vietnam ">
                NL65 BUNQ 2064 2611 33
              </div>
              <div className=" mt-5 pay-button">
                {" "}
                <Button
                  btnText="Pay"
                  xl:paddingX="60px"
                  lg:paddingX="30px"
                  breakpoint="w-[155px]"
                >
                  {" "}
                </Button>
              </div>
            </div>
          </div>
        </section>
        <div className="copyright-sect xs:flex-col-reverse flex justify-center items-center sm:gap-[30px] xs:gap-[30px] gap-[100px] py-[30px] px-[30px]">
          <div className="text-[14px] vietnam text-[#111727s]">
            Copyright © 2024 Hout Total
          </div>
          <img src={footerLogo} />
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
