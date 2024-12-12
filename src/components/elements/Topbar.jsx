// =========================================================
// =========================================================

const Topbar = ({
  bgColor = '#134B70',
  textColor = 'text-white'
}) => {
  return (
    <div className={`${bgColor} ${textColor} fw-bold fs-15 mb-2`}>
      <div
        className="container py-2 d-md-flex flex-md-row"
        style={{ fontFamily: 'Cinzel', color: '#003366' }} // Updated color
      >
        <div className="d-flex flex-row align-items-center">
          <h5 className="mb-1" style={{color:'#003366'}} >VIAN Turnkey Projects LLP</h5>
        </div>
       
        <div className="d-flex flex-row align-items-center me-25 ms-auto ">
        <h5 className="mb-1 text-center " style={{color:'#003366'}} >VIAN Turnkey Projects – FZCO</h5>
          <div className="icon text-white fs-22 mt-1 me-2">
            <i className="uil uil-email"></i>

            
          </div>

          <p className="mb-0"></p>
        </div>

        <div className="d-flex flex-row align-items-center"  >
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="px" width="40" height="40" viewBox="0 0 48 48">
<path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
</svg>
          <p className="mb-0"  >
          <a href="mailto:  info@my-vian.com" style={{color:'#003366'}} >
            
          info@my-vian.com
            </a>
          </p>
        </div>
      </div>
    </div>);
};

export default Topbar;