import data from 'data/demo-27';
import NextLink from 'components/reuseable/links/NextLink';

const Pricing10 = () => {
  return <div>
      <div className="row text-center">
        <div className="col-md-10 col-lg-8 col-xl-9 col-xxl-8 mx-auto">
          <h2 className="fs-15 text-uppercase text-muted mb-3"></h2>
          {/* <h3 className="display-3 ls-sm mb-10 px-xl-15">
          Our Competence
          </h3> */}
        </div>
      </div>
      {/* <div className="col-md-18 mb-20">
            <figure className="rounded">
              <img src="/img/photos/table1.png"  />
            </figure>
          </div> */}
          <h3 className="display-3 ls-sm mb-10 px-xl-15">
          Inhouse CRP & Ceiling Manufacturing Unit With Latest Technology
          </h3>
          <div className="col-md-15">
            <figure className="rounded">
              <img src="/img/photos/inhouse.png"  alt="description of the image"/>
            </figure>
          </div>
      {/* <div className="pricing-wrapper mb-10 mb-md-14">
        <div className="row gx-0 gy-6">
          {data.pricingList.map(({
          price,
          plan,
          features
        }) => <div className="col-md-6 col-lg-3" key={plan}>
              <div className={`pricing card shadow-none ${plan === 'Corporate' ? 'bg-gray' : ''}`}>
                <div className="card-body">
                  <h4 className="card-title ls-sm">{plan} Plan</h4>
                  <div className="prices text-dark">
                    <div className="price justify-content-start">
                      <span className="price-currency">$</span>
                      <span className="price-value">{price}</span>
                      <span className="price-duration">mo</span>
                    </div>
                  </div>

                  <ul className="icon-list bullet-green mt-7 mb-8">
                    {features.map((item, i) => {
                  const itemArr = item.split(' ');
                  return <li key={item + i}>
                          <i className="uil uil-check" />
                          <strong>{itemArr[0]}</strong> {itemArr[1]}
                        </li>;
                })}
                  </ul>

                  <NextLink href="#" title="Choose Plan" className={`btn ${plan === 'Corporate' ? 'btn-primary' : 'btn-soft-primary'}  rounded`} />
                </div>
              </div>
            </div>)}
        </div>
      </div> */}
    </div>;
};

export default Pricing10;