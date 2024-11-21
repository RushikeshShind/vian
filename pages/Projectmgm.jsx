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
      <section className="wrapper bg-gray">
        <div className="container pt-10 pb-12 pt-md-14 pb-md-16 text-center">
          <div className="row">
            <div className="col-md-7 col-lg-6 col-xl-5 mx-auto">
              <h1 className="display-1 mb-3"> Project Management &Consultancy</h1>
              <p className="lead px-lg-5 px-xxl-8">

              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-1">
          <div className="row mt-6">
            <div className="col-xl-10 mx-auto">
              <div className="projects-tiles">
                {/* Image and Content Side-by-Side */}
                <div className="row align-items-center mb-15">
                  {/* Image Column */}
                  <div className="col-md-6">
                    <figure className="rounded">
                      <img
                        src="/img/photos/about3.jpg"
                        alt="Unidirectional Flow"
                        style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
                      />
                    </figure>
                  </div>
                  {/* Content Column */}
                  <div className="col-md-6">
                    <h3 className="display-15 ls-sm mb-4 text-justify">
                      <strong>Project Scope</strong> <br />
                      An appropriately detailed Work breakdown structure will be developed to ensure the project scope is properly agreed and understood by all stakeholders. This also allows the complete project to be split into appropriate sub- projects and/or phases.
                    </h3>
                  </div>
                </div>

                {/* Repeat for Second Image and Content */}
                <div className="row align-items-center mb-15">
                  {/* Image Column */}
                  <div className="col-md-6 order-md-2">
                    <figure className="rounded">
                      <img
                        src="/img/photos/about9.jpg"
                        alt="Clean Room Example"
                        style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
                      />
                    </figure>
                  </div>
                  {/* Content Column */}
                  <div className="col-md-6 order-md-1">
                    <h3 className="display-15 ls-sm mb-4 text-justify">
                      <strong >Project Management</strong> <br />
                      <p>• Engineering, Project and
                        Construction Management
                        (EPCM)  <br />
                        • Project Management
                        Consultancy  <br />
                        • Project Integration, Scope,
                        Time, Cost Resource and
                        Risk Management </p>
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