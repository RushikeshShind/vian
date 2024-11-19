import { Fragment } from 'react'; // -------- custom component -------- //

import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import BlogTemplate from 'components/common/BlogTemplate';
import BlogSidebar from 'components/reuseable/BlogSidebar';
import NextLink from 'components/reuseable/links/NextLink';

const BlogThree = () => {
  return <Fragment>
      <PageProgress />

      {
      /* ========== header section ========== */
    }
      <header className="wrapper bg-gray">
        <Navbar search button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />} />
      </header>

      <main className="content-wrapper">
        {
        /* ========== title section ========== */
      }
        <section className="wrapper bg-gray">
          <div className="container pt-10 pb-12 pt-md-14 pb-md-16 text-center">
            <div className="row">
              <div className="col-md-7 col-lg-6 col-xl-5 mx-auto">
                <h1 className="display-1 mb-3"> Executed Stainless Steel Furniture</h1>
                <p className="lead px-lg-5 px-xxl-8">
               
                </p>
              </div>
            </div>
          </div>
        </section>

        
        <section className="wrapper bg-light" style={{
  width: '90%', 
  maxWidth: '1200px', 
  justifyContent: 'center', 
  alignItems: 'center',
  minHeight: '100vh',
  
}}>
    <div className="container py-1 py-md-1" >
      <div className="row gx-lg-1 gx-xl-1">
        {
        /* ========== sidebar section ========== */
      }
        {/* <aside className="col-lg-4 sidebar mt-8 mt-lg-6">
          <BlogSidebar />
        </aside> */}

        {
        /* ========== blog details section ========== */
      }
        <div className="col-lg-12" style={{
  justifyContent: 'center', 
  alignItems: 'center', 
  margin: 'auto'
}}>
  <BlogTemplate />
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

export default BlogThree;