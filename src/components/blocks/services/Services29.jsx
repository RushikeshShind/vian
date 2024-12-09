// -------- data -------- //
import React from "react";

const Services29 = () => {
  return (
    <section
      className="wrapper bg-white"
      style={{
        background: "",
        padding: "40px 20px",
        borderRadius: "16px",
        fontFamily:'Cinzel'
      }}
    >
      <div
        className="container py-20 py-md-10 text-center"
        style={{ color: "Blue" }}
      >
        <div className="row text-center">
          <div className="col-md-10 col-lg-10 col-xxl-8 mx-auto">
            <h3
              className="display-5 ls-sm mb-12 px-xl-0"
              style={{ color: "" }}
            >
              VIAN
            </h3>
          </div>

          {/* Vertical Layout for Cards */}
          <div
            className="cards-container"
            style={{
              display: "flex",
              flexDirection: "column", // Aligns cards vertically
              gap: "20px", // Space between cards
            }}
          >
            {[1, 2, 3, 4].map((item, index) => (
              <div
                className="card text-white h-100 gp-12"
                key={index}
                style={{
                  background: "linear-gradient(165deg, #002e64, #003161)",
                  borderRadius: "16px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div>
                  {/* <h4
                    className="display-4 fw-bold mb-3"
                    style={{
                      fontSize: "3rem",
                      color: "#fff",
                    }}
                  >
                    {item}
                  </h4> */}
                  <h5
                    className="fw-bold mb-3"
                    style={{
                      fontSize: "1.2rem",
                      color: "#fff",
                    }}
                  >
                    {item === 1 && "About VIAN – "}
                    {item === 2 && "Our Vision –"}
                    {item === 3 && "Our Mission –"}
                    {item === 4 && "Why choose VIAN - "}
                  </h5>
                  <p
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                      fontSize: "0.9rem",
                    }}
                  >
                    {item === 1 &&
                      "At VIAN, we specialize in delivering end-to-end turnkey solutions that transform your vision into reality. With years of experience in managing diverse turnkey projects, we take pride in offering comprehensive services—from initial design and planning to full-scale execution and final delivery. Our dedicated team of experts works closely with clients to ensure that each project is completed on time, within budget, and to the highest standards possible. Our commitment to excellence, innovation, and seamless project management sets us apart. Whether it's construction, infrastructure, or specialized installations, we handle every aspect with precision, giving you the peace of mind to focus on what matters most—your core business. Partner with us and experience the ease of a true turnkey approach, where we take care of everything, so you don’t have to."}
                    {item === 2 &&
                      "To be a leading global provider of innovative turnkey solutions, delivering projects that redefine excellence and inspire trust. We aim to set new benchmarks in quality, sustainability, and efficiency, transforming ideas into lasting legacies while empowering our clients to achieve their goals effortlessly."}
                    {item === 3 &&
                      "To deliver exceptional turnkey solutions through a commitment to quality, innovation, and customer satisfaction. We strive to simplify complex projects by managing every phase with expertise and integrity, ensuring timely completion, cost-effectiveness, and seamless execution. Our mission is to build lasting relationships by consistently exceeding expectations and creating value for our clients, stakeholders, and associates."}
                    {item === 4 &&
                      "In-house Manufacturing / 25+ projects completed / Global Projects /Turnkey Solution Provider /Proven Expertise / Innovative Solutions"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services29;
