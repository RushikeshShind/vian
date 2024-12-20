import Link from 'next/link';
import { Fragment, useRef } from 'react'; // -------- custom hook -------- //

import useSticky from 'hooks/useSticky';
import useNestedDropdown from 'hooks/useNestedDropdown'; // -------- custom component -------- //

import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
import ListItemLink from 'components/reuseable/links/ListItemLink';
import DropdownToggleLink from 'components/reuseable/links/DropdownToggleLink'; // -------- partial header component -------- //

import Info from './partials/Info';
import Search from './partials/Search';
import Social from './partials/Social';
import Signin from './partials/Signin';
import Signup from './partials/Signup';
import Language from './partials/Language';
import MiniCart from './partials/MiniCart'; // -------- data -------- //

import { demos, pages, blogsNavigation, blocksNavigation, projectsNavigation, documentionNavigation } from 'data/navigation'; // ===================================================================

// ===================================================================
const Navbar = props => {
  const {
    navClassName,
    info,
    search,
    social,
    language,
    button,
    cart,
    fancy,
    navOtherClass,
    stickyBox,
    logoAlt
  } = props;
  useNestedDropdown();
  const sticky = useSticky(300);
  const navbarRef = useRef(null); // dynamically render the logo

  const logo = sticky ? 'VIAN1' : logoAlt ?? 'VIAN1'; // dynamically added navbar classname

  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed'; // render inner nav item links

  const renderLinks = links => {
    return links.map(item => <ListItemLink href={item.url} title={item.title} linkClassName="dropdown-item" key={item.id} />);
  }; // all main header contents


  const headerContent = <Fragment>
    <div className="navbar-brand" style={{ fontFamily:'Arial' }}>
  <NextLink href="/" title={
    <img 
      alt="logo" 
      src={`/img/VIAN1.png`} 
      style={{ 
        width: '100px', 
        height: '50px', 
        maxWidth: '100%', 
        height: 'auto' 
      }} 
    />
  } />
</div>




      <div id="offcanvas-nav" data-bs-scroll="true" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
        <div className="offcanvas-header d-lg-none">
          <h3 className="text-white    fs-20 mb-1">Vian</h3>
          <button type="button" aria-label="Close" data-bs-dismiss="offcanvas" className="btn-close btn-close-blue" />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-90"style={{fontFamily:'Arial'}}>
          <ul className="navbar-nav">  

            {
            /* ===================== projects nav item  ===================== */
          }
            <li className="nav-item dropdown" style={{ fontFamily:'Arial' }}>
              <DropdownToggleLink title="About Us" className="nav-link dropdown-toggle"  style={{fontFamily:'Arial'}} />

              <ul className="dropdown-menu" style={{ fontFamily:'Arial' }}>
    {/* About Us */}
    <li>
      <ListItemLink href="/aboutus" title="About Us" linkClassName="dropdown-item" />
    </li> 
    <li>
      <ListItemLink href="/mission" title="Our Mission" linkClassName="dropdown-item" />
    </li> 
    <li>
      <ListItemLink href="/vision" title="Our Vision" linkClassName="dropdown-item" />
    </li> 
    <li>
      <ListItemLink href="/whychoosevian" title="Why choose VIAN" linkClassName="dropdown-item" />
    </li> 
    </ul>

            </li>

            {
            /* ===================== blog nav item ===================== */
          }
            <li className="nav-item dropdown" style={{ fontFamily:'Arial' }}>
  <DropdownToggleLink title="Our Expertise" className="nav-link dropdown-toggle" style={{ fontFamily:'Arial' }} />

  <ul className="dropdown-menu" style={{ fontFamily:'Arial' }}>
    {/* Design & Consultancy */}
    <li>
      <ListItemLink href="/design&cons" title="Design & Consultancy" linkClassName="dropdown-item" />
    </li>

    
    {/* Project Management */}
    <li>
      <ListItemLink href="/Projectmgm" title="Project Management" linkClassName="dropdown-item" />
    </li>


    {/* Turnkey Solutions */}
    <li className="dropdown-submenu">
      <span className="dropdown-item dropdown-toggle">Turnkey Solutions</span>
      <ul className="dropdown-menu">
        <li>
          <ListItemLink href="\cleanroom" title="Cleanroom Panels & Equipment" linkClassName="dropdown-item" />
        </li>
        <li>
          <ListItemLink href="/hvac" title="HVAC & Ducting" linkClassName="dropdown-item" />
        </li>
        <li>
          <ListItemLink href="/turnkey/machinery" title="Machinery" linkClassName="dropdown-item" />
        </li>
        <li>
          <ListItemLink href="/turnkey/lab-office-furniture" title="Lab & Office Furniture" linkClassName="dropdown-item" />
        </li>
        <li>
          <ListItemLink href="/turnkey/flooring" title="Flooring" linkClassName="dropdown-item" />
        </li>
        <li>
          <ListItemLink href="/turnkey/electrical" title="Electrical, BMS and More" linkClassName="dropdown-item" />
        </li>
      </ul>
    </li>


    
  </ul>
</li>


            {
            /* ===================== blocks nav item ===================== */
          }
          <li className="nav-item dropdown dropdown-mega" style={{fontFamily:'Arial'}}> <Link href="/Projects"> <a className="nav-link">Executed Projects</a> </Link> </li>
          <li className="nav-item dropdown dropdown-mega"style={{fontFamily:'Arial'}}> <Link href="/career-1"> <a className="nav-link">Career</a> </Link> </li>

              <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img"style={{fontFamily:'Arial'}}>

                {/* <li className="mega-menu-content">
                  <ul className="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-6 gy-lg-4 list-unstyled">
                    {blocksNavigation.map(({
                    id,
                    thumnail,
                    title,
                    url
                  }) => <li className="col" key={id}>
                        <Link href={url} passHref legacyBehavior>
                          <a className="dropdown-item">
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                              <img className="rounded-0" src={thumnail} alt="" />
                            </div>

                            <span>{title}</span>
                          </a>
                        </Link>
                      </li>)}
                  </ul>
                </li> */}
              </ul>
            

            {
            /* ===================== documentation nav item ===================== */
          }
            <li className="nav-item dropdown dropdown-mega"style={{fontFamily:'Arial'}}>
            <Link href="/contact-1"> <a className="nav-link">Contact Us</a> </Link>
              {/* { <ul className="dropdown-menu mega-menu">
                <li className="mega-menu-content">
                  <div className="row gx-0 gx-lg-3">
                    <div className="col-lg-4">
                      <h6 className="dropdown-header">Usage</h6>
                      <ul className="list-unstyled cc-2 pb-lg-1">{renderLinks(documentionNavigation.usage)}</ul>

                      <h6 className="dropdown-header mt-lg-6">Styleguide</h6>
                      <ul className="list-unstyled cc-2">{renderLinks(documentionNavigation.styleguide)}</ul>
                    </div>

                    <div className="col-lg-8">
                      <h6 className="dropdown-header">Elements</h6>
                      <ul className="list-unstyled cc-3">{renderLinks(documentionNavigation.elements)}</ul>
                    </div>
                  </div>
                </li>
              </ul>} */}
            </li>
          </ul>

          {
          /* ============= show contact info in the small device sidebar ============= */
        }
           <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink title=" Vinit.Chauhan@my-vian.com" className="link-inverse" href="mailto:first.last@email.com" />
              <br />
              <NextLink href="tel:0123456789" title="00 (123) 456 78 90" />
              <br />
              <SocialLinks />
            </div>
          </div> 
        </div>
      </div>

      {
      /* ============= right side header content ============= */
    }
      <div className={navOtherClass}>
        <ul className="navbar-nav flex-row align-items-center ms-auto"style={{fontFamily:'Arial'}}>
          {
          /* ============= language dropdwown ============= */
        }
           {language && <Language />}

          {
          /* ============= info button ============= */
        }
          {/* {info && <li className="nav-item">
              <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-info">
                <i className="uil uil-info-circle" />
              </a>
            </li>} */}

          {
          /* ============= search icon button ============= */
        }
          {search && <li className="nav-item"style={{fontFamily:'Arial'}}>
              <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-search">
                <i className="uil uil-search" />
              </a>
            </li>}

          {
          /* ============= contact button ============= */
        }
          {button && <li className="nav-item d-none d-md-block">{button}</li>}

          {
          /* ============= shopping cart button ============= */
        }
          {cart && <li className="nav-item">
              <a data-bs-toggle="offcanvas" data-bs-target="#offcanvas-cart" className="nav-link position-relative d-flex flex-row align-items-center">
                <i className="uil uil-shopping-cart" />
                <span className="badge badge-cart bg-primary">3</span>
              </a>
            </li>}

          {
          /* ============= social icons link ============= */
        }
          {social && <Social />}

          {
          /* ============= humburger button for small device ============= */
        }
          <li className="nav-item d-lg-none">
            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvas-nav" className="hamburger offcanvas-nav-btn">
              <span />
            </button>
          </li>
        </ul>
      </div>
    </Fragment>;
  return <Fragment>
      {stickyBox && <div style={{
      paddingTop: sticky ? navbarRef.current?.clientHeight : 0
    }} />}

      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        {fancy ? <div className="container">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center"style={{fontFamily:'Arial', color:'white'}}>
              {headerContent}
            </div>
          </div> : <div className="container flex-lg-row flex-nowrap align-items-center"style={{fontFamily:'Arial'}}>{headerContent}</div>}
      </nav>

      {
      /* ============= signin modal ============= */
    }
      <Signin />

      {
      /* ============= signup modal ============= */
    }
      <Signup />

      {
      /* ============= info sidebar ============= */
    }
      {info && <Info />}

      {
      /* ============= show search box ============= */
    }
      {search && <Search />}

      {
      /* ============= cart sidebar ============= */
    }
      {cart && <MiniCart />}
    </Fragment>;
}; // set deafult Props


Navbar.defaultProps = {
  cart: false,
  info: false,
  social: false,
  search: false,
  language: false,
  stickyBox: true,
  navOtherClass: 'navbar-other w-10 d-flex ms-auto',
  navClassName: 'navbar navbar-expand-lg center-nav transparent navbar-light'
};
export default Navbar;