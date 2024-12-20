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
      <section className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white" style={{
        backgroundImage: 'url(/img/photos/bg3.jpg)'
      }}>
          <div className="wrapper" >
            <div className="container py-13 py-md-17 text-center">
              <div className="row">
                <div className="col-lg-10 col-xxl-8 mx-auto">
                  <h1 className="display-1 mb-1" style={{color:'white', fontFamily:'Arial'}}>OUR MISSION
                  </h1>
                  <div style={{ borderBottom: "3px solidrgb(245, 251, 255)", /* Dark blue line */
        width: "100%", /* Adjust line width */
        margin: "1rem auto" /* Center and add spacing */
      }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wrapper bg-light" style={{fontFamily:'Arial'}}>
        <div className="container py-14 py-md-1">
          <div className="row mt-6">
            <div className="col-xl-10 mx-auto">
              <div className=" display-1 projects-tiles text-center">
              
                {/* Image and Content Side-by-Side */}
                <div className="row align-items-center mb-1">
                  {/* Image Column */}
                  
                  
                  {/* Content Column */}
                  <div className="col-md-15">
                    <h3 className="display-6  mb-1 text-center">
                     
                    To deliver exceptional turnkey solutions through a commitment to quality, innovation, and customer satisfaction. We strive to simplify complex projects by managing every phase with expertise and integrity, ensuring timely completion, cost-effectiveness, and seamless execution. Our mission is to build lasting relationships by consistently exceeding expectations and creating value for our clients, stakeholders, and associates.
                    </h3>
                  </div>
                </div>

                {/* Repeat for Second Image and Content */}
                {/* <div className="row align-items-center mb-1"> */}
                  {/* Image Column */}
                  {/* <div className="col-md-6 order-md-2">
                    <figure className="rounded">
                      <img
                        src="/img/photos/5899209.jpg"
                        alt="Clean Room Example"
                        style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
                      />
                    </figure>
                  </div> */}
                  {/* Content Column */}
                  {/* <div className="col-md-6 order-md-1"> */}
                    {/* <h3 className="display-15 ls-sm mb-2 text-justify">
                      
                      <p>Our commitment to excellence, innovation, and seamless project management sets us apart. Whether it's construction, infrastructure, or specialized installations, we handle every aspect with precision, giving you the peace of mind to focus on what matters most—your core business. Partner with us and experience the ease of a true turnkey approach, where we take care of everything, so you don’t have to.
                      </p>
                    </h3> */}
                  {/* </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

        {
        /* ========== projects section ========== */
      }
        {/* <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="row mt-6">
              <div className="col-xl-10 mx-auto">
                <div className="projects-tiles">
                  {projectList1.map(item => <ProjectCard1 {...item} key={item.id} />)}
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>

      {
      /* ========== footer section ========== */
    }
      <Footer18 />
    </Fragment>;
};

export default Projects;