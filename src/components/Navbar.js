import React from "react";

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ "backgroundColor": "white","padding":"15px" }}>
                <div className="container-fluid" style={{ "overFlow": "hidden", "display": "flex", "flexFlow": "row wrap", "alignItems": "stretch", "maxWidth": "1160px" }}>
                    <div style={{ "width": "350px" }}>
                        <a className="navbar-brand" href="#" >
                            <img src="https://www.bonatra.com/src/assets/healthApp/bonatra-raush-logo-bc574f3027c78738842d0d5a4df824b7.png" alt="" width="150px" height="auto" />
                        </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav" >
                            <li className="nav-item" style={{ "width": "120px" }} >
                                <a className="nav-link active" aria-current="page" href="#" style={{ "textAlign": "left" }}>Manufacturer</a>
                            </li>
                            <li className="nav-item" style={{ "width": "80px" }}>
                                <a className="nav-link active" href="#" style={{ "textAlign": "left" }}>Vendor</a>
                            </li>
                            <li className="nav-item" style={{ "width": "100px" }}>
                                <a className="nav-link active" href="#" style={{ "textAlign": "left" }}>About Us</a>
                            </li>
                            <li className="nav-item" style={{ "width": "80px" }}>
                                <a className="nav-link active" style={{ "textAlign": "left" }}>Blogs</a>
                            </li>
                            <li className="nav-item" style={{ "width": "160px" }}>
                                <a className="nav-link active" style={{ "textAlign": "left" }}>Help & Support</a>
                            </li>
                            <li className="nav-item i1" style={{ "width": "120px" }}>
                                <a className="nav-link active" style={{ "backgroundColor": "#215ec9", "textAlign": "center", "color": "white" }}>Book a Demo</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar