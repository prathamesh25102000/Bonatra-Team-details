import React, { useEffect, useState } from "react";

function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}

const Footer = () => {

    const [windowSize, setWindowSize] = useState(getWindowSize());
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);


    return (
        <>

            {windowSize.innerWidth > 1150 ?
                <div style={{ "backgroundColor": "#0a1739", "paddingTop": "50px", "paddingBottom": "50px" }}>
                    <div className="container" >
                        <div className="row" >
                            <div className="col-sm-2" style={{ "marginLeft": "auto", "marginRight": "auto" }}>
                                <div className="container">
                                    <div className="row row-cols-1 ">
                                        <div className="col"><h6 className="r1 fta">Manufacturer</h6></div>
                                        <div className="col ft">Search Vendors</div>
                                        <div className="col ft">Discover Vendors</div>
                                        <div className="col ft">Platform Demo</div>
                                        <div className="col ft">Our Offerings</div>
                                        <div className="col ft">Related Blogs</div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2" style={{ "marginLeft": "auto", "marginRight": "auto" }}>
                                <div className="container">
                                    <div className="row row-cols-1">
                                        <div className="col"><h6 className="r1 fta" >Vendor</h6></div>
                                        <div className="col ft">Register on Venwiz</div>
                                        <div className="col ft">Featured Vendors</div>
                                        <div className="col ft">Our Offerings</div>
                                        <div className="col ft">Related Blogs</div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2" style={{ "marginLeft": "auto", "marginRight": "auto" }}>
                                <div className="container">
                                    <div className="row row-cols-1">
                                        <div className="col"><h6 className="r1 fta">Company</h6></div>
                                        <div className="col ft">About Us</div>
                                        <div className="col ft">Our Founders</div>
                                        <div className="col ft">Our Team</div>
                                        <div className="col ft">Careers</div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2" style={{ "marginLeft": "auto", "marginRight": "auto" }}>
                                <div className="container">
                                    <div className="row row-cols-1">
                                        <div className="col"><h6 className="r1 fta">Blogs</h6></div>
                                        <div className="col ft">Blogs</div>
                                        <div className="col ft">Case Studies</div>
                                        <div className="col ft">Resources</div>
                                        <div className="col ft">Videos</div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2" style={{ "marginLeft": "auto", "marginRight": "auto" }}>
                                <div className="container" style={{ "marginLeft": "auto", "marginRight": "auto" }}>
                                    <div className="row row-cols-1" >
                                        <div className="col"><h6 className="r1 fta">Help & Support</h6></div>
                                        <div className="col ft">For Manufacturers</div>
                                        <div className="col ft">For Vendors</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container" >
                            <div className="row" style={{ "marginTop": "30px" }}>
                                <div className="col-sm-3" style={{ "marginLeft": "auto", "marginRight": "auto" }}>
                                    <div className="container">
                                        <div className="row row-cols-1 ">
                                            <div className="col"> <p className="ft"><i className="fa-solid fa-globe" ></i> Headquarters Bangalore India</p></div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3" style={{ "marginLeft": "auto", "marginRight": "auto" }}>
                                    <div className="container">
                                        <div className="row row-cols-1 ">
                                            <div className="col"> <p className="ft"><i className="fa-solid fa-envelope"></i> info@venwiz.com</p></div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3" style={{ "marginLeft": "auto", "marginRight": "auto" }}>
                                    <div className="container">
                                        <div className="row row-cols-1 ">
                                            <div className="col"><p className="ft"><i className="fa-solid fa-phone-volume"></i> +91 9650001750</p></div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3" style={{ "marginLeft": "auto", "marginRight": "auto" }}>
                                    <div className="container">
                                        <div className="row row-cols-1 ">
                                            <div className="col">
                                                <p className="fta">Connect with us</p>
                                                <div className="row" >
                                                    <div className="col order-first" >
                                                        <i className="fa-brands fa-linkedin ft"></i>
                                                    </div>
                                                    <div className="col">
                                                        <i className="fa-brands fa-twitter ft"></i>
                                                    </div>
                                                    <div className="col">
                                                        <i className="fa-brands fa-angellist ft"></i>
                                                    </div>
                                                    <div className="col order-last">
                                                        <i className="fa-brands fa-whatsapp ft"></i>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="container">
                                        <div className="row row-cols-1">
                                            <div className="col">
                                                <span className="fl">©2022 Venwiz Technologies Private Limited. All Rights Reserved. See Terms and Conditions, Privacy Statement

                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                :
                <div  style={{ "backgroundColor": "#0a1739", "paddingTop": "50px", "paddingBottom": "50px" }}>
                    <div className="container">
                    <div className="accordion" id="accordionExample" style={{ "color": "#0a1739" }}>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne" >
                                <button className="accordion-button fta" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    Manufacturer
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse hide" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{ "backgroundColor": "#0a1739" }}>
                                <div className="accordion-body">
                                    <div className="col ft">Search Vendors</div>
                                    <div className="col ft">Discover Vendors</div>
                                    <div className="col ft">Platform Demo</div>
                                    <div className="col ft">Our Offerings</div>
                                    <div className="col ft">Related Blogs</div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed fta" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Vendor
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={{ "backgroundColor": "#0a1739" }}>
                                <div className="accordion-body">
                                    <div className="col ft">Register on Venwiz</div>
                                    <div className="col ft">Featured Vendors</div>
                                    <div className="col ft">Our Offerings</div>
                                    <div className="col ft">Related Blogs</div>

                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed fta" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <div className="col">Company</div>
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={{ "backgroundColor": "#0a1739" }}>
                                <div className="accordion-body">

                                    <div className="col ft">About Us</div>
                                    <div className="col ft">Our Founders</div>
                                    <div className="col ft">Our Team</div>
                                    <div className="col ft">Careers</div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed fta" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    <div className="col">Blogs</div>
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample" style={{ "backgroundColor": "#0a1739" }}>
                                <div className="accordion-body">

                                    <div className="col ft">Blogs</div>
                                    <div className="col ft">Case Studies</div>
                                    <div className="col ft">Resources</div>
                                    <div className="col ft">Videos</div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed fta" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    <div className="col">Help & Support</div>
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample" style={{ "backgroundColor": "#0a1739" }}>
                                <div className="accordion-body">
                                    <div className="col ft">For Manufacturers</div>
                                    <div className="col ft">For Vendors</div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row" style={{ "marginTop": "30px" }}>
                        <div className="col-12">
                            <div className="col"> <p className="ft"><i className="fa-solid fa-globe ft" ></i> Headquarters Bangalore India</p></div>

                        </div>
                        <div className="col-12">
                            <div className="col"> <p className="ft"><i className="fa-solid fa-envelope ft"></i> info@venwiz.com</p></div>

                        </div>
                        <div className="col-12">
                            <div className="col"><p className="ft"><i className="fa-solid fa-phone-volume ft"></i> +91 9650001750</p></div>

                        </div>
                        <div className="col-12">
                            <div className="col-4">
                                <p className="fta">Connect with us</p>
                                <div className="row" >
                                    <div className="col order-first" >
                                        <i className="fa-brands fa-linkedin ft"></i>
                                    </div>
                                    <div className="col">
                                        <i className="fa-brands fa-twitter ft"></i>
                                    </div>
                                    <div className="col">
                                        <i className="fa-brands fa-angellist ft"></i>
                                    </div>
                                    <div className="col order-last">
                                        <i className="fa-brands fa-whatsapp ft"></i>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-12" style={{"marginTop":"50px"}}>
                            <span className="fl">©2022 Venwiz Technologies Private Limited. All Rights Reserved. See Terms and Conditions, Privacy Statement </span>

                        </div>
                        </div>
                    </div>
                </div>
            }


        </>
    )
}

export default Footer