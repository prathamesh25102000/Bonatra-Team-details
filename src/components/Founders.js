import React from "react";

const Founders = () => {
    return (
        <>
            <div className="container" style={{"marginTop":"30px"}}>
                <div className="header">
                    <h2 className="heading" style={{ "textAlign": "center", "marginBottom": "45px","fontSize":"42px","backgroundColor":"white" }}>Our Founders</h2>
                </div>
                <div className="row founders">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="founder-container">
                            <a className="team-linkedin" href="https://in.linkedin.com/in/rajesh-reddy-254a278" target="_blank">
                                <img className="i1 founder-img --square-img" src="https://www.venwiz.com/images/team/Rajesh_v2.jpg" alt="Rajesh" />
                                <i className="fab fa-linkedin-in"> </i>
                            </a>

                            <div className="about-content">
                                <h3 className="founder-name">
                                    Rajesh
                                    <span>CEO &amp; CO-FOUNDER</span>
                                </h3>
                                <p>
                                    Experience in building teams and scaling-up across manufacturing, consulting and start ups<br />
                                    IIT-M &amp; ISB alum
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="founder-container">
                            <a className="team-linkedin" href="https://in.linkedin.com/in/sandesh-paturi-52311216" target="_blank">
                                <img className="i1 founder-img --square-img" src="https://www.venwiz.com/images/team/Sandesh_v2.jpg" alt="Sandesh" />
                                <i className="fab fa-linkedin-in"> </i>
                            </a>
                            <div className="about-content">
                                <h3 className="founder-name">
                                    Sandesh
                                    <span>CBO &amp; CO-FOUNDER</span>
                                </h3>
                                <p>
                                    Experience across value-chain from Sales to Projects in global manufacturing firms<br />
                                    IIT-B &amp; ISB alum
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Founders