import CountUp from 'react-countup';

const Facts17 = () => {
  return <section className="wrapper bg-gray position-relative min-vh-60 d-lg-flex align-items-center">
      <div className="col-lg-6 position-lg-absolute top-0 end-0 image-wrapper bg-image bg-cover h-100" style={{
      backgroundImage: 'url(/img/photos/Exp1.jpg)'
    }}>
        <div className="divider text-gray divider-v-start d-none d-lg-block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 1200">
            <g />
            <g>
              <g>
                <polygon fill="currentColor" points="6 0 0 0 0 1200 6 1200 54 0 6 0" />
              </g>
            </g>
          </svg>
        </div>
      </div>

      <div className="container">
        <div className="row gx-0">
          <div className="col-lg-6">
            <div className="pt-13 pb-15 pb-md-17 py-lg-16 pe-lg-15">
              <h2 className="fs-16 text-uppercase text-muted mb-3">Our Solutions</h2>
              <h3 className="display-3 ls-sm mb-5">In House Associate Partners​.</h3>
              <p className="mb-6">
              </p>
              <p className="mb-6">
            
              </p>
              <div className="row align-items-center counter-wrapper gy-6">
                <div className="col-md-6">
                  <h3 className="counter counter-lg mb-2">
                    <CountUp end={20}  suffix="+Year" />
                  </h3>
                  <h6 className="fs-17 mb-1"> Expertise Engineering & Design Team of Professional With Over 20 Years of Experience​.</h6>
                  
                </div>

                <div className="col-md-6">
                  <h3 className="counter counter-lg mb-2">
                    <CountUp end={10} suffix="+Year" />
                  </h3>
                  <h6 className="fs-17 mb-1">Experience Team of Professionals in Production & Manufacturing Field​</h6>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Facts17;