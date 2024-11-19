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
                <h3 className="display-15 ls-sm mb-1 px-xl-1 text-center">
                Unidirectional Flow (Laminar Air Flow): <br />• Air flow pattern: unidirectional; <br />• Velocity 90±20 FPM <br />
• Equipment's are having cleanliness class ISO 5 / class 100 falls under this category. <br /> • Flow type – once through / recirculated .

                <div style={{ 
        borderBottom: "3px solid #2596be", /* Dark blue line */
        width: "50%", /* Adjust line width */
        margin: "1rem auto" /* Center and add spacing */
      }}></div>
          </h3>
          
          <div className="col-md-1 mb-14  ">
            <figure className="rounded">
              <img src="/img/photos/123.png" alt="Centered Image" className="centered-image" />
            </figure>
          </div>

          <h3 className="display-3 ls-sm mb-10 px-xl-15 text-center">
          
                <div style={{ 
        borderBottom: "3px solid #2596be", /* Dark blue line */
        width: "50%", /* Adjust line width */
        margin: "1rem auto" /* Center and add spacing */
      }}></div>
          </h3>
          
          <div className="col-md-5">
            <figure className="rounded">
             <img src="/img/photos/clean1.png" alt="description of the image"/>
            </figure>
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