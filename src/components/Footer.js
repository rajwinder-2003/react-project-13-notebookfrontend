import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div id='Footer'>
        <div className="container-fluid">
            <div className="col-10 mx-auto">
                <div className="row">
                    <div className="col-8 mx-auto d-block w-100 mt-5 mb-5">
                    {/* <!-- Footer --> */}
                        <footer className="text-center text-lg-start bg-dark text-muted">
                        {/* <!-- Section: Social media --> */}
                        <section
                            className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                        >
                            {/* <!-- Left --> */}
                            <div className="me-5 d-none d-lg-block">
                            <span>Get connected with us on social networks:</span>
                            </div>
                            {/* <!-- Left --> */}

                            {/* <!-- Right --> */}
                            <div>
                            <a href="https://www.facebook.com/" target="_blank" className="me-4 text-reset">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com/" target="_blank" className="me-4 text-reset">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.google.co.in/" target="_blank" className="me-4 text-reset">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="https://www.instagram.com/raj_winder2003/" target="_blank" className="me-4 text-reset">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" target="_blank" className="me-4 text-reset">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#"target="_blank" className="me-4 text-reset">
                                <i className="fab fa-github"></i>
                            </a>
                            </div>
                            {/* <!-- Right --> */}
                        </section>
                        {/* <!-- Section: Social media --> */}

                        {/* <!-- Section: Links  --> */}
                        <section className="">
                            <div className="container text-center text-md-start mt-5">
                            {/* <!-- Grid row --> */}
                            <div className="row mt-3">
                                {/* <!-- Grid column --> */}
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* <!-- Content --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>iNotebook
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                                </div>
                                {/* <!-- Grid column --> */}

                                {/* <!-- Grid column --> */}
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <Link to="/about" className="text-reset">About</Link>
                                </p>
                                <p>
                                    <Link to="/Login" className="text-reset">Login</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-reset">home</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-reset">our</Link>
                                </p>
                                </div>
                                {/* <!-- Grid column -->

                                <!-- Grid column --> */}
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <Link to="" className="text-reset">Pricing</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-reset">Settings</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-reset">Orders</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-reset">Help</Link>
                                </p>
                                </div>
                                {/* <!-- Grid column -->

                                <!-- Grid column --> */}
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    info@example.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                                </div>
                                {/* <!-- Grid column --> */}
                            </div>
                            {/* <!-- Grid row --> */}
                            </div>
                        </section>
                        {/* <!-- Section: Links  --> */}

                        {/* <!-- Copyright --> */}
                        <div className="text-center p-4" style={{backgroundcolor: "rgba(0, 0, 0, 0.05)"}}>
                            © 2021 Copyright:
                            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                        </div>
                        {/* //<!-- Copyright --> */}
                        </footer>
                        {/* <!-- Footer --> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer