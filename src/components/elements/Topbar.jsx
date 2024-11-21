// =========================================================
// =========================================================
const Topbar = ({
  bgColor = 'bg-primary',
  textColor = 'text-white'
}) => {
  return <div className={`${bgColor} ${textColor} fw-bold fs-15 mb-2`}>
      <div className="container py-2 d-md-flex flex-md-row">
        <div className="d-flex flex-row align-items-center">
          <div className="icon text-white fs-22 mt-1 me-2">
            <i className="uil uil-location-pin-alt"></i>
          </div>

          <address className="mb-0">Chandivli, Mumbai – 400072, Maharashtra India. </address>
        </div>

        <div className="d-flex flex-row align-items-center me-6 ms-auto">
          <div className="icon text-white fs-22 mt-1 me-2">
            <i className="uil uil-phone-volume"></i>
          </div>

          <p className="mb-0">+91 9967578862</p>
        </div>

        <div className="d-flex flex-row align-items-center">
          <div className="icon text-white fs-22 mt-1 me-2">
            <i className="uil uil-message"></i>
          </div>

          <p className="mb-0">
            <a href="Vinit.Chauhan@my-vian.com" className="link-white hover">
            Vinit.Chauhan@my-vian.com
            </a>
          </p>
        </div>
      </div>
    </div>;
};

export default Topbar;