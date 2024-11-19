import Carousel from 'components/reuseable/Carousel';
import carouselBreakpoints from 'utils/carouselBreakpoints';
import { BlogCard1 } from 'components/reuseable/blog-cards'; // -------- data -------- //

import { blogList2 } from 'data/blog';

const Blog7 = () => {
  return <section className="wrapper bg-white">
      <div className="container py-15 py-md-17">
        <div className="row text-center">
          <div className="col-lg-10 col-xl-7 col-xxl-6 mx-auto">
            <h2 className="fs-25 text-uppercase text-muted mb-3">Our Inhouse Services Capabilites </h2>
            <h3 className="display-2 ls-sm mb-10">-Turnkey</h3>
          </div>
        </div>

        <div className="swiper-container blog grid-view mb-10">
          <Carousel grabCursor navigation={false} breakpoints={carouselBreakpoints}>
            {blogList2.map(item => <BlogCard1 key={item.id} {...item} />)}
          </Carousel>
        </div>
      </div>
    </section>;
};

export default Blog7;