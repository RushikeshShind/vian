import { Fragment } from 'react'; // -------- custom component -------- //

import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import Breadcrumb from 'components/reuseable/Breadcrumb';
import PageProgress from 'components/common/PageProgress';
import ContactForm from 'components/common/ContactForm';
import NextLink from 'components/reuseable/links/NextLink'; // -------- data -------- //

const breadcrumb = [{
  id: 1,
  title: 'Home',
  url: '/'
}, {
  id: 2,
  title: 'Contact',
  url: '#'
}];

const Contact = () => {
  return <Fragment>
      <PageProgress />

      {
      /* ========== header section ========== */
    }
      <header className="wrapper bg-soft-primary">
        <Navbar language stickyBox={false} logoAlt="vian" navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark" button={<NextLink title="Contact" href="#" className="btn btn-sm btn-white rounded-pill" />} />
      </header>

      <main className="content-wrapper">
        {
        /* ========== page title section ========== */
      }
        <section className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white" style={{
        backgroundImage: 'url(/img/photos/bg3.jpg)'
      }}>
          <div className="container pt-17 pb-20 pt-md-19 pb-md-21 text-center">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h1 className="display-1 mb-3 text-white">Get in Touch</h1>
                <Breadcrumb className="text-white" data={breadcrumb} />
              </div>
            </div>
          </div>
        </section>

        <div className="wrapper bg-light angled upper-end">
          <div className="container pb-11">
            {
            /* ========== contact info section ========== */
          }
            <div className="row mb-14 mb-md-16">
              <div className="col-xl-10 mx-auto mt-n19">
                <div className="card">
                  <div className="row gx-0">
                    <div className="col-lg-6 align-self-stretch">
                      {<div className="map map-full rounded-top rounded-lg-start">
                        <img src="/img/photos/contactus.jpg" alt="" style={{ width: '500px', height: 'auto' }} />

                         
                      </div> }
                    </div>

                    <div className="col-lg-6">
                      <div className="p-10 p-md-11 p-lg-14">
                        <div className="d-flex flex-row">
                          <div>
                            <div className="icon text-primary fs-28 me-4 mt-n1">
                              <i className="uil uil-location-pin-alt" />
                            </div>
                          </div>
                          <div className="align-self-start justify-content-start">
                            <h5 className="mb-1"> Corporate Address :</h5>
                            <address>
                           
                            D wing 2146/2147, Oberoi Garden Estate, Chandivli Farm Road, Chandivli, Mumbai – 400072, Maharashtra India. 
                            </address>
                          </div>
                        </div>

                        <div className="d-flex flex-row">
                          <div>
                            <div className="icon text-primary fs-28 me-4 mt-n1">
                              <i className="uil uil-phone-volume" />
                            </div>
                          </div>
                          <div>
                            <h5 className="mb-1">Phone</h5>
                            <p>
                            +91 9967578862
                             <br />
                             
                            </p>
                          </div>
                        </div>

                        <div className="d-flex flex-row">
                          <div>
                            <div className="icon text-primary fs-28 me-4 mt-n1">
                              <i className="uil uil-envelope" />
                            </div>
                          </div>
                          <div>
                            <h5 className="mb-1">E-mail</h5>
                            <p className="mb-0">
                              <a href="mailto:Vinit.Chauhan@my-vian.com" className="link-body">
                              
                              Vinit.Chauhan@my-vian.com 
                              </a>
                            </p>
                            <p className="mb-0">
                              <a href="www.my-vian.com" className="link-body">
                             www.my-vian.com
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {
            /* ========== contact form section ========== */
          }
            <div className="row">
              <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                <h2 className="display-4 mb-3 text-center">Drop Us a Line</h2>
                <p className="lead text-center mb-10">
                  Reach out to us from our contact form and we will get back to you shortly.
                </p>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>

      {
      /* ========== footer section ========== */
    }
      <Footer8 />
    </Fragment>;
};

export default Contact;