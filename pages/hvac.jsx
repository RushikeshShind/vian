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
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-19 pt-md-14 pb-md-22 text-center">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <div className="post-header">
                  <div className="post-category text-line">
                    <NextLink title="HVAC" href="#" className="hover" />
                  </div>

                  <h1 className="display-1 mb-3">HVAC System</h1>
                  <p className="lead px-md-12 px-lg-12 px-xl-15 px-xxl-18">
                  DESIGN BUILD MANUFACTURE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light wrapper-border">
          <div className="container pb-14 pb-md-16">
            <div className="row">
              <div className="col-12">
                <article className="mt-n21">
                  <FigureImage width={960} height={640} src="/img/photos/picture3.png" className="rounded mb-10 mb-md-10" />

                  <ProjectDetailsContent title="Conceptual Design" />

                  <div className="row mt-5 gx-md-6 gy-6">
                    {images.map(item => <div className="item col-md-6" key={item}>
                        <figure className="hover-scale rounded cursor-dark item-center">
                          <a href={item} data-glightbox data-gallery="project-1">
                            <Image width={960} height={640} src={item} alt="demo" style={{
                          width: '100%',
                          height: 'auto'
                        }} />
                          </a>
                        </figure>
                      </div>)}
                  </div>

                  <div className="row mt-8 mt-md-12">
                    <div className="col-md-10 offset-md-1 text-justify">
                      <h2 className="mb-4">Implementation</h2>
                      <p>
                      Our team will balance operational requirements, workflow optimization, running costs and building regulations
                      </p>

                      <p>
                        
                      </p>
                      
                    </div>
                  </div>
                  
                </article>
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