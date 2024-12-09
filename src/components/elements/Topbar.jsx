// =========================================================
// =========================================================

const Topbar = ({
  bgColor = 'bg-blue ',
  textColor = 'text-white'
}) => {
  return <div className={`${bgColor} ${textColor} fw-bold fs-15 mb-2`}>
      <div className="container py-2 d-md-flex flex-md-row" style={{fontFamily:'Cinzel' ,color: '#003366' }}>
        <div className="d-flex flex-row align-items-center">
          <h5 className="mb-1 " style={{color:'white'}}>VIAN Turnkey Projects LLP</h5>
        </div>

        <div className="d-flex flex-row align-items-center me-6 ms-auto">
          <div className="icon text-white fs-22 mt-1 me-2">
            <i className="uil uil-email"></i>
            <h5 className="mb-1 " style={{color:'white'}}>VIAN Turnkey Projects – FZCO</h5>
          </div>

          <p className="mb-0"></p>
        </div>

        <div className="d-flex flex-row align-items-center"  >
        
          <p className="mb-0">
          <a href="mailto:  info@my-vian.com"  style={{color:'white'}}>
            
          info@my-vian.com
            </a>
          </p>
        </div>
      </div>
    </div>;
};

export default Topbar;