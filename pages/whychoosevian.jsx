import { Fragment } from 'react'; // -------- custom component -------- //

import { Navbar } from 'components/blocks/navbar';
import { Footer18 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
import { ProjectCard1 } from 'components/reuseable/project-cards'; // -------- custom hook -------- //

import useIsotope from 'hooks/useIsotope';
import useLightBox from 'hooks/useLightBox';
import useTooltip from 'hooks/useTooltip'; // -------- data -------- //

import { projectList1 } from 'data/project';

const Projects = () => {
    // used for masonry layout
    useIsotope(); // used for lightbox

    useLightBox(); // added tooltip library

    useTooltip();
    return <Fragment>
        <PageProgress />

        {
            /* ========== header section ========== */
        }
        <header className="wrapper bg-gray" >
            <Navbar language navClassName="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light" button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" style={{ fontFamily:'Arial' }} />} />
        </header>

        <main className="content-wrapper" data-cues="slideInDown" data-group="page-title" data-interval="-200" data-delay="500">
            {
                /* ========== title section ========== */
            }

            <h1 className="display-1 mb-3 text-center" style={{
                borderBottom: '1px solid #003366',
                paddingBottom: '10px',
                fontFamily:'Arial'
            }}> Why
                Should You
                Choose Us?</h1>
                <section className="scroll-section" data-cues="slideInDown" data-group="page-title" data-interval="-200" data-delay="500"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#023469",
                    padding: "4rem",
                    borderRadius: "1px",
                    color: "#ffffff",
                    fontFamily: "Cinzel",
                    marginBottom: "2rem",
                }}
            >
                {/* Left Side */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div
                        style={{
                            position: "relative", // Enables positioning of the logo
                            backgroundColor: "#ffffff",
                            color: "#1E1E56",
                            borderRadius: "15px",
                            padding: "2rem 1rem",
                            width: "150px",
                            textAlign: "center",
                            fontWeight: "600",
                            fontSize: "0.9rem",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                        }}
                    >
                        {/* Logo */}
                        <div
                            style={{
                                position: "absolute",
                                top: "-15px", // Moves the logo above the card
                                left: "15px",
                                backgroundColor: "#4A3AFF",
                                borderRadius: "50%",
                                width: "40px",
                                height: "40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="#FFFFFF" // White logo
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 21h6v-1H9v1zM9 19h6v-1H9v1zM9 17h6v-1H9v1zM5 15h2v-1H5v1zM9 15h2v-1H9v1zM13 15h2v-1h-2v1zM17 15h2v-1h-2v1zM7 5h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1zm1 4h8v2H8V9zm-3 5h2v1H5v-1zm15-6v1c0 .55-.45 1-1 1h-1.1c.58.62.1 1.92-1.3 1.92-.89 0-1.57-.59-1.6-1.43l.2-.67H9.8l.2.67c-.03.84-.71 1.43-1.6 1.43-1.4 0-1.88-1.3-1.3-1.92H6c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v1h-.15c-.64.66-.64 1.66 0 2.22H20c.55 0 1 .45 1 1zm-1 2h-2c-.28 0-.5-.22-.5-.5V12c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2.5c0 .28-.22.5-.5.5z"></path>
                            </svg>
                        </div>
                        In-house Manufacturing
                    </div>
                    <div
                        style={{
                            position: "relative", // Enables positioning of the logo
                            backgroundColor: "#ffffff",
                            color: "#1E1E56",
                            borderRadius: "15px",
                            padding: "2rem 1rem",
                            width: "150px",
                            textAlign: "center",
                            fontWeight: "600",
                            fontSize: "0.9rem",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                        }}
                    >
                        {/* Logo */}
                        <div
                            style={{
                                position: "absolute",
                                top: "-15px", // Moves the logo above the card
                                left: "15px",
                                backgroundColor: "#4A3AFF",
                                borderRadius: "50%",
                                width: "40px",
                                height: "40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="#FFFFFF" // White logo
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 21h6v-1H9v1zM9 19h6v-1H9v1zM9 17h6v-1H9v1zM5 15h2v-1H5v1zM9 15h2v-1H9v1zM13 15h2v-1h-2v1zM17 15h2v-1h-2v1zM7 5h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1zm1 4h8v2H8V9zm-3 5h2v1H5v-1zm15-6v1c0 .55-.45 1-1 1h-1.1c.58.62.1 1.92-1.3 1.92-.89 0-1.57-.59-1.6-1.43l.2-.67H9.8l.2.67c-.03.84-.71 1.43-1.6 1.43-1.4 0-1.88-1.3-1.3-1.92H6c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v1h-.15c-.64.66-.64 1.66 0 2.22H20c.55 0 1 .45 1 1zm-1 2h-2c-.28 0-.5-.22-.5-.5V12c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2.5c0 .28-.22.5-.5.5z"></path>
                            </svg>
                        </div>
                        25+ projects completed
                    </div>
                </div>

                {/* Right Side */}
                <div
                    style={{
                        background: "#023469",
                        borderRadius: "15px",
                        padding: "2rem",
                        maxWidth: "600px",
                        position: "relative",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "3rem",
                            fontWeight: "bold",
                            marginBottom: "1rem",
                            color: 'white'
                        }}
                    >
                        01
                    </h1>
                    <h2
                        style={{
                            fontSize: "1.5rem",
                            fontWeight: "600",
                            marginBottom: "1rem",
                            color: 'white'
                        }}
                    >
                        Comprehensive Services
                    </h2>
                    <p
                        style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            lineHeight: "1.5",
                        }}
                    >
                        Entire pharma turnkey solutions under one roof for seamless project
                        execution without interdependencies.
                    </p>

                </div>

            </section>

            {/*2nd */}
            <section data-cues="slideInDown" data-group="page-title" data-interval="-200" data-delay="500"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#023469",
                    padding: "4rem",
                    borderRadius: "1px",
                    color: "#ffffff",
                    fontFamily: "Cinzel",
                    marginBottom: "2rem",
                }}
            >
                {/* Left Side */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div
                        style={{
                            position: "relative", // Enables positioning of the logo
                            backgroundColor: "#ffffff",
                            color: "#1E1E56",
                            borderRadius: "15px",
                            padding: "2rem 1rem",
                            width: "150px",
                            textAlign: "center",
                            fontWeight: "600",
                            fontSize: "0.9rem",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                        }}
                    >
                        {/* Logo */}
                        <div
                            style={{
                                position: "absolute",
                                top: "-15px", // Moves the logo above the card
                                left: "15px",
                                backgroundColor: "#4A3AFF",
                                borderRadius: "50%",
                                width: "40px",
                                height: "40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="#FFFFFF" // White logo
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 21h6v-1H9v1zM9 19h6v-1H9v1zM9 17h6v-1H9v1zM5 15h2v-1H5v1zM9 15h2v-1H9v1zM13 15h2v-1h-2v1zM17 15h2v-1h-2v1zM7 5h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1zm1 4h8v2H8V9zm-3 5h2v1H5v-1zm15-6v1c0 .55-.45 1-1 1h-1.1c.58.62.1 1.92-1.3 1.92-.89 0-1.57-.59-1.6-1.43l.2-.67H9.8l.2.67c-.03.84-.71 1.43-1.6 1.43-1.4 0-1.88-1.3-1.3-1.92H6c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v1h-.15c-.64.66-.64 1.66 0 2.22H20c.55 0 1 .45 1 1zm-1 2h-2c-.28 0-.5-.22-.5-.5V12c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2.5c0 .28-.22.5-.5.5z"></path>
                            </svg>
                        </div>
                        Global Projects
                    </div>
                    <div
                        style={{
                            position: "relative", // Enables positioning of the logo
                            backgroundColor: "#ffffff",
                            color: "#1E1E56",
                            borderRadius: "15px",
                            padding: "2rem 1rem",
                            width: "150px",
                            textAlign: "center",
                            fontWeight: "600",
                            fontSize: "0.9rem",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                        }}
                    >
                        {/* Logo */}
                        <div
                            style={{
                                position: "absolute",
                                top: "-15px", // Moves the logo above the card
                                left: "15px",
                                backgroundColor: "#4A3AFF",
                                borderRadius: "50%",
                                width: "40px",
                                height: "40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="#FFFFFF" // White logo
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 21h6v-1H9v1zM9 19h6v-1H9v1zM9 17h6v-1H9v1zM5 15h2v-1H5v1zM9 15h2v-1H9v1zM13 15h2v-1h-2v1zM17 15h2v-1h-2v1zM7 5h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1zm1 4h8v2H8V9zm-3 5h2v1H5v-1zm15-6v1c0 .55-.45 1-1 1h-1.1c.58.62.1 1.92-1.3 1.92-.89 0-1.57-.59-1.6-1.43l.2-.67H9.8l.2.67c-.03.84-.71 1.43-1.6 1.43-1.4 0-1.88-1.3-1.3-1.92H6c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v1h-.15c-.64.66-.64 1.66 0 2.22H20c.55 0 1 .45 1 1zm-1 2h-2c-.28 0-.5-.22-.5-.5V12c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2.5c0 .28-.22.5-.5.5z"></path>
                            </svg>
                        </div>
                        Turnkey Solution
                        Provider
                    </div>
                </div>

                {/* Right Side */}
                <div
                    style={{
                        background: "#023469",
                        borderRadius: "15px",
                        padding: "2rem",
                        maxWidth: "600px",
                        position: "relative",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "3rem",
                            fontWeight: "bold",
                            marginBottom: "1rem",
                            color: 'white'
                        }}
                    >
                        02
                    </h1>
                    <h2
                        style={{
                            fontSize: "1.5rem",
                            fontWeight: "600",
                            marginBottom: "1rem",
                            color: 'white'
                        }}
                    >
                        Proven Expertise
                    </h2>
                    <p
                        style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            lineHeight: "1.5",
                        }}
                    >
                        25+ projects completed in 4
                        years, including 4+ overseas
                        in 3+ countries
                    </p>

                </div>

            </section>

            {/* 3rd  */}
            <section
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#023469",
                    padding: "4rem",
                    borderRadius: "1px",
                    color: "#ffffff",
                    fontFamily: "Cinzel",
                    marginBottom: "2rem",
                }}
            >
                {/* Left Side */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div
                        style={{
                            position: "relative", // Enables positioning of the logo
                            backgroundColor: "#ffffff",
                            color: "#1E1E56",
                            borderRadius: "15px",
                            padding: "2rem 1rem",
                            width: "150px",
                            textAlign: "center",
                            fontWeight: "600",
                            fontSize: "0.9rem",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                        }}
                    >
                        {/* Logo */}
                        <div
                            style={{
                                position: "absolute",
                                top: "-15px", // Moves the logo above the card
                                left: "15px",
                                backgroundColor: "#4A3AFF",
                                borderRadius: "50%",
                                width: "40px",
                                height: "40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="#FFFFFF" // White logo
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 21h6v-1H9v1zM9 19h6v-1H9v1zM9 17h6v-1H9v1zM5 15h2v-1H5v1zM9 15h2v-1H9v1zM13 15h2v-1h-2v1zM17 15h2v-1h-2v1zM7 5h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1zm1 4h8v2H8V9zm-3 5h2v1H5v-1zm15-6v1c0 .55-.45 1-1 1h-1.1c.58.62.1 1.92-1.3 1.92-.89 0-1.57-.59-1.6-1.43l.2-.67H9.8l.2.67c-.03.84-.71 1.43-1.6 1.43-1.4 0-1.88-1.3-1.3-1.92H6c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v1h-.15c-.64.66-.64 1.66 0 2.22H20c.55 0 1 .45 1 1zm-1 2h-2c-.28 0-.5-.22-.5-.5V12c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2.5c0 .28-.22.5-.5.5z"></path>
                            </svg>
                        </div>
                        Proven
                        Expertise

                    </div>
                    <div
                        style={{
                            position: "relative", // Enables positioning of the logo
                            backgroundColor: "#ffffff",
                            color: "#1E1E56",
                            borderRadius: "15px",
                            padding: "2rem 1rem",
                            width: "150px",
                            textAlign: "center",
                            fontWeight: "600",
                            fontSize: "0.9rem",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                        }}
                    >
                        {/* Logo */}
                        <div
                            style={{
                                position: "absolute",
                                top: "-15px", // Moves the logo above the card
                                left: "15px",
                                backgroundColor: "#4A3AFF",
                                borderRadius: "50%",
                                width: "40px",
                                height: "40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="#FFFFFF" // White logo
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 21h6v-1H9v1zM9 19h6v-1H9v1zM9 17h6v-1H9v1zM5 15h2v-1H5v1zM9 15h2v-1H9v1zM13 15h2v-1h-2v1zM17 15h2v-1h-2v1zM7 5h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1zm1 4h8v2H8V9zm-3 5h2v1H5v-1zm15-6v1c0 .55-.45 1-1 1h-1.1c.58.62.1 1.92-1.3 1.92-.89 0-1.57-.59-1.6-1.43l.2-.67H9.8l.2.67c-.03.84-.71 1.43-1.6 1.43-1.4 0-1.88-1.3-1.3-1.92H6c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v1h-.15c-.64.66-.64 1.66 0 2.22H20c.55 0 1 .45 1 1zm-1 2h-2c-.28 0-.5-.22-.5-.5V12c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2.5c0 .28-.22.5-.5.5z"></path>
                            </svg>
                        </div>
                        Innovative
                        Solutions
                    </div>
                </div>

                {/* Right Side */}
                <div
                    style={{
                        background: "#023469",
                        borderRadius: "15px",
                        padding: "2rem",
                        maxWidth: "600px",
                        position: "relative",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "3rem",
                            fontWeight: "bold",
                            marginBottom: "1rem",
                            color: 'white'
                        }}
                    >
                        03
                    </h1>
                    <h2
                        style={{
                            fontSize: "1.5rem",
                            fontWeight: "600",
                            marginBottom: "1rem",
                            color: 'white'
                        }}
                    >
                        Skilled Team:
                    </h2>
                    <p
                        style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            lineHeight: "1.5",
                        }}
                    >
                        A 30+ member in-house
                        team for design, installation,
                        and execution.

                    </p>

                </div>

            </section>

            {/*4th  */}
            <section
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#023469",
                    padding: "4rem",
                    borderRadius: "1px",
                    color: "#ffffff",
                    fontFamily: "Cinzel",
                    marginBottom: "2rem",
                }}
            >
                {/* Left Side */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div
                        style={{
                            position: "relative", // Enables positioning of the logo
                            backgroundColor: "#ffffff",
                            color: "#1E1E56",
                            borderRadius: "15px",
                            padding: "2rem 1rem",
                            width: "150px",
                            textAlign: "center",
                            fontWeight: "600",
                            fontSize: "0.9rem",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                        }}
                    >
                        {/* Logo */}
                        <div
                            style={{
                                position: "absolute",
                                top: "-15px", // Moves the logo above the card
                                left: "15px",
                                backgroundColor: "#4A3AFF",
                                borderRadius: "50%",
                                width: "40px",
                                height: "40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="#FFFFFF" // White logo
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 21h6v-1H9v1zM9 19h6v-1H9v1zM9 17h6v-1H9v1zM5 15h2v-1H5v1zM9 15h2v-1H9v1zM13 15h2v-1h-2v1zM17 15h2v-1h-2v1zM7 5h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1zm1 4h8v2H8V9zm-3 5h2v1H5v-1zm15-6v1c0 .55-.45 1-1 1h-1.1c.58.62.1 1.92-1.3 1.92-.89 0-1.57-.59-1.6-1.43l.2-.67H9.8l.2.67c-.03.84-.71 1.43-1.6 1.43-1.4 0-1.88-1.3-1.3-1.92H6c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v1h-.15c-.64.66-.64 1.66 0 2.22H20c.55 0 1 .45 1 1zm-1 2h-2c-.28 0-.5-.22-.5-.5V12c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2.5c0 .28-.22.5-.5.5z"></path>
                            </svg>
                        </div>
                        4+ overseas
                        in 3+ countries

                    </div>
                    <div
                        style={{
                            position: "relative", // Enables positioning of the logo
                            backgroundColor: "#ffffff",
                            color: "#1E1E56",
                            borderRadius: "15px",
                            padding: "2rem 1rem",
                            width: "150px",
                            textAlign: "center",
                            fontWeight: "600",
                            fontSize: "0.9rem",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                        }}
                    >
                        {/* Logo */}
                        <div
                            style={{
                                position: "absolute",
                                top: "-15px", // Moves the logo above the card
                                left: "15px",
                                backgroundColor: "#4A3AFF",
                                borderRadius: "50%",
                                width: "40px",
                                height: "40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="#FFFFFF" // White logo
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 21h6v-1H9v1zM9 19h6v-1H9v1zM9 17h6v-1H9v1zM5 15h2v-1H5v1zM9 15h2v-1H9v1zM13 15h2v-1h-2v1zM17 15h2v-1h-2v1zM7 5h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1zm1 4h8v2H8V9zm-3 5h2v1H5v-1zm15-6v1c0 .55-.45 1-1 1h-1.1c.58.62.1 1.92-1.3 1.92-.89 0-1.57-.59-1.6-1.43l.2-.67H9.8l.2.67c-.03.84-.71 1.43-1.6 1.43-1.4 0-1.88-1.3-1.3-1.92H6c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v1h-.15c-.64.66-.64 1.66 0 2.22H20c.55 0 1 .45 1 1zm-1 2h-2c-.28 0-.5-.22-.5-.5V12c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2.5c0 .28-.22.5-.5.5z"></path>
                            </svg>
                        </div>
                        Seamless project
                        execution
                    </div>
                </div>

                {/* Right Side */}
                <div
                    style={{
                        background: "#023469",
                        borderRadius: "15px",
                        padding: "2rem",
                        maxWidth: "600px",
                        position: "relative",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "3rem",
                            fontWeight: "bold",
                            marginBottom: "1rem",
                            color: 'white'
                        }}
                    >
                        04
                    </h1>
                    <h2
                        style={{
                            fontSize: "1.5rem",
                            fontWeight: "600",
                            marginBottom: "1rem",
                            color: 'white'
                        }}
                    >
                        Advanced Facilities:
                    </h2>
                    <p
                        style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            lineHeight: "1.5",
                        }}
                    >
                        In-house manufacturing for
                        CRP, HVAC ducting, process
                        equipment, and SS furniture,
                        ensuring quality and timely
                        delivery.
                    </p>

                </div>

            </section>

            {/* 5th  */}
            <section
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#023469",
                    padding: "4rem",
                    borderRadius: "1px",
                    color: "#ffffff",
                    fontFamily: "Cinzel",
                    marginBottom: "2rem",
                }}
            >
                {/* Left Side */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div
                        style={{
                            position: "relative", // Enables positioning of the logo
                            backgroundColor: "#ffffff",
                            color: "#1E1E56",
                            borderRadius: "15px",
                            padding: "2rem 1rem",
                            width: "150px",
                            textAlign: "center",
                            fontWeight: "600",
                            fontSize: "0.9rem",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                        }}
                    >
                        {/* Logo */}
                        <div
                            style={{
                                position: "absolute",
                                top: "-15px", // Moves the logo above the card
                                left: "15px",
                                backgroundColor: "#4A3AFF",
                                borderRadius: "50%",
                                width: "40px",
                                height: "40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="#FFFFFF" // White logo
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 21h6v-1H9v1zM9 19h6v-1H9v1zM9 17h6v-1H9v1zM5 15h2v-1H5v1zM9 15h2v-1H9v1zM13 15h2v-1h-2v1zM17 15h2v-1h-2v1zM7 5h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1zm1 4h8v2H8V9zm-3 5h2v1H5v-1zm15-6v1c0 .55-.45 1-1 1h-1.1c.58.62.1 1.92-1.3 1.92-.89 0-1.57-.59-1.6-1.43l.2-.67H9.8l.2.67c-.03.84-.71 1.43-1.6 1.43-1.4 0-1.88-1.3-1.3-1.92H6c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v1h-.15c-.64.66-.64 1.66 0 2.22H20c.55 0 1 .45 1 1zm-1 2h-2c-.28 0-.5-.22-.5-.5V12c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2.5c0 .28-.22.5-.5.5z"></path>
                            </svg>
                        </div>
                        Quality
                        Assurance

                    </div>
                    <div
                        style={{
                            position: "relative", // Enables positioning of the logo
                            backgroundColor: "#ffffff",
                            color: "#1E1E56",
                            borderRadius: "15px",
                            padding: "2rem 1rem",
                            width: "150px",
                            textAlign: "center",
                            fontWeight: "600",
                            fontSize: "0.9rem",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                        }}
                    >
                        {/* Logo */}
                        <div
                            style={{
                                position: "absolute",
                                top: "-15px", // Moves the logo above the card
                                left: "15px",
                                backgroundColor: "#4A3AFF",
                                borderRadius: "50%",
                                width: "40px",
                                height: "40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="#FFFFFF" // White logo
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 21h6v-1H9v1zM9 19h6v-1H9v1zM9 17h6v-1H9v1zM5 15h2v-1H5v1zM9 15h2v-1H9v1zM13 15h2v-1h-2v1zM17 15h2v-1h-2v1zM7 5h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1zm1 4h8v2H8V9zm-3 5h2v1H5v-1zm15-6v1c0 .55-.45 1-1 1h-1.1c.58.62.1 1.92-1.3 1.92-.89 0-1.57-.59-1.6-1.43l.2-.67H9.8l.2.67c-.03.84-.71 1.43-1.6 1.43-1.4 0-1.88-1.3-1.3-1.92H6c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v1h-.15c-.64.66-.64 1.66 0 2.22H20c.55 0 1 .45 1 1zm-1 2h-2c-.28 0-.5-.22-.5-.5V12c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2.5c0 .28-.22.5-.5.5z"></path>
                            </svg>
                        </div>
                        Safety
                        Standards
                    </div>
                </div>

                {/* Right Side */}
                <div
                    style={{
                        background: "#023469",
                        borderRadius: "15px",
                        padding: "2rem",
                        maxWidth: "600px",
                        position: "relative",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "3rem",
                            fontWeight: "bold",
                            marginBottom: "1rem",
                            color: 'white'
                        }}
                    >
                        05
                    </h1>
                    <h2
                        style={{
                            fontSize: "1.5rem",
                            fontWeight: "600",
                            marginBottom: "1rem",
                            color: 'white'
                        }}
                    >
                        Innovative Solutions:
                    </h2>
                    <p
                        style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            lineHeight: "1.5",
                        }}
                    >
                        End-to-end project
                        management, from concept
                        to commissioning.

                    </p>

                </div>

            </section>

            {/*6th  */}
            <section 
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#023469",
                    padding: "4rem",
                    borderRadius: "1px",
                    color: "#ffffff",
                    fontFamily: "Cinzel",
                    marginBottom: "2rem",
                }}
            >
                {/* Left Side */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div
                        style={{
                            position: "relative", // Enables positioning of the logo
                            backgroundColor: "#ffffff",
                            color: "#1E1E56",
                            borderRadius: "15px",
                            padding: "2rem 1rem",
                            width: "150px",
                            textAlign: "center",
                            fontWeight: "600",
                            fontSize: "0.9rem",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                        }}
                    >
                        {/* Logo */}
                        <div
                            style={{
                                position: "absolute",
                                top: "-15px", // Moves the logo above the card
                                left: "15px",
                                backgroundColor: "#4A3AFF",
                                borderRadius: "50%",
                                width: "40px",
                                height: "40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="#FFFFFF" // White logo
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 21h6v-1H9v1zM9 19h6v-1H9v1zM9 17h6v-1H9v1zM5 15h2v-1H5v1zM9 15h2v-1H9v1zM13 15h2v-1h-2v1zM17 15h2v-1h-2v1zM7 5h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1zm1 4h8v2H8V9zm-3 5h2v1H5v-1zm15-6v1c0 .55-.45 1-1 1h-1.1c.58.62.1 1.92-1.3 1.92-.89 0-1.57-.59-1.6-1.43l.2-.67H9.8l.2.67c-.03.84-.71 1.43-1.6 1.43-1.4 0-1.88-1.3-1.3-1.92H6c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v1h-.15c-.64.66-.64 1.66 0 2.22H20c.55 0 1 .45 1 1zm-1 2h-2c-.28 0-.5-.22-.5-.5V12c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2.5c0 .28-.22.5-.5.5z"></path>
                            </svg>
                        </div>
                        Pharma
                        Solutions

                    </div>
                    <div
                        style={{
                            position: "relative", // Enables positioning of the logo
                            backgroundColor: "#ffffff",
                            color: "#1E1E56",
                            borderRadius: "15px",
                            padding: "2rem 1rem",
                            width: "150px",
                            textAlign: "center",
                            fontWeight: "600",
                            fontSize: "0.9rem",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                        }}
                    >
                        {/* Logo */}
                        <div
                            style={{
                                position: "absolute",
                                top: "-15px", // Moves the logo above the card
                                left: "15px",
                                backgroundColor: "#4A3AFF",
                                borderRadius: "50%",
                                width: "40px",
                                height: "40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="#FFFFFF" // White logo
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 21h6v-1H9v1zM9 19h6v-1H9v1zM9 17h6v-1H9v1zM5 15h2v-1H5v1zM9 15h2v-1H9v1zM13 15h2v-1h-2v1zM17 15h2v-1h-2v1zM7 5h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1zm1 4h8v2H8V9zm-3 5h2v1H5v-1zm15-6v1c0 .55-.45 1-1 1h-1.1c.58.62.1 1.92-1.3 1.92-.89 0-1.57-.59-1.6-1.43l.2-.67H9.8l.2.67c-.03.84-.71 1.43-1.6 1.43-1.4 0-1.88-1.3-1.3-1.92H6c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v1h-.15c-.64.66-.64 1.66 0 2.22H20c.55 0 1 .45 1 1zm-1 2h-2c-.28 0-.5-.22-.5-.5V12c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2.5c0 .28-.22.5-.5.5z"></path>
                            </svg>
                        </div>
                        In-House
                        Manufacturing
                    </div>
                </div>

                {/* Right Side */}
                <div
                    style={{
                        background: "#023469",
                        borderRadius: "15px",
                        padding: "2rem",
                        maxWidth: "600px",
                        position: "relative",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "3rem",
                            fontWeight: "bold",
                            marginBottom: "1rem",
                            color: 'white'
                        }}
                    >
                        06
                    </h1>
                    <h2
                        style={{
                            fontSize: "1.5rem",
                            fontWeight: "600",
                            marginBottom: "1rem",
                            color: 'white'
                        }}
                    >
                        Commitment to Quality
                        & Safety:

                    </h2>
                    <p
                        style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            lineHeight: "1.5",
                        }}
                    >
                        We prioritize safety, quality,
                        and client satisfaction in
                        every project we undertake.
                    </p>

                </div>

            </section>

            {/*7th  */}
            <section
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#023469",
                    padding: "4rem",
                    borderRadius: "1px",
                    color: "#ffffff",
                    fontFamily: "Cinzel",
                    marginBottom: "2rem",
                }}
            >
                {/* Left Side */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div
                        style={{
                            position: "relative", // Enables positioning of the logo
                            backgroundColor: "#ffffff",
                            color: "#1E1E56",
                            borderRadius: "15px",
                            padding: "2rem 1rem",
                            width: "150px",
                            textAlign: "center",
                            fontWeight: "600",
                            fontSize: "0.9rem",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                        }}
                    >
                        {/* Logo */}
                        <div
                            style={{
                                position: "absolute",
                                top: "-15px", // Moves the logo above the card
                                left: "15px",
                                backgroundColor: "#4A3AFF",
                                borderRadius: "50%",
                                width: "40px",
                                height: "40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="#FFFFFF" // White logo
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 21h6v-1H9v1zM9 19h6v-1H9v1zM9 17h6v-1H9v1zM5 15h2v-1H5v1zM9 15h2v-1H9v1zM13 15h2v-1h-2v1zM17 15h2v-1h-2v1zM7 5h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1zm1 4h8v2H8V9zm-3 5h2v1H5v-1zm15-6v1c0 .55-.45 1-1 1h-1.1c.58.62.1 1.92-1.3 1.92-.89 0-1.57-.59-1.6-1.43l.2-.67H9.8l.2.67c-.03.84-.71 1.43-1.6 1.43-1.4 0-1.88-1.3-1.3-1.92H6c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v1h-.15c-.64.66-.64 1.66 0 2.22H20c.55 0 1 .45 1 1zm-1 2h-2c-.28 0-.5-.22-.5-.5V12c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2.5c0 .28-.22.5-.5.5z"></path>
                            </svg>
                        </div>
                        Project
                        Execution

                    </div>
                    <div
                        style={{
                            position: "relative", // Enables positioning of the logo
                            backgroundColor: "#ffffff",
                            color: "#1E1E56",
                            borderRadius: "15px",
                            padding: "2rem 1rem",
                            width: "150px",
                            textAlign: "center",
                            fontWeight: "600",
                            fontSize: "0.9rem",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                        }}
                    >
                        {/* Logo */}
                        <div
                            style={{
                                position: "absolute",
                                top: "-15px", // Moves the logo above the card
                                left: "15px",
                                backgroundColor: "#4A3AFF",
                                borderRadius: "50%",
                                width: "40px",
                                height: "40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="#FFFFFF" // White logo
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 21h6v-1H9v1zM9 19h6v-1H9v1zM9 17h6v-1H9v1zM5 15h2v-1H5v1zM9 15h2v-1H9v1zM13 15h2v-1h-2v1zM17 15h2v-1h-2v1zM7 5h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1zm1 4h8v2H8V9zm-3 5h2v1H5v-1zm15-6v1c0 .55-.45 1-1 1h-1.1c.58.62.1 1.92-1.3 1.92-.89 0-1.57-.59-1.6-1.43l.2-.67H9.8l.2.67c-.03.84-.71 1.43-1.6 1.43-1.4 0-1.88-1.3-1.3-1.92H6c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v1h-.15c-.64.66-.64 1.66 0 2.22H20c.55 0 1 .45 1 1zm-1 2h-2c-.28 0-.5-.22-.5-.5V12c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2.5c0 .28-.22.5-.5.5z"></path>
                            </svg>
                        </div>
                        Cost-Effective
                        Solutions
                    </div>
                </div>

                {/* Right Side */}
                <div
                    style={{
                        background: "#023469",
                        borderRadius: "15px",
                        padding: "2rem",
                        maxWidth: "600px",
                        position: "relative",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "3rem",
                            fontWeight: "bold",
                            marginBottom: "1rem",
                            color: 'white'
                        }}
                    >
                        07
                    </h1>
                    <h2
                        style={{
                            fontSize: "1.5rem",
                            fontWeight: "600",
                            marginBottom: "1rem",
                            color: 'white'
                        }}
                    >
                        Industries Served:
                    </h2>
                    <p
                        style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            lineHeight: "1.5",
                        }}
                    >
                        Pharmaceuticals, API, food,
                        laboratories, and more.

                    </p>

                </div>

            </section>

            {/*8th  */}
            <section
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#023469",
                    padding: "4rem",
                    borderRadius: "1px",
                    color: "#ffffff",
                    fontFamily: "Cinzel",
                    marginBottom: "2rem",
                }}
            >
                {/* Left Side */}
                <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
                    <div
                        style={{
                            position: "relative", // Enables positioning of the logo
                            backgroundColor: "#ffffff",
                            color: "#1E1E56",
                            borderRadius: "15px",
                            padding: "2rem 1rem",
                            width: "150px",
                            textAlign: "center",
                            fontWeight: "600",
                            fontSize: "0.9rem",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                        }}
                    >
                        {/* Logo */}
                        <div
                            style={{
                                position: "absolute",
                                top: "-15px", // Moves the logo above the card
                                left: "15px",
                                backgroundColor: "#4A3AFF",
                                borderRadius: "50%",
                                width: "40px",
                                height: "40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="#FFFFFF" // White logo
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 21h6v-1H9v1zM9 19h6v-1H9v1zM9 17h6v-1H9v1zM5 15h2v-1H5v1zM9 15h2v-1H9v1zM13 15h2v-1h-2v1zM17 15h2v-1h-2v1zM7 5h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1zm1 4h8v2H8V9zm-3 5h2v1H5v-1zm15-6v1c0 .55-.45 1-1 1h-1.1c.58.62.1 1.92-1.3 1.92-.89 0-1.57-.59-1.6-1.43l.2-.67H9.8l.2.67c-.03.84-.71 1.43-1.6 1.43-1.4 0-1.88-1.3-1.3-1.92H6c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v1h-.15c-.64.66-.64 1.66 0 2.22H20c.55 0 1 .45 1 1zm-1 2h-2c-.28 0-.5-.22-.5-.5V12c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2.5c0 .28-.22.5-.5.5z"></path>
                            </svg>
                        </div>

                        {/* Card Content */}
                        <div>
                            Turnkey
                            Solutions
                        </div>
                    </div>

                    <div
                        style={{
                            position: "relative", // Enables positioning of the logo
                            backgroundColor: "#ffffff",
                            color: "#1E1E56",
                            borderRadius: "15px",
                            padding: "2rem 1rem",
                            width: "150px",
                            textAlign: "center",
                            fontWeight: "600",
                            fontSize: "0.9rem",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                        }}
                    >
                        {/* Logo */}
                        <div
                            style={{
                                position: "absolute",
                                top: "-15px", // Moves the logo above the card
                                left: "15px",
                                backgroundColor: "#4A3AFF",
                                borderRadius: "50%",
                                width: "40px",
                                height: "40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="#FFFFFF" // White logo
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 21h6v-1H9v1zM9 19h6v-1H9v1zM9 17h6v-1H9v1zM5 15h2v-1H5v1zM9 15h2v-1H9v1zM13 15h2v-1h-2v1zM17 15h2v-1h-2v1zM7 5h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1zm1 4h8v2H8V9zm-3 5h2v1H5v-1zm15-6v1c0 .55-.45 1-1 1h-1.1c.58.62.1 1.92-1.3 1.92-.89 0-1.57-.59-1.6-1.43l.2-.67H9.8l.2.67c-.03.84-.71 1.43-1.6 1.43-1.4 0-1.88-1.3-1.3-1.92H6c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v1h-.15c-.64.66-.64 1.66 0 2.22H20c.55 0 1 .45 1 1zm-1 2h-2c-.28 0-.5-.22-.5-.5V12c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2.5c0 .28-.22.5-.5.5z"></path>
                            </svg>
                        </div>
                        In-House
                        Manufacturing
                    </div>
                </div>

                {/* Right Side */}
                <div
                    style={{
                        background: "#023469",
                        borderRadius: "15px",
                        padding: "2rem",
                        maxWidth: "650px",
                        position: "relative",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "3rem",
                            fontWeight: "bold",
                            marginBottom: "1rem",
                            color: 'white'
                        }}
                    >
                        08
                    </h1>
                    <h2
                        style={{
                            fontSize: "1.5rem",
                            fontWeight: "600",
                            marginBottom: "1rem",
                            color: 'white'
                        }}
                    >
                        Cost Efficiency:
                    </h2>
                    <p
                        style={{
                            fontSize: "1rem",
                            fontWeight: "400",
                            lineHeight: "1.5",
                        }}
                    >
                        In-house cost
                        management ensures
                        competitive pricing.

                    </p>

                </div>

            </section>
            {
                /* ========== projects section ========== */
            }

        </main>

        {
            /* ========== footer section ========== */
        }
        <Footer18 />
    </Fragment>;
};

export default Projects;