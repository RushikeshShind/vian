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
  <div className="container pt-10 pb-18 pb-md-20 pt-md-13 pb-lg-21 text-center">
    <div className="row">
      <div className="col-lg-8 mx-auto mb-1">
       
        <h3 className="display-1 mb-15" style={{fontFamily:'Cinzel', fontSize:'100px'}}>Coming Soon...</h3>
        <p className="lead text-muted mb-7">
        Contact our CEO directly on -
        </p>
        {/* Countdown Timer */}
        
        {/* Subscription Form */}
        <div className="input-group w-15 mx-auto">
          <a
          href="https://www.linkedin.com/in/vinit-chauhan-91217362/"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-1 mb-md-0 me-md-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="px"
            width="50"
            height="50"
            viewBox="0 0 48 48"
          >
            <path
              fill="#0288D1"
              d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
            ></path>
            <path
              fill="#FFF"
              d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
            ></path>
          </svg>
          
        </a>
        
          <a href="Vinit.Chauhan@my-vian.com">
          <svg
  xmlns="http://www.w3.org/2000/svg"
  width="50"
  height="50"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="feather feather-mail"
>
  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
  <polyline points="22,6 12,13 2,6"></polyline>
</svg>

          </a>
        
        </div> 
      </div>
    </div>
  </div>
 
</section>


    
        {
        /* ========== faq section ========== */
      }
        {/* <FAQ2 titleColor="primary" /> */}
      </main>

      {
      /* ========== footer section ========== */
    }
      <Footer8 />
    </Fragment>;
};

export default Career;