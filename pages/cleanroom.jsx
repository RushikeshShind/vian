import { Fragment } from 'react'; // -------- custom component -------- //

import { Navbar } from 'components/blocks/navbar';
import { Footer18 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
import { ProjectCard1 } from 'components/reuseable/project-cards'; // -------- custom hook -------- //

import useIsotope from 'hooks/useIsotope';
import useLightBox from 'hooks/useLightBox';
import useTooltip from 'hooks/useTooltip'; // -------- data -------- //

import { projectList1 } from 'data/project';

const Projects = () => {
  // used for masonry layout
  useIsotope(); // used for lightbox

  useLightBox(); // added tooltip library

  useTooltip();
  return <Fragment>
      <PageProgress />

      {
      /* ========== header section ========== */
    }
      <header className="wrapper bg-gray">
        <Navbar language navClassName="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light" button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />} />
      </header>

      <main className="content-wrapper">
        {
        /* ========== title section ========== */
      }
        <section className="section-frame overflow-hidden">
          <div className="wrapper bg-gray">
            <div className="container py-13 py-md-17 text-center">
              <div className="row">
                <div className="col-lg-10 col-xxl-8 mx-auto">
                  <h1 className="display-1 mb-1">Clean Room Panels
                  </h1>
                  <div style={{ 
        borderBottom: "3px solid #2596be", /* Dark blue line */
        width: "100%", /* Adjust line width */
        margin: "1rem auto" /* Center and add spacing */
      }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {
        /* ========== projects section ========== */
      }
        <section className="wrapper bg-light">
  <div className="container py-14 py-md-1">
    <div className="row mt-6">
      <div className="col-xl-10 mx-auto">
        <div className="projects-tiles">
          {/* Image and Content Side-by-Side */}
          <div className="row align-items-center mb-15">
            {/* Image Column */}
            <div className="col-md-6">
              <figure className="rounded">
                <img
                  src="/img/photos/123.png"
                  alt="Unidirectional Flow"
                  style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
                />
              </figure>
            </div>
            {/* Content Column */}
            <div className="col-md-6">
              <h4 className="display-15 ls-sm mb-4 text-justify">
                <strong>Unidirectional Flow (Laminar Air Flow):</strong> <br />  </h4>
                <br />
                • Air flow pattern: unidirectional <br />
                <br />
                • Velocity 90±20 FPM <br />
                <br />
                • Equipment's are having cleanliness class ISO 5 / class 100 falls under this category. <br />
                <br />
                • Flow type – once through / recirculated.
             
            </div>
          </div>

          {/* Repeat for Second Image and Content */}
          <div className="row align-items-center mb-15">
            {/* Image Column */}
            <div className="col-md-6 order-md-2">
              <figure className="rounded">
                <img
                  src="/img/photos/clean1.png"
                  alt="Clean Room Example"
                  style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
                />
              </figure>
            </div>
            {/* Content Column */}
            <div className="col-md-6 order-md-1">
                    <h3 className="display-10 ls-sm mb-4 text-justify">
                      <strong>Cleanroom Equipment Pressure: </strong> <br /></h3>
                      
                      <p>In medical settings, a positive pressure room (protective
                      environment) allows staff to keep vulnerable patients safe
                      from infections and disease. In contrast, a negative
                      pressure room uses lower air pressure to allow outside air
                      into the segregated environment. </p>
                      <br/>
                      1. Positive Pressure. <br />
                      2. Negative Pressure . <br />
                      <br/>
                      Differential Pressure Gauge :
                      Pressure Gauge is used in Equipment's to check the
                      Pressure Drop across HEPA with respect to Ambient .
                      Range -0-50 MM WC / 500 Pascal .<br/>
                      <br/>
                      1. Magnehelic <br />
                      2. Photohelic <br />
                      3. Digihelic <br />
                    
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </main>

      {
      /* ========== footer section ========== */
    }
      <Footer18 />
    </Fragment>;
};

export default Projects;