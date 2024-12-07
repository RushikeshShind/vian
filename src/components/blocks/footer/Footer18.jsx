// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks'; // -------- data -------- //
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";
import footerNav from 'data/footer';

const Footer18 = () => {
  return <footer className="bg-gray">
    <div className="container py-13 py-md-15">
    
    <div className="d-lg-flex flex-row align-items-lg-center">
      
        
      </div>

      <hr className="mt-11 mb-16" />
      <div className="row gy-2 gy-lg-1">
        <div className="col-md-3 col-lg-3">
          <div className="widget">
            <img className="mb-4" src="/img/vian.png" srcSet="/img/Vian.png 2x" alt="" style={{ width: '100px', height: 'auto' }} />

            <p className="mb-4">
              © 2024 Vian. <br className="d-none d-lg-block" />
              All rights reserved. developed by ISPARXINFOTECH

            </p>

            <SocialLinks className="nav social social-muted" />
          </div>
        </div>

        <div className="col-md-4 col-lg-3">
          <div className="widget">
            <h4 className="widget-title ls-sm mb-3">Get in Touch</h4>
            <address className="pe-xl-1 pe-xxl-1 ">
             <h6> Works :</h6>
              Plot No 18, Mira Co-op. , Industrial Estate, Opp Amar Palace
Hotel, Kashimira, Mira Road (E), Dist Thane – 401107. <br/>
           <h6>Corporate Address :</h6>
            D wing 2146/2147, Oberoi Garden Estate, Chandivli Farm Road, Chandivli, Mumbai – 400072, Maharashtra India. </address>
            <a href="mailto: Vinit.Chauhan@my-vian.com" className="link-body">
            Vinit.Chauhan@my-vian.com
            </a>
            <br /> +91 9967578862
          </div>
        </div>

        <div className="col-md-4 col-lg-3">
          <div className="widget">
            <h4 className="widget-title ls-sm mb-3">Learn More</h4>
            <ul className="list-unstyled text-reset mb-0">
              {footerNav.map(({
                title,
                url
              }) => <li key={title}>
                  <NextLink title={title} href={url} />
                </li>)}
            </ul>
          </div>
        </div>

        <div className="col-md-12 col-lg-3">
          <div className="widget">
            <h4 className="widget-title ls-sm mb-3">Contact Us</h4>
            <p className="mb-5"></p>
            <div className="newsletter-wrapper">
              <div id="mc_embed_signup2">
                <form action="#" method="post" id="mc-embedded-subscribe-form2" name="mc-embedded-subscribe-form" className="validate " target="_blank" noValidate>
                  <div id="mc_embed_signup_scroll2">
                    <div className="mc-field-group input-group form-floating">
                      <input type="email" name="EMAIL" id="mce-EMAIL2" placeholder="Email Address" className="required email form-control" />
                      <label htmlFor="mce-EMAIL2">Email Address</label>

                      <input type="submit" value="Submit" name="subscribe" id="mc-embedded-subscribe2" className="btn btn-primary" />
                    </div>

                    {
                      /* <div id="mce-responses2" class="clear">
                      <div class="response" id="mce-error-response2" style="display:none"></div>
                      <div class="response" id="mce-success-response2" style="display:none"></div>
                      </div> 
                      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc" tabindex="-1" value=""></div>
                      <div class="clear"></div> */
                    }
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>;
};

export default Footer18;