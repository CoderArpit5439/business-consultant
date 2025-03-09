import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div>
            <header class="main-header">
                <div class="header-sticky">
                    <nav class="navbar navbar-expand-lg">
                        <div class="container">
                            {/* <!-- Logo Start --> */}
                            <a class="navbar-brand" onClick={() => navigate('/')}>
                                <img src="images/logozfg.png" alt="Logo" height="80px" width="auto" style={{ borderRadius: "100%" }} />
                            </a>
                            {/* <!-- Logo End --> */}
                            {/* <!-- Main menu start  --> */}
                            <div class="collapse navbar-collapse main-menu">
                                <div class="nav-menu-wrapper">
                                    <ul class="navbar-nav mr-auto" id="menu">
                                        <li class="nav-item "><a class="nav-link" onClick={() => navigate('/')}>Home</a>
                                        </li>
                                        <li class="nav-item"><a class="nav-link" onClick={() => navigate('/contact')}>About Us</a>
                                        </li>
                                        {/* <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
                                        <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
                                        <li class="nav-item submenu"><a class="nav-link" href="#">Pages</a>
                                            <ul>
                                                <li class="nav-item"><a class="nav-link" href="service-single.html">Service Details</a></li>
                                                <li class="nav-item"><a class="nav-link" href="blog-single.html">Blog Details</a></li>
                                                <li class="nav-item"><a class="nav-link" href="team.html">Our Team</a></li>
                                                <li class="nav-item"><a class="nav-link" href="team-single.html">Team Details</a></li>
                                                <li class="nav-item"><a class="nav-link" href="pricing.html">Pricing Plan</a></li>
                                                <li class="nav-item"><a class="nav-link" href="clients.html">Clients</a></li>
                                                <li class="nav-item"><a class="nav-link" href="testimonial.html">Testimonials</a></li>
                                                <li class="nav-item"><a class="nav-link" href="image-gallery.html">Image Gallery</a></li>
                                                <li class="nav-item"><a class="nav-link" href="video-gallery.html">Video Gallery</a></li>
                                                <li class="nav-item"><a class="nav-link" href="faqs.html">FAQs</a></li>
                                                <li class="nav-item"><a class="nav-link" href="404.html">404</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item highlighted-menu"><a class="nav-link" href="contact.html">Contact Us</a></li> */}
                                    </ul>
                                </div>
                                {/* <!-- Header Btn Start --> */}
                                <div class="header-btn d-inline-flex">
                                    <a onClick={() => navigate('/contact')} class="btn-default btn-highlighted">contact us</a>
                                </div>
                                {/* <!-- Header Btn End --> */}
                            </div>
                            {/* <!-- Main menu end --> */}


                            <div class="navbar-toggle"></div>
                        </div>
                    </nav>
                    <div class="responsive-menu"></div>
                </div>
            </header>
        </div>
    )
}

export default Header