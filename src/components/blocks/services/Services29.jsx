// -------- data -------- //
import data from 'data/demo-27';

const Services29 = () => {
  return <section className="wrapper bg-light">
      <div className="container py-19 py-md-20 text-center">
        <div className="row text-center">
          <div className="col-md-10 col-lg-10 col-xxl-8 mx-auto">
          
            <h3 className="display-5 ls-sm mb-12 px-xl-0">
           About VIAN
            </h3>
          </div>
        </div>

        <div className="row gx-lg-5 gx-xl-4 gy-6">
  {data.serviceList.map(({
    Icon,
    id,
    title,
    color,
    description
  }) => (
    <div className="col-md-6 col-lg-4 mb-4" key={id}>
      <div className="d-flex flex-row align-items-start gap-3">
        
        <div>
          <h4 className="fs-20 ls-sm mb-5">{title}</h4>
          <p className="mb-1">{description}</p>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>;
};

export default Services29;