import Navbar from "../Navbar/Navbar";
import Register from "../Register/Register";
import Testimonials from "../Testimonials/Testimonials";
import Touch from "../Touch/Touch";
import "../nurses/nurses.css";
import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";
// import Touch from "../Touch/Touch";
import Img from "../../Assetss/text.svg";
// import "./Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Img4 from "../../Assetss/Avatar1 (1).png";
import Img1 from "../../Assetss/Avatar2.png";
import Img2 from "../../Assetss/Avatar3.png";

export default function Practice() {
  const images = [
    { src: Img4, className: "avatar1" },
    { src: Img1, className: "avatar2" },
    { src: Img2, className: "avatar3" },
  ];
  const [slider, setSlider] = useState(null);
  const [activeArrow, setActiveArrow] = useState("next");

  const handleNext = () => {
    if (slider) {
      slider.slickNext();
      setActiveArrow("next");
    }
  };

  const handlePrev = () => {
    if (slider) {
      slider.slickPrev();
      setActiveArrow("prev");
    }
  };

  const settings = {
    infinite: true,
    speed: 800,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const delay = 3000;
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  const icons = [
    {
      img: "icon1.svg",
      title: "Cost-Effective",
      text: "Save time, cut paperwork, and enjoy competitive rates with our platform",
    },
    {
      img: "practice1.svg",
      title: "Efficiency",
      text: "Elevate your practice with us!",
    },
    {
      img: "icon3.svg",
      title: "Convenience",
      text: "Simplifies tasks, saves time through paperless transactions",
    },
    {
      img: "icon4.svg",
      title: "Reliability",
      text: "Constantly live app, diverse nurses: Unwavering reliability at your service",
    },
    {
      img: "practice2.svg",
      title: " Transparency",
      text: "Clear processes, fostering trust in every transaction",
    },
    {
      img: "practice3.svg",
      title: "Instantaneous Bookings",
      text: "Investing in your smile, our priority.",
    },
  ];
  return (
    <>
      {isLoading ? (
        <div className="loading-overlay">
          <BounceLoader
            color="rgba(174, 156, 127, 1)"
            loading={isLoading}
            size={100}
          />
          <img src="tooth.png" alt="Tooth Image" className="centered-image" />
        </div>
      ) : (
        <>
          <Navbar />
          <div style={{ width: "100%", overflow: "hidden" }}>
            <div className="nurses-video">
              <img src="practice.png" alt="" />
              <div className="nurses-video-cont">
                <div className="nurse-video-head">
                  <div className="nurses-flex">
                    <div className="nurses-img">
                      <p>Practices</p>
                      <img src="text.svg" alt="" />
                    </div>
                    <div className="nurses-buttons">
                      <button>Login</button>
                      <button>Register</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nurses-icons-main">
              <div className="nurses-icons">
                {icons.map((icon, index) => (
                  <div
                    key={index}
                    className={`icon-box ${
                      hoveredIndex !== null && hoveredIndex !== index
                        ? "blur"
                        : ""
                    }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="image-box">
                      <img src={icon.img} alt="" />
                    </div>
                    <div className="title-box">
                      <p>{icon.title}</p>
                    </div>
                    <div className="text-box">
                      <p>{icon.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="testimonial-container4">
              <div className="testi-full-container">
                <div
                  className="testi-heading3"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                >
                  <h2>Testimonials</h2>
                </div>
                <div
                  className="testi-img"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                >
                  <img src={Img} alt="" />
                </div>
                <div
                  className="testi-para"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                >
                  <p>Hear how others have found the Nomad Nurse experience</p>
                </div>
                <div
                  className="slider-container"
                  // data-aos="zoom-in"
                  // data-aos-duration="800"
                >
                  <Slider ref={(c) => setSlider(c)} {...settings}>
                    <div className="slider-item">
                      <div className="h3-heading">
                        <h3>Yasmine</h3>
                      </div>
                      <div className="h5-heading">
                        <p>Locum dental nurse</p>
                      </div>
                      <div className="p-para">
                        <p>
                          The platform has given me access to a wide range of
                          opportunities, and the process of securing positions
                          is seamless. I appreciate the consistent support and
                          the chance to work with various dental practices
                        </p>
                      </div>
                    </div>{" "}
                    <div className="slider-item">
                      <div className="h3-heading">
                        <h3>Yasmine</h3>
                      </div>
                      <div className="h5-heading">
                        <p>Locum dental nurse</p>
                      </div>
                      <div className="p-para">
                        <p>
                          The platform has given me access to a wide range of
                          opportunities, and the process of securing positions
                          is seamless. I appreciate the consistent support and
                          the chance to work with various dental practices
                        </p>
                      </div>
                    </div>{" "}
                    <div className="slider-item">
                      <div className="h3-heading">
                        <h3>Yasmine</h3>
                      </div>
                      <div className="h5-heading">
                        <p>Locum dental nurse</p>
                      </div>
                      <div className="p-para">
                        <p>
                          The platform has given me access to a wide range of
                          opportunities, and the process of securing positions
                          is seamless. I appreciate the consistent support and
                          the chance to work with various dental practices
                        </p>
                      </div>
                    </div>{" "}
                  </Slider>
                  <div className="custom-arrows">
                    <div
                      className={`custom-arrow custom-prev ${
                        activeArrow === "prev" ? "active" : ""
                      }`}
                      onClick={handlePrev}
                    >
                      {">"}
                    </div>
                    <div
                      className={`custom-arrow custom-next ${
                        activeArrow === "next" ? "active" : ""
                      }`}
                      onClick={handleNext}
                    >
                      {"<"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <Testimonials /> */}
            <div
              className="register-container"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <div className="whole-contained3">
                <div className="images-contained">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt=""
                      className={image.className}
                    />
                  ))}
                </div>
                <div className="header1">
                  <h2>Register and be the first to find out when we launch!</h2>
                </div>
                <div className="button-contained">
                  <button>Register Now</button>
                </div>
              </div>
            </div>
            {/* <Register /> */}
            <Touch />
          </div>
        </>
      )}
    </>
  );
}
