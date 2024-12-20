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
      <section className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white" style={{
        backgroundImage: 'url(/img/photos/bg3.jpg)'
      }}>
          <div className="wrapper" >
            <div className="container py-13 py-md-17 text-center">
              <div className="row">
                <div className="col-lg-10 col-xxl-8 mx-auto">
                  <h1 className="display-1 mb-1" style={{color:'white', fontFamily:'Arial'}}>PROJECT MANAGEMENT
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


      {/* Projects Section */}
      <section className="wrapper bg-light">
  <div className="container py-14 py-md-1">
    <div className="row mt-6">
      <div className="col-xl-10 mx-auto">
        <h2 className='display-1 text-center'style={{color:'#134B70',fontFamily:'Arial'}}>FROM START
        TO SUCCESS</h2>
        <h6 className='text-center'>Step-by-step guide of VIAN</h6>
        <h4 className='display-1 text-center mb-15'>Project Management</h4>
        <div className="projects-tiles">
          {/* Monitoring and Controlling Section */}
          <div 
  className="row align-items-center mb-15 shadow-box" 
  style={{
    fontFamily:'Arial', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
    padding: '20px', 
    borderRadius: '10px', 
    backgroundColor: '#fff'
  }}
>
  {/* Left Column for Number */}
  <div className="col-md-4 text-center">
    <h1 
      className="display-4 fw-bold text-muted" 
      style={{ fontSize: "7rem", marginBottom: "0" }}
    >
      01
    </h1>
  </div>
  {/* Right Column for Content */}
  <div className="col-md-8">
    <h2 
      className="display-5 mb-2" 
      style={{ color: '#083e62' }}
    >
      PROJECT INITIATION
    </h2>
    <ul className="display-6">
      <li>Clarify the purpose, scope, and objectives of the project.</li>
      <li>Identify and engage key stakeholders.</li>
      <li>Develop the Project Charter to formalize the project.</li>
    </ul>
  </div>
</div>


<div 
  className="row align-items-center mb-15 shadow-box" 
  style={{
    fontFamily:'Arial', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
    padding: '20px', 
    borderRadius: '10px', 
    backgroundColor: '#fff'
  }}
>
            {/* Left Column for Number */}
            <div className="col-md-4 text-center">
              <h1 className="display-4 fw-bold text-muted" style={{ fontSize: "7rem", marginBottom: "0" }}>
                02
              </h1>
            </div>
            {/* Right Column for Content */}
            <div className="col-md-8">
              <h2 className="display-5   mb-2" style={{color:'#083e62'}}>PROJECT PLANNING</h2>
              <ul className="display-6 ">
                <li>Design a detailed project plan to guide
                the team.</li>
                <li>Break down tasks with a work
                breakdown structure (WBS).</li>
                <li>Create a risk management strategy to
                address uncertainties.</li>
              </ul>
            </div>
          </div>

          <div 
  className="row align-items-center mb-15 shadow-box" 
  style={{
    fontFamily:'Arial', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
    padding: '20px', 
    borderRadius: '10px', 
    backgroundColor: '#fff'
  }}
>
            {/* Left Column for Number */}
            <div className="col-md-4 text-center">
              <h1 className="display-4 fw-bold text-muted" style={{ fontSize: "7rem", marginBottom: "0" }}>
                03
              </h1>
            </div>
            {/* Right Column for Content */}
            <div className="col-md-8">
              <h2 className="display-5  mb-2" style={{color:'#083e62'}}>PROJECT
              EXECUTION</h2>
              <ul className="display-6 ">
                <li>Begin implementation of the project plan.</li>
                <li>Build efficient workflows and assign tasks
                effectively.</li>
                <li>Foster clear communication to keep the
                team aligned.</li>
              </ul>
            </div>
          </div>


          <div 
  className="row align-items-center mb-15 shadow-box" 
  style={{
    fontFamily:'Arial', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
    padding: '20px', 
    borderRadius: '10px', 
    backgroundColor: '#fff'
  }}
>
            {/* Left Column for Number */}
            <div className="col-md-4 text-center">
              <h1 className="display-4 fw-bold text-muted" style={{ fontSize: "7rem", marginBottom: "0" }}>
              04
              </h1>
            </div>
            {/* Right Column for Content */}
            <div className="col-md-8">
              <h2 className="display-5 mb-2" style={{color:'#083e62'}}>MONITORING &
              CONTROLLING</h2>
              <ul className="display-6 ">
                <li>Conduct regular reviews to track
                progress.</li>
                <li>Measure outcomes against KPIs (Key
                  Performance Indicators).</li>
                <li>Make adjustments when necessary to
                stay on course.</li>
              </ul>
            </div>
          </div>
          
          <div 
  className="row align-items-center mb-15 shadow-box" 
  style={{
    fontFamily:'Arial', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
    padding: '20px', 
    borderRadius: '10px', 
    backgroundColor: '#fff'
  }}
>
            {/* Left Column for Number */}
            <div className="col-md-4 text-center">
              <h1 className="display-4 fw-bold text-muted" style={{ fontSize: "7rem", marginBottom: "0" }}>
                05
              </h1>
            </div>
            {/* Right Column for Content */}
            <div className="col-md-8">
              <h2 className="display-5  " style={{color:'#083e62'}}>PROJECT
              CLOSURE</h2>
              <ul className="display-6 ">
                <li>Ensure all deliverables are completed.</li>
                <li>Reflect on successes and challenges with
                the team.</li>
                <li>Document lessons learned for future
                projects.</li>
              </ul>
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