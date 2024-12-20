import { Fragment } from 'react'; // -------- custom component -------- //

import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import BlogTemplate from 'components/common/BlogTemplate';
import BlogSidebar from 'components/reuseable/BlogSidebar';
import NextLink from 'components/reuseable/links/NextLink';

const BlogThree = () => {
  return <Fragment>
    <PageProgress />

    {
      /* ========== header section ========== */
    }
    <header className="wrapper bg-gray">
      <Navbar search button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />} />
    </header>

    <main className="content-wrapper">
      {
        /* ========== title section ========== */
      }
      <section className="wrapper bg-gray" style={{fontFamily:'Cinzel'}}>
        <div className="container pt-10 pb-12 pt-md-14 pb-md-16 text-center" >
          <div className="row">
            <div className="col-md-7 col-lg-6 col-xl-5 mx-auto">
              <h1 className="display-1 mb-3"  style={{ 
    borderBottom: '1px solid #003366', 
    paddingBottom: '5px' // Optional, for spacing between text and underline
  }}> ABOUT US </h1>
              <p className="lead px-lg-5 px-xxl-8">

              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section className="wrapper bg-light" style={{fontFamily:'Cinzel'}}>
        <div className="container py-14 py-md-1">
          <div className="row mt-6">
            <div className="col-xl-10 mx-auto">
              <div className="projects-tiles">
                {/* Image and Content Side-by-Side */}
                <div className="row align-items-center mb-15">
                  {/* Image Column */}
                  
                  <div className="col-md-6">
                  <img src="img/vian.png" alt="" />
                  </div>
                  {/* Content Column */}
                  <div className="col-md-6">
                    <h3 className="display-15 ls-sm mb-4 text-justify">
                     
                    At VIAN, we specialize in delivering end-to-end turnkey solutions that transform your vision into reality. With years of experience in managing diverse turnkey projects, we take pride in offering comprehensive services—from initial design and planning to full-scale execution and final delivery. Our dedicated team of experts works closely with clients to ensure that each project is completed on time, within budget, and to the highest standards possible.
                    </h3>
                  </div>
                </div>

                {/* Repeat for Second Image and Content */}
                <div className="row align-items-center mb-1">
                  {/* Image Column */}
                  <div className="col-md-6 order-md-2">
                  
                  </div>
                  {/* Content Column */}
                  <div className="col-md-6 order-md-1" >
                    <h3 className="display-15 ls-sm mb-2 text-justify">
                      
                      <p>Our commitment to excellence, innovation, and seamless project management sets us apart. Whether it's construction, infrastructure, or specialized installations, we handle every aspect with precision, giving you the peace of mind to focus on what matters most—your core business. Partner with us and experience the ease of a true turnkey approach, where we take care of everything, so you don’t have to.
                      </p>
                    </h3>
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
    <Footer8 />
  </Fragment>;
};

export default BlogThree;