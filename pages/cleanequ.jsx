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
      <section className="wrapper bg-soft-primary ">
        <div className="container pt-10 pb-19 pt-md-14 pb-md-22 text-center">
          <div className="row">
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <div className="post-header">
                <div className="post-category text-line">
                  <NextLink title="Airflow " href="#" className="hover" />
                </div>

                <h1 className="display-1 mb-5">Cleanroom Equipment's</h1>
                <p className="lead px-md-12 px-lg-12 px-xl-15 px-xxl-18">
                 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

{/* Projects Section */}
<section className="wrapper bg-light">
<h1 className="display-1 mb-5 text-center">Types of Cleanroom Equipment's</h1>
<h4 className="display-8 mb-4 text-center">1. Pass Box – Static & Dynamic <br/>
2. Laminar Air Flow Unit (Ceiling Suspended) <br/>
3. Laminar Air Flow Unit (Stand Mounted) <br/>
4. Horizontal Laminar Flow Unit<br/>
5. Sampling / Dispensing Booth<br/>
6. Bio-safety Cabinets<br/>
7. Dynamic Garment Storage Cabinet<br/>
8. Mobile Trolley<br/>
9. Air Shower<br/>
10. Mist Shower<br/>
11. De-dusting Booth<br/>
12. Online Sampling Booth</h4>
  <div className="container py-14 py-md-10">
    <div className="row mt-6">
      <div className="col-xl-10 mx-auto">
        <div className="projects-tiles">
          {/* Image and Content Side-by-Side */}
          <div className="row align-items-center mb-1">
            {/* Image Column */}
            <div className="col-md-6 mb-1">
              <figure className="rounded">
                <img
                  src="/img/docs/equ/Static-box.jpg"
                  alt="Unidirectional Flow"
                  style={{ Width: "1080px", height: "auto", borderRadius: "8px" }}
                />
                 
              </figure>
            </div>
            {/* Content Column */}
            <div className="col-md-6">
              <h3 className="display-15 ls-sm mb-10 text-justify">
                <strong> </strong> <br />
                STATIC PASSBOX
              </h3>
              <h6>Static Pass Box is usually in transfer between the same Classified Room.</h6>
            </div>
          </div>
          
          <div className="row align-items-center mb-1">
            {/* Image Column */}
            <div className="col-md-6 mb-1">
              <figure className="rounded">
                <img
                  src="/img/docs/equ/Dynamic-box.jpg"
                  alt="Unidirectional Flow"
                  style={{ Width: "1080px", height: "auto", borderRadius: "8px" }}
                />
                 
              </figure>
            </div>
            {/* Content Column */}
            <div className="col-md-6">
              <h3 className="display-15 ls-sm mb-10 text-justify">
                <strong> </strong> <br />
                DYNAMIC PASSBOX
              </h3>
              <h6>Dynamic Pass box is usually in transfer between the different Classified
              Room.</h6>
            </div>
          </div>

          <div className="row align-items-center mb-1">
            {/* Image Column */}
            <div className="col-md-6 mb-1">
              <figure className="rounded">
                <img
                  src="/img/docs/equ/Luminous.jpg"
                  alt="Unidirectional Flow"
                  style={{ Width: "1080px", height: "auto", borderRadius: "8px" }}
                />
                 
              </figure>
            </div>
            {/* Content Column */}
            <div className="col-md-6">
              <h3 className="display-15 ls-sm mb-10 text-justify">
                <strong> </strong> <br />
                LAMINAR AIR FLOW UNIT- CEILING MOUNTED /STAND
              </h3>
              <h6>Vertical Laminar Flow unit is used to be achieved with cleanliness Level ISO-5 in Work StaQon to Prevent the Product.</h6>
            </div>
          </div>
          
          <div className="row align-items-center mb-1">
            {/* Image Column */}
            <div className="col-md-6 mb-1">
              <figure className="rounded">
                <img
                  src="/img/docs/equ/Sampling.jpg"
                  alt="Unidirectional Flow"
                  style={{ Width: "1080px", height: "auto", borderRadius: "8px" }}
                />
                 
              </figure>
            </div>
            {/* Content Column */}
            <div className="col-md-6">
              <h3 className="display-15 ls-sm mb-1 text-justify">
                <strong> </strong> <br />
                SAMPLING/DISPENSING BOOTH
              </h3>
              <h6>Downward Forced air of sampling booth extracts at low level into the
booths cleanliness filtration system where contaminated particles
recirculated into the booth Air Flow.</h6>
            </div>
          </div>

          <div className="row align-items-center mb-1">
            {/* Image Column */}
            <div className="col-md-6 mb-1">
              <figure className="rounded">
                <img
                  src="/img/docs/equ/b2.png"
                  alt="Unidirectional Flow"
                  style={{ Width: "1080px", height: "auto", borderRadius: "8px" }}
                />
                 <img
                  src="/img/docs/equ/bz.jpg"
                  alt="Unidirectional Flow"
                  style={{ Width: "1080px", height: "auto", borderRadius: "8px" }}
                />
              </figure>
            </div>
            {/* Content Column */}
            <div className="col-md-6">
              <h3 className="display-15 ls-sm mb-1 text-justify">
                <strong> </strong> <br />
                DISPENSING BOOTH
              </h3>
              <h6>Downward Forced air of sampling booth extracts at low level into the
booths cleanliness filtration system where contaminated particles
recirculated into the booth Air Flow.</h6>
            </div>
          </div>
          <div className="row align-items-center mb-1">
            {/* Image Column */}
            <div className="col-md-6 mb-1">
              <figure className="rounded">
                <img
                  src="/img/docs/equ/Biosafe.jpg"
                  alt="Unidirectional Flow"
                  style={{ Width: "1080px", height: "auto", borderRadius: "8px" }}
                />
                 
              </figure>
            </div>
            {/* Content Column */}
            <div className="col-md-6">
              <h3 className="display-15 ls-sm mb-1 text-justify">
                <strong> </strong> <br />
                BIOSAFETY CABINET
              </h3>
              <h6>A biosafety cabinet (BSC)—also called a biological safety cabinet or microbiological safety cabinet—is an enclosed, ventilated laboratory workspace for safely working with materials contaminated with (or potenQally contaminated with) pathogens requiring a defined biosafety level.</h6>
            </div>
          </div>

          <div className="row align-items-center mb-1">
            {/* Image Column */}
            <div className="col-md-6 mb-1">
              <figure className="rounded">
                <img
                  src="/img/docs/equ/Air.jpg"
                  alt="Unidirectional Flow"
                  style={{ Width: "1080px", height: "auto", borderRadius: "8px" }}
                />
                 
              </figure>
            </div>
            {/* Content Column */}
            <div className="col-md-6">
              <h3 className="display-15 ls-sm mb-1 text-justify">
                <strong> </strong> <br />
                AIR SHOWER
              </h3>
              <h6>Air Showers are self contained chambers installed at entrances to cleanrooms and other controlled environments. They minimize particulate matter entering or exiting the clean space. Personnel and materials entering or exiting the controlled environment are “scrubbed” by high velocity HEPA filtered air jets with velociQes of 20-22m/s (4000-4300fpm). </h6>
            </div>
          </div>

          <div className="row align-items-center mb-1">
            {/* Image Column */}
            <div className="col-md-6 mb-1">
              <figure className="rounded">
                <img
                  src="/img/docs/equ/Mist.jpg"
                  alt="Unidirectional Flow"
                  style={{ Width: "1080px", height: "auto", borderRadius: "8px" }}
                />
                 
              </figure>
            </div>
            {/* Content Column */}
            <div className="col-md-6">
              <h3 className="display-15 ls-sm mb-1 text-justify">
                <strong> </strong> <br />
                MIST SHOWER
              </h3>
              <h6>Mist Shower is a chamber installed at exit of clean room where Hazardous Product like Onco Drugs, Hormonal injectables, Sterile products and likewise. It is designed to provide protecQon during degowning process while exiting the area. </h6>
            </div>
          </div>

          <div className="row align-items-center mb-1">
            {/* Image Column */}
            <div className="col-md-6 mb-1">
              <figure className="rounded">
                <img
                  src="/img/docs/equ/Debusting.jpg"
                  alt="Unidirectional Flow"
                  style={{ Width: "1080px", height: "auto", borderRadius: "8px" }}
                />
                 
              </figure>
            </div>
            {/* Content Column */}
            <div className="col-md-6">
              <h3 className="display-15 ls-sm mb-1 text-justify">
                <strong> </strong> <br />
                DEDUSTING BOOTH
              </h3>
              <h6>Arrest dust at source with De-dusting Tunnel. Reduce dust levels, improve product quality and yield. Our De-dusting Tunnels remove loose particles and dust that accumulate on raw material containers including drums, cartons and bags prior to sampling. </h6>
            </div>
          </div>

          <div className="row align-items-center mb-1">
            {/* Image Column */}
            <div className="col-md-6 mb-1">
              <figure className="rounded">
                <img
                  src="/img/docs/equ/Garment.jpg"
                  alt="Unidirectional Flow"
                  style={{ Width: "1080px", height: "auto", borderRadius: "8px" }}
                />
                 
              </figure>
            </div>
            {/* Content Column */}
            <div className="col-md-6">
              <h3 className="display-15 ls-sm mb-1 text-justify">
                <strong> </strong> <br />
                DYNAMIC GARMENT
STORAGE CABINET
              </h3>
              <h6>Cleanroom garments can accumulate contaminaQon during storage and between laundry washes, which in turn may lead to lower product yields and increased product quality issues . The enhanced filtraQon system on the garment storage cabinet is designed to provide the highest level of air quality within the work zone, meeQng all relevant standards.</h6>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</section>

{
            /* ========== our clients section ========== */
          }
         
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