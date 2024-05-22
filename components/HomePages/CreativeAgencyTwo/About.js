import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import aboutImg from '../../../public/images/about-img2.jpg';

const About = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <section className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div 
                className="about-image"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <Image
                  src={aboutImg}
                  alt="image"
                  className="rounded-10"
                  width={500}
                  height={750}
                />

                <div className="video-box">
                  <div
                    onClick={() => setToggler(!toggler)}
                    className="video-btn"
                  >
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div 
                className="about-content about-content-two"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <div className="section-title">
                  <h2>About Us</h2>
                  <p>
                    Lorem ipsum dolor sit amet, con se ctetur adipiscing elit.
                    In sagittis eg esta ante, sed viverra nunc tinci dunt nec
                    elei fend et tiram.
                  </p>
                </div>

                <div className="">
                  <h4>Who We Are</h4>
                  <p>
                  We, the United Nations Association Rwanda, are unwaveringly committed to being catalysts for transformative change, dedicating ourselves tirelessly to tackling the most urgent global issues. Our primary commitment lies in achieving the Sustainable Development Goals (SDGs), with a strong focus on eradicating poverty, fostering peace, addressing climate change, and safeguarding the environment, as we believe these are fundamental pillars for a better world.
In our pursuit of these goals, we are equally dedicated to promoting diversity, equity, and inclusion (DEI), recognizing that these values are essential for coherence and progress. Through our actions, we aim to cultivate a sense of unity, equality, and justice, envisioning a world where every person not only survives but thrives, contributing meaningfully to a brighter future.
We invite you to join us on this transformative journey, as together, we strive to build a more inclusive and prosperous world for the well-being of present and future generations. Let us unite in turning our vision of a peaceful and prosperous world into a tangible reality.

The United Nations Association Rwanda offers a range of impactful programs aimed at fostering knowledge dissemination, promoting human rights, and fostering peace and conflict resolution

                  </p>
                </div>

                <div className="about-text">
                  <h4>Our History</h4>
                  <p>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Our Mission</h4>
                  <ul>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Our mission is to actively champion and advocate for the aims and ideals set forth by the United Nations. Through our initiatives and collaborations, we aim to foster a global environment where cooperation, understanding, and sustainable development thrive
                    </li>
                    {/* <li>
                      <i className="fa-solid fa-circle-check"></i>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature.
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
