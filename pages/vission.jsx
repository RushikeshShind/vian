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
              <div className="col-lg-10 col-xxl-8 mx-auto text-center">
  <img src="/img/photos/vision.png" alt="Vision" className="mb-1"  style={{ maxWidth: '500px', height: 'auto' }} />
  <h1 className="display-1 mb-3">Vission</h1>
  <h6 className="display-5 mb-4">
    To be a leading global provider of innovative turnkey solutions, delivering projects that redefine excellence and inspire trust. 
    We aim to set new benchmarks in quality, sustainability, and efficiency, transforming ideas into lasting legacies while empowering 
    our clients to achieve their goals effortlessly.
  </h6>
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