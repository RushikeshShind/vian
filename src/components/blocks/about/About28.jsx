import { Fragment } from 'react';
import data from 'data/demo-27';

const About28 = () => {
  // reusable list item
  const item = title => <li>
    <i className="uil uil-check" />
    <span>{title}</span>
  </li>;

  return <Fragment>
    <div className="row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center mb-10 mb-md-20">
      <div className="col-lg-6">
        <div className="row gx-md-5 gy-5">
          <div className="col-md-11">
            <figure className="rounded">
              <img src="/img/photos/QAS.png" alt="description of the image" />
            </figure>
          </div>

          

          
        </div>
      </div>

      <div className="col-lg-6 mb-15">
        <h2 className="fs-15 text-uppercase text-muted mb-3"></h2>
        <h3 className="display-3 ls-sm mb-5"style={{color:'#134B70'}}>Quality Assurance Policy</h3>
        <p className="mb-5">
        <p>•Inhouse QAP Systems For Design, Engineering, Inward And
        Outward Of Material </p>
          <p>• Adopting Clients QAP And Incorporating The Same In The
          Project Along With Ours</p>
          <p>• Manufacturing Quality Assurance Systems (Incoming
          Quality, Process Quality, Final Inspection, Complete Life
          Cycle Of Manufacturing Including Product & Process
          Validations For Electronics, Plastics, Automotive And
          Medical Devices Manufacturing)</p>
        </p>

        
      </div>
    </div>

    
  </Fragment>;
};

export default About28;