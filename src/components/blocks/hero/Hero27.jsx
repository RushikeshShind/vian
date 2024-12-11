import NextLink from 'components/reuseable/links/NextLink';

const Hero27 = () => {
  return <section className="wrapper image-wrapper bg-cover bg-image bg-xs-none bg-gray">
  <div
    style={{
      backgroundImage: 'url(/img/photos/head.jpeg)',
      filter: 'blur(1px)', // Blur only the image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100%', // Ensure it covers the section
      width: '100%',
      position: 'absolute',
      top: 80,
      left: 0,
      zIndex: -3 // Keep it behind other content
    }}></div>
    

      <div className="container pt-17 pb-15 py-sm-17 py-xxl-20">
        <div className="row">
          <div className="col-sm-6 col-xxl-5 text-center text-sm-start" data-cues="slideInDown" data-group="page-title" data-interval="-200" data-delay="500">
            <h2 className="display-1 fs-56 mb-4 mt-0 mt-lg-5 ls-xs pe-xl-5 pe-xxl-0" style={{color:'white'}}>
              We bring solutions to make life <span className="underline-3 style-3 yellow">easier</span>
            </h2>
            <p className="lead fs-23 lh-sm mb-7 pe-lg-5 pe-xl-5 pe-xxl-0"style={{color:'white'}}>
            we specialize in delivering end-to-end turnkey solutions
            </p>

           
          </div>
        </div>
      </div>
    </section>;
};

export default Hero27;