import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react'; // -------- custom component -------- //

import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink'; // -------- custom hook -------- //

import useIsotope from 'hooks/useIsotope'; // -------- data -------- //

const projectList = [{
  id: 1,
  link: '#',
  color: 'purple',
  type: 'product',
  category: '',
  title: '',
  image: {
    width: 1300,
    height: 1262,
    url: '/img/vian/Stainless3.jpg'
  }
}, {
  id: 2,
  link: '#',
  color: 'leaf',
  type: 'workshop',
  category: '',
  title: '',
  image: {
    width: 1300,
    height: 1435,
    url: '/img/vian/img-1.png'
  }
}, {
  id: 3,
  link: '#',
  color: 'violet',
  type: 'still-life',
  category: '',
  title: '',
  image: {
    width: 1300,
    height: 1435,
    url: '/img/vian/img-7.jpg'
  }
}, {
  id: 4,
  link: '#',
  color: 'yellow',
  type: 'product',
  category: '',
  title: '',
  image: {
    width: 1200,
    height: 919,
    url: '/img/vian/stainless2.jpg'
  }
}, {
  id: 5,
  link: '#',
  color: 'orange',
  type: 'product',
  category: '',
  title: '',
  image: {
    width: 1300,
    height: 1365,
    url: '/img/vian/Stainless3.jpg'
  }
}, {
  id: 6,
  link: '#',
  color: 'green',
  type: 'workshop',
  category: '',
  title: ' ',
  image: {
    width: 1200,
    height: 960,
    url: '/img/vian/Stainless6.jpg'
  }
}, {
  id: 7,
  link: '#',
  color: 'aqua',
  type: 'concept',
  category: '',
  title: '',
  image: {
    width: 1200,
    height: 1294,
    url: '/img/vian/stainless7.jpg'
  }
}, {
  id: 8,
  link: '#',
  color: 'red',
  type: '',
  category: '',
  title: '',
  image: {
    width: 1200,
    height: 1200,
    url: '/img/vian/stainless8.jpg'
  }
}, ];
const filterItems = [{
  id: 1,
  title: 'All',
  value: '*'
}, {
  id: 2,
  title: 'Concept',
  value: '.concept'
}, {
  id: 3,
  title: 'Product',
  value: '.product'
}, {
  id: 4,
  title: 'Workshop',
  value: '.workshop'
}, {
  id: 5,
  title: 'Still Life',
  value: '.still-life'
}];

const ProjectsThree = () => {
  const {
    handleFilterKeyChange,
    filterKey
  } = useIsotope();
  return <Fragment>
      <PageProgress />

      {
      /* ========== header section ========== */
    }
      <header className="wrapper bg-light">
        <Navbar language button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />} />
      </header>

      <main className="content-wrapper">
        {
        /* ========== title section ========== */
      }
        <section className="wrapper bg-light">
          <div className="container pt-10 pt-md-14">
            <div className="row">
              <div className="col-lg-10 col-xxl-8">
                <h1 className="display-1 mb-0">Executed Stainless Steel Furniture</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="grid grid-view projects-masonry">
              {
              /* ========== filter section ========== */
            }
              {/* <div className="isotope-filter filter mb-10">
                <p>Filter:</p>
                <ul>
                  {filterItems.map(({
                  id,
                  title,
                  value
                }) => <li key={id}>
                      <a onClick={handleFilterKeyChange(value)} className={`filter-item ${value === filterKey ? 'active' : ''}`}>
                        {title}
                      </a>
                    </li>)}
                </ul>
              </div> */}

              {
              /* ========== projects section ========== */
            }
              <div className="row gx-md-10 gy-10 gy-md-13 isotope">
                {projectList.map(({
                id,
                image,
                title,
                category,
                color,
                link,
                type
              }) => <div className={`project item col-md-6 ${type}`} key={id}>
                    <Link href={link} passHref legacyBehavior>
                      <a>
                        <figure className="lift rounded mb-6">
                          <Image alt={title} src={image.url} width={image.width} height={image.height} style={{
                        width: '100%',
                        height: 'auto'
                      }} />
                        </figure>
                      </a>
                    </Link>

                    <div className="project-details d-flex justify-content-center flex-column">
                      <div className="post-header">
                        <div className={`post-category text-line mb-3 text-${color}`}>{category}</div>
                        <h3 className="post-title">{title}</h3>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </section>
      </main>

      {
      /* ========== footer section ========== */
    }
      <Footer8 />
    </Fragment>;
};

export default ProjectsThree;