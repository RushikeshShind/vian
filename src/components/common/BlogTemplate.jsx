import Plyr from 'plyr-react';
import Image from 'next/image';
import { Fragment } from 'react'; // -------- custom component -------- //

import Carousel from 'components/reuseable/Carousel';
import Pagination from 'components/reuseable/Pagination';
import { BlogCard2, BlogCard3 } from 'components/reuseable/blog-cards'; // -------- data -------- //

const blogs = [{
  id: 1,
  link: '#',
  category: 'Coding',
  image: '/img/photos/b4.jpg',
  title: 'Ligula tristique quis risus',
  description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
}, {
  id: 2,
  link: '#',
  category: 'Workspace',
  image: '/img/photos/b5.jpg',
  title: 'Nullam id dolor elit id nibh',
  description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
}, {
  id: 3,
  link: '#',
  category: 'Meeting',
  image: '/img/photos/b6.jpg',
  title: 'Ultricies fusce porta elit',
  description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
}, {
  id: 4,
  link: '#',
  category: 'Business Tips',
  image: '/img/photos/b7.jpg',
  title: 'Morbi leo risus porta eget',
  description: `Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.`
}];

const BlogTemplate = () => {
  return <Fragment>
      <div className="blog classic-view">
        <BlogCard2 link="#" category="" title="" description="" cardTop={<figure className="card-img-top overlay overlay-1 hover-scale">
              {/* <a className="link-dark" href="#">
                <Image width={960} height={600} src="/img/vian/Stainless3" alt="blog" style={{
            width: '100%',
            height: 'auto'
          }} />
                <span className="bg" />
              </a> */}

              {/* <figcaption>
                <h5 className="from-top mb-0">Read More</h5>
              </figcaption> */}
            </figure>} />
            
        <BlogCard2 link="#" category="" title="" description="" cardTop={<div className="post-slider card-img-top">
              
              <div className="container py-13 py-md-17 text-center swiper-container dots-over">
                <Carousel grabCursor spaceBetween={5} slidesPerView={1}>
                  <Image width={960} height={600} src="/img/vian/Stainless3.jpg" alt="" style={{
              width: '100%',
              height: 'auto'
            }} />
                  <Image width={960} height={600} src="/img/vian/Stainless3.jpg" alt="" style={{
              width: '100%',
              height: 'auto'
            }} />
            <Image width={960} height={600} src="/img/vian/Stainless3.jpg" alt="" style={{
              width: '100%',
              height: 'auto'
            }} />
            <Image width={960} height={600} src="/img/vian/Stainless3.jpg" alt="" style={{
              width: '100%',
              height: 'auto'
            }} />
                </Carousel>
              </div>
            </div>} />

        
              
           
      </div>

      

      {
      /* ========== pagination section ========== */
    }
      {/* <Pagination className="justify-content-start" /> */}
    </Fragment>;
};

export default BlogTemplate;