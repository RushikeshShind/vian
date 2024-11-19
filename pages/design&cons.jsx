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
                  <h1 className="display-1 mb-1">Design & Consultancy
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
          <div className="container py-14 py-md-16">
            <div className="row mt-6">
              <div className="col-xl-10 mx-auto">
                <div className="projects-tiles">
                <h3 className="display-3 ls-sm mb-12 px-xl-15 text-center">
                OUR COMPETENCE
                <div style={{ 
        borderBottom: "3px solid #2596be", /* Dark blue line */
        width: "50%", /* Adjust line width */
        margin: "1rem auto" /* Center and add spacing */
      }}></div>
          </h3>
          
          <div className="col-md-15 mb-12">
            <figure className="rounded">
              <img src="/img/photos/table1.png" alt="description of the image" />
            </figure>
          </div>

          <h3 className="display-3 ls-sm mb-10 px-xl-15 text-center">
          SERVICES WE OFFER
                <div style={{ 
        borderBottom: "3px solid #2596be", /* Dark blue line */
        width: "50%", /* Adjust line width */
        margin: "1rem auto" /* Center and add spacing */
      }}></div>
          </h3>
          
          <div className="col-md-15">
            <figure className="rounded">
              <img src="/img/docs/service.png" alt="description of the image" />
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