import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer class="main-footer">
          <div class="container">
              <div class="row">
                  <div class="col-lg-6">
                      {/* <!-- Footer Newsletter Box Start --> */}
                      <div class="footer-newsletter-box">
                          {/* <!-- Footer Newsletter Title Start --> */}
                          <div class="footer-newsletter-title">
                              <h3>Don't missed subscribed!</h3>
                          </div>
                          {/* <!-- Footer Newsletter Title End --> */}
  
                          {/* <!-- Newsletter Form start --> */}
                          <div class="newsletter-form">
                              <form id="newsletterForm" action="#" method="POST">
                                  <div class="form-group">
                                      <input type="email" name="email" class="form-control" id="mail" placeholder="Enter Your Email" required=""/>
                                      <button type="submit" class="newsletter-btn"><img src="images/arrow-white.svg" alt=""/></button>
                                  </div>
                              </form>
                          </div>
                          {/* <!-- Newsletter Form end --> */}
                      </div>
                      {/* <!-- Footer Newsletter Box End --> */}
                  </div>
                  
                  <div class="col-lg-2 col-md-4 col-6">
                      {/* <!-- Footer Links Start --> */}
                      <div class="footer-links">
                          <h3>company</h3>
                          <ul>
                              <li><a href="index.html">home</a></li>
                              <li><a href="about.html">about Us</a></li>
                              <li><a href="services.html">services</a></li>
                              <li><a href="blog.html">blog</a></li>
                          </ul>
                      </div>
                      {/* <!-- Footer Links End --> */}
                  </div>
  
                  <div class="col-lg-2 col-md-4 col-6">
                      {/* <!-- Footer Links Start --> */}
                      <div class="footer-links">
                          <h3>support</h3>
                          <ul>
                              <li><a href="#">help</a></li>
                              <li><a href="#">Privacy Policy</a></li>
                              <li><a href="#">Term & Condition</a></li>
                              <li><a >Contact us</a></li>
                          </ul>
                      </div>
                      {/* <!-- Footer Links End --> */}
                  </div>
  
                  <div class="col-lg-2  col-md-4">
                      {/* <!-- Footer Links Start --> */}
                      <div class="footer-links">
                          <h3>service</h3>
                          <ul>
                              <li><a href="service-single.html">Financial planning</a></li>
                              <li><a href="service-single.html">Investment management</a></li>
                              <li><a href="service-single.html">Retirement planning</a></li>
                              <li><a href="service-single.html">Budgeting & forecasting</a></li>
                          </ul>
                      </div>
                      {/* <!-- Footer Links End --> */}
                  </div>
  
                  <div class="col-lg-12">
                      {/* <!-- About Footer Start --> */}
                      <div class="footer-cta-box">
                          {/* <!-- Footer Logo Start --> */}
                          <div class="footer-logo">
                              <img src="images/footer-logo.svg" alt=""/>
                          </div>
                          {/* <!-- Footer Logo End --> */}
                      
                          {/* <!-- Footer Contact Box Start --> */}
                          <div class="footer-contact-box">
                              {/* <!-- Footer Contact Item Start --> */}
                              <div class="footer-contact-item">
                                  <p>Need help!</p>
                                  <h3>+1 809 120 705</h3>
                              </div>
                              {/* <!-- Footer Contact Item End --> */}
  
                              {/* <!-- Footer Contact Item Start --> */}
                              <div class="footer-contact-item">
                                  <p>E-mail now</p>
                                  <h3>info@domain.com</h3>
                              </div>
                              {/* <!-- Footer Contact Item End --> */}
                          </div>
                          {/* <!-- Footer Contact Box End --> */}
                      </div>
                      {/* <!-- About Footer End --> */}
                  </div>
              </div>
  
              {/* <!-- Footer Copyright Section Start --> */}
              <div class="footer-copyright">
                  <div class="row align-items-center">
                      <div class="col-md-5">
                          {/* <!-- Footer Copyright Start --> */}
                          <div class="footer-copyright-text">
                              <p>Copyright © 2024 All Rights Reserved.</p>
                          </div>
                          {/* <!-- Footer Copyright End --> */}
                      </div>
  
                      <div class="col-md-7">
                          {/* <!-- Footer Menu Start --> */}
                          <div class="footer-menu">
                              <ul>                            
                                  <li><a href="#">LinkedIn</a></li>
                                  <li><a href="#">Facebook</a></li>
                                  <li><a href="#">Instagram</a></li>
                                  <li><a href="#">Twitter</a></li>
                              </ul>
                          </div>
                          {/* <!-- Footer Menu End --> */}
                      </div>
                  </div>
              </div>
              {/* <!-- Footer Copyright Section End --> */}
          </div>
      </footer>
    </div>
  )
}

export default Footer