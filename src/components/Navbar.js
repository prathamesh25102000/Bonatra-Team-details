import React from "react";

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ "backgroundColor": "white","padding":"15px" }}>
                <div className="container-fluid" style={{ "overFlow": "hidden", "display": "flex", "flexFlow": "row wrap", "alignItems": "stretch", "maxWidth": "1160px" }}>
                    <div style={{ "width": "350px" }}>
                        <a className="navbar-brand" href="#" >
                            <img src="data:image/png;base64,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" alt="" width="150px" height="auto" />
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