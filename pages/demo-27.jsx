import { Fragment } from 'react'; // -------- custom component -------- //

import { FAQ7 } from 'components/blocks/faq';
import { Blog7 } from 'components/blocks/blog';
import { Hero27 } from 'components/blocks/hero';
import { Facts17 } from 'components/blocks/facts';
import { About28 } from 'components/blocks/about';
import { Navbar } from 'components/blocks/navbar';
import { Footer18 } from 'components/blocks/footer';
import { Pricing10 } from 'components/blocks/pricing';
import { Process17 } from 'components/blocks/process';
import { Services29 } from 'components/blocks/services';
import PageProgress from 'components/common/PageProgress';
import { Testimonial21 } from 'components/blocks/testimonial';
import Topbar from 'components/elements/Topbar';
import { Clients1 } from 'components/blocks/clients';

const Demo27 = () => {
  
  return <Fragment  style={{fontFamily:'Cinzel'}}>
      <PageProgress style={{fontFamily:'Cinzel'}} />

      {
         <Topbar />
      /* ========== header ========== */
    }
      <header className="wrapper bg-light" style={{fontFamily:'Cinzel'}}>
        <Navbar info search stickyBox={false} navOtherClass="navbar-other ms-lg-4" navClassName="navbar navbar-expand-lg classic transparent position-absolute navbar-light" style={{fontFamily:'Cinzel'}} />
      </header>

      {
      /* ========== main content ========== */
    }
      <main className="content-wrapper" style={{fontFamily:'Cinzel'}}>
        {
        /* ========== hero section ========== */
      }
        <Hero27 style={{fontFamily:'Cinzel'}}/>

        {
        /* ========== what we do section ========== */
      }
     

        <Services29 style={{fontFamily:'Cinzel'}}/>

        {
        /* ========== how it works section ========== */
      }
        <Process17 style={{fontFamily:'Cinzel'}} />

        {
        /* ========== case study section ========== */
      }
        <Blog7 style={{fontFamily:'Cinzel'}}/>

        {
        /* ========== our solutions section ========== */
      }
        {/* <Facts17 /> */}

        <section className="wrapper bg-white"style={{fontFamily:'Cinzel'}}>
          <div className="container py-15 py-md-17"style={{fontFamily:'Cinzel'}}>
            {
            /* ========== why choose us section ========== */
          }
            <About28 style={{fontFamily:'Cinzel'}}/>

            {
            /* ========== happy customers section ========== */
          }
            <Testimonial21 style={{fontFamily:'Cinzel'}}/>

            {
            /* ========== our pricing section ========== */
          }
            <Pricing10 style={{fontFamily:'Cinzel'}}/>

            {
            /* ========== faq section ========== */
          }
           
            <FAQ7 style={{fontFamily:'Cinzel'}}/>
          </div>
          <h1 className="display-1 mb-1 text-center mb-12" style={{fontFamily:'Cinzel', color:'#003366'}}>Software Used</h1>
            <div className="px-lg-5 mb-1 mb-md-1" style={{fontFamily:'Cinzel'}}>
              <Clients1 style={{fontFamily:'Cinzel'}}/>
            </div>
        </section>
      </main>

      {
      /* ========== footer section ========== */
    }
      <Footer18 style={{fontFamily:'Cinzel'}}/>
    </Fragment>;
};

export default Demo27;