import { Fragment } from 'react'; // -------- custom hook -------- //

import useIsotope from 'hooks/useIsotope'; // -------- custom component -------- //

import { FAQ2 } from 'components/blocks/faq';
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import { JobPostCard1 } from 'components/reuseable/job-cards';
import { ServiceCard3 } from 'components/reuseable/service-cards';
import { TestimonialCard3 } from 'components/reuseable/testimonial-cards';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink'; // -------- data -------- //

import data from 'data/career-page-1';

const Career = () => {
  // used for masonry layout design
  useIsotope();
  return <Fragment>
      <PageProgress />
      {
      /* ========== header section ========== */
    }
      <header className="wrapper bg-soft-primary">
        <Navbar language button={<NextLink title="Contact" href="contact-1" className="btn btn-sm btn-primary rounded-pill" />} />
      </header>

      <main className="content-wrapper">
        {
        /* ========== page title section ========== */
      }
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-18 pb-md-18 pt-md-14 pb-lg-21 text-center">
            <div className="row">
              <div className="col-lg-8 mx-auto mb-11">
                <h1 className="fs-15 text-uppercase text-primary mb-3">Project</h1>
                <h3 className="display-1">Turnkey Projects - Completed</h3>
              </div>
            </div>
          </div>
        </section>

        {
        /* ========== features section ========== */
      }
        <section className="wrapper bg-light">
          <div className="container pb-23 pb-md-25">
            <div className="row mb-14">
              <div className="col-12 mt-n18 mt-md-n20 mt-lg-n21 position-relative">
                <div className="shape bg-dot red rellax w-16 h-18" style={{
                top: '1rem',
                left: '-3.2rem'
              }} />
                <div className="shape pale-primary w-19 h-19 rellax" style={{
                bottom: '2rem',
                right: '-3rem'
              }}>
                  {/* <svg viewBox="0 0 500 549.53" xmlns="http://www.w3.org/2000/svg" className="svg-inject icon-svg w-100 h-100">
                    <path className="svg-fill" d="M250 549.39c-15.51 0-30.05-3.46-40.94-9.75l-168-97C18.5 429.63.14 397.82.14 371.75v-194c0-26.07 18.36-57.88 40.94-70.91l168-97C220 3.6 234.49.14 250 .14s30.05 3.46 40.94 9.75l168 97c22.58 13 40.94 44.84 40.94 70.91v194c0 26.07-18.36 57.88-40.94 70.91l-168 97c-10.89 6.22-25.43 9.68-40.94 9.68z" />
                  </svg> */}
                </div>

                <figure className="rounded mb-15">
                  <img src="/img/photos/project2.png" srcSet="/img/photos/about18@2x.jpg 2x" alt="" />
                </figure>
               
                <h3 className="display-5 mb-5">Turnkey Projects </h3>
                <figure className="">
                  <img src="/img/photos/project3.png" srcSet=" " alt="" />
                </figure>
              </div>
            </div>

          </div>
        </section>

        
    
      </main>

      {
      /* ========== footer section ========== */
    }
      <Footer8 />
    </Fragment>;
};

export default Career;