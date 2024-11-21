import NextLink from 'components/reuseable/links/NextLink'; // =======================================================

// =======================================================
const ProjectDetailsContent = ({
  title,
  contentRowClass = 'row gx-0',
  titleClass = 'display-6 mb-4'
}) => {
  return <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <h2 className={titleClass}>{title}</h2>

        <div className={contentRowClass}>
          <div className="col-md-9 text-justify">
            <p>
            Transforming your URS into a functional
            and detailed design.
            </p>
            <p>
             
            </p>
          </div>

          {/* <div className="col-md-2 ms-auto">
            <ul className="list-unstyled">
              <li>
                <h5 className="mb-1">Date</h5>
                <p>17 May 2018</p>
              </li>

              <li>
                <h5 className="mb-1">Client Name</h5>
                <p>Cool House</p>
              </li>
            </ul>

            <NextLink title="See Project" href="#" className="more hover" />
          </div> */}
        </div>
      </div>
    </div>;
};

export default ProjectDetailsContent;