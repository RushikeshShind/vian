import { Fragment, useEffect } from 'react';
import { FAQ7 } from 'components/blocks/faq';
import { Blog7 } from 'components/blocks/blog';
import { Hero27 } from 'components/blocks/hero';
import { About28 } from 'components/blocks/about';
import { Navbar } from 'components/blocks/navbar';
import { Footer18 } from 'components/blocks/footer';
import { Pricing10 } from 'components/blocks/pricing';
import { Process17 } from 'components/blocks/process';
import { Services29 } from 'components/blocks/services';
import PageProgress from 'components/common/PageProgress';
import { Testimonial21 } from 'components/blocks/testimonial';
import Topbar from 'components/elements/Topbar';
import { Clients1 } from 'components/blocks/clients';

const Demo27 = () => {
  // Intersection Observer Hook
  useEffect(() => {
    const sections = document.querySelectorAll('.scroll-section');
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slideInDown');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Fragment style={{fontFamily:'Arial' }}>
      <PageProgress style={{fontFamily:'Arial' }} />
      
      <Topbar />

      {/* Header */}
      <header className="wrapper bg-light" style={{fontFamily:'Arial'}}>
        <Navbar info search stickyBox={false} navOtherClass="navbar-other ms-lg-4" navClassName="navbar navbar-expand-lg classic transparent position-absolute navbar-light" style={{ fontFamily:'Arial' }} />
      </header>

      {/* Main Content */}
      <main className="content-wrapper" style={{ fontFamily:'Arial' }}>
        {/* Hero Section */}
        <Hero27 style={{ fontFamily: 'Arial' }} className="scroll-section" />

        {/* What We Do Section */}
        <Services29 style={{ fontFamily:'Arial' }} className="scroll-section" />

        {/* How It Works Section */}
        <Process17 style={{ fontFamily:'Arial' }} className="scroll-section" />

        {/* Case Study Section */}
        <Blog7 style={{ fontFamily:'Arial' }} className="scroll-section" />

        {/* Why Choose Us Section */}
        <section className="wrapper bg-white scroll-section" style={{ fontFamily:'Arial' }}>
          <div className="container py-15 py-md-17" style={{ fontFamily:'Arial' }}>
            <About28 style={{ fontFamily:'Arial' }} />
            <Testimonial21 style={{ fontFamily:'Arial' }} />
            <Pricing10 style={{ fontFamily:'Arial' }} />
            <FAQ7 style={{ fontFamily:'Arial' }} />
          </div>
          <h1 className="display-1 mb-1 text-center mb-12" style={{ fontFamily:'Arial', color: '#003366' }}>Software Used</h1>
          <div className="px-lg-5 mb-1 mb-md-1" style={{ fontFamily:'Arial' }}>
            <Clients1 style={{ fontFamily:'Arial'}} />
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <Footer18 style={{ fontFamily:'Arial' }} />
    </Fragment>
  );
};

export default Demo27;
