import React from "react";
import heroImage from "./Images/Frame 11.jpg";
import heroImgOne from "./Images/heroImgOne.png";
import heroImgTwo from "./Images/heroImgTwo.png";

function Home() {
  return (
    <>
      <div className="heroSection">
        <img
          src={heroImage}
          alt="Hero"
          className="w-100"
          style={{ height: "auto" }}
        />
        <div
          className="heroAnimation d-flex py-4 px-3"
          style={{ backgroundColor: "#5BBBFF" }}
        >
          <div className="px-5" style={{ width: "70%" }}>
            <p
              className="pe-5"
              style={{
                fontWeight: "900",
                fontSize: "40px",
                lineHeight: "48px",
              }}
            >
              ARCHITECTUREAL POSSIBILITIES,
            </p>
            <p
              className="pe-5"
              style={{
                fontWeight: "900",
                fontSize: "40px",
                lineHeight: "48px",
              }}
            >
              CRAFTED INTO STUNNING REALITIES.
            </p>
          </div>
          <div
            className="pe-5 d-flex align-items-center"
            style={{ width: "30%", borderLeft: "6px solid #F67D0E" }}
          >
            <div
              id="carouselExample"
              className="carousel slide"
              data-bs-ride="carousel"
              style={{ overflow: "hidden", width: "100%" }}
            >
              <div className="carousel-inner ">
                <div className="carousel-item active">
                  <h1 className="text-center">30+</h1>
                  <h3 className="text-center">Projects</h3>
                </div>
                <div className="carousel-item">
                  <h1 className="text-center">20+</h1>
                  <h3 className="text-center">Completed</h3>
                </div>
                <div className="carousel-item">
                  <h1 className="text-center">10+</h1>
                  <h3 className="text-center">Ongoing</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="heroContent">
        <p className="headers">Behind The Brand</p>
        <div className="hero-sub-section p-4">
          <div
            id="first-container"
            className="hero-box d-flex align-items-center"
          >
            <div className="img-box p-2">
              <img src={heroImgOne} alt="" />
            </div>
            <p className="ps-5 pe-4">
              Alufab is a premier fabrication company with over 40 years of
              experience in the design, supply, and installation of diverse
              facade systems. Founded by the visionary Lt. Mr. Sk Kamrul Bari,
              who was a distinguished figure in the aluminium fabrication
              industry, ALUFAB has grown into a trusted name in Kolkata and
              beyond.
            </p>
          </div>
          <div
            id="second-container"
            className="hero-box d-flex align-items-center"
          >
            <p className="ps-5 pe-5">
              With a legacy built on expertise, innovation, and a commitment to
              quality, we continue to lead the industry as the second
              generation. Mr. Sk Romijul Bari, takes on the challenge of modern
              facade technologies across India and internationally.
            </p>
            <div className="img-box p-2">
              <img src={heroImgTwo} alt="" />
            </div>
          </div>
        </div>
        <div className="container divider border my-5 pt-5"></div>
      </div>
      <div className="hero-sub-content d-flex">
        <div class="services-vertical-text">SERVICES</div>
        <div className="service d-flex flex-column">
          <div className="services-items w-100">
            <div className="services-card d-flex align-items-end">
              <h1>Structural Glazing</h1>
            </div>
            <div className="services-card d-flex align-items-end">
              <h1>Structural Glazing</h1>
            </div>
            <div className="services-card d-flex align-items-end">
              <h1>Structural Glazing</h1>
            </div>
            <div className="services-card d-flex align-items-end">
              <h1>Structural Glazing</h1>
            </div>
            <div className="services-card d-flex align-items-end">
              <h1>Structural Glazing</h1>
            </div>
            <div className="services-card d-flex align-items-end">
              <h1>Structural Glazing</h1>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5 w-100">
            <button
              className="py-2 px-3 text-center border-0 rounded"
              style={{ backgroundColor: "#003459", color: "#fff" }}
            >
              Show More
            </button>
          </div>
        </div>
      </div>
      <div className="carousel-section">
        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ overflow: "hidden", width: "100%" }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">Image 1</div>
            <div className="carousel-item">Image 2</div>
            <div className="carousel-item">Image 3</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
