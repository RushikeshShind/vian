import Image from 'next/image';
import { Fragment } from 'react'; // -------- custom hook -------- //

import useLightBox from 'hooks/useLightBox'; // -------- custom component -------- //

import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import FigureImage from 'components/reuseable/FigureImage';
import NextLink from 'components/reuseable/links/NextLink';
import ProjectDetailsContent from 'components/common/ProjectDetailsContent';
import ProjectDetailsNavigation from 'components/common/ProjectDetailsNavigation'; // -------- data -------- //

const images = ['/img/photos/Picture4.png'];

const ProjectDetails = () => {
  // used for image lightbox
  useLightBox();
  return <Fragment>
    <PageProgress />

    {
      /* ========== header section ========== */
    }
    <header className="wrapper bg-soft-primary">
      <Navbar language button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />} />
    </header>

    <main className="content-wrapper">
      <section className="wrapper bg-soft-primary " style={{fontFamily:'Arial'}}>
        <div className="container pt-10 pb-19 pt-md-14 pb-md-22 text-center">
          <div className="row">
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <div className="post-header">
               

                <h1 className="display-1 mb-5 hover" style={{fontFamily:'Arial', color:'#134B70'}}>HVAC SYSTEM</h1>
                <div style={{ 
        borderBottom: "3px solid #134B70", /* Dark blue line */
        width: "100%", /* Adjust line width */
        margin: "1rem auto" /* Center and add spacing */
      }}></div>
                <p className="lead px-md-12 px-lg-12 px-xl-15 px-xxl-18">
                  DESIGN BUILD MANUFACTURE <br /> HVAC design expertise
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      

{/* Projects Section */}
<section className="wrapper bg-light" style={{fontFamily:'Arial'}}>
  <div className="container py-14 py-md-1">
    <div className="row mt-6">
      <div className="col-xl-10 mx-auto">
        <div className="projects-tiles">
          {/* Image and Content Side-by-Side */}
          <div className="row align-items-center mb-1">
            {/* Image Column */}
            <div className="col-md-6">
              <figure className="rounded">
                <img
                  src="/img/hvac2.png"
                  alt="Unidirectional Flow"
                  style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
                />
              </figure>
            </div>
            {/* Content Column */}
            <div className="col-md-6">
              <h3 className="display-15 ls-sm mb-2 text-justify">
                <strong>Conceptual design : </strong> <br />
                Transforming your URS into a functional and detailed design.
              </h3>
            </div>
          </div>

          {/* Repeat for Second Image and Content */}
          <div className="row align-items-center mb-5">
            {/* Image Column */}
            <div className="col-md-6 order-md-2">
              <figure className="rounded">
                <img
                  src="/img/hvac.png"
                  alt="Clean Room Example"
                  style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
                />
              </figure>
            </div>
            {/* Content Column */}
            <div className="col-md-6 order-md-1">
              <h3 className="display-15 ls-sm mb-4 text-justify">
                <strong>Implementation:</strong> <br />
                Our team will balance operational
requirements, workflow optimization,
running costs and building regulations
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {
        /* ========== navigation section ========== */
      }
      {/* <ProjectDetailsNavigation /> */}
    </main>

    {
      /* ========== footer section ========== */
    }
    <Footer8 />
  </Fragment>;
};

export default ProjectDetails;