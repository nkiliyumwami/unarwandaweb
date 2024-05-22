import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

import curveShape from "../../../public/images/curve-shape.png";

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div
        className="hero-banner overly"
        style={{
          backgroundImage: `url(/images/unaRwanda.webp)`,
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="main-banner-content text-center">
                <span
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  We are 
                </span>

                <h1
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  UNA RWANDA
                </h1>

                <p
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  Empowering Change, Uniting Humanity: Together, we champion the Sustainable Development Goals, foster diversity, equity, and inclusion, and pave the path towards a peaceful, prosperous world for all
                </p>

                <Link
                  href="/contact-us/"
                  className="btn btn-primary"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  Contact Us
                </Link>

                {/* <button
                  onClick={() => setToggler(!toggler)}
                  className="btn btn-secondary"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  <i className="fa-solid fa-play me-1"></i> How it works
                </button> */}
              </div>
            </div>
          </div>
        </div>

        <div className="curve-shape">
          <Image
            src={curveShape}
            alt="Shape"
            width={1091}
            height={100}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
