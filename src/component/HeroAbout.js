import React from 'react'

const HeroAbout = () => {
  return (
    <div>
          <div class="about-us">
          <div class="container">
              <div class="row">
                  <div class="col-lg-6">
                      {/* <!-- About Us Images Start --> */}
                      <div class="about-us-images">
                          {/* <!-- About Image 1 Start --> */}
                          <div class="about-img-1">
                              <figure class="image-anime ">
                                  <img src="images/about-img-1.jpg" alt=""/>
                              </figure>
                          </div>
                          {/* <!-- About Image 1 End --> */}
  
                          {/* <!-- About Image 2 Start --> */}
                          <div class="about-img-2">
                              <figure class="image-anime ">
                                  <img src="images/about-img-2.jpg" alt=""/>
                              </figure>
                          </div>
                          {/* <!-- About Image 2 End --> */}
  
                          {/* <!-- Contact Circle Start --> */}
                          <div class="contact-circle">
                              <img src="images/contact-us-img.svg" alt=""/>
                          </div>
                          {/* <!-- Contact Circle End --> */}
                      </div>
                      {/* <!-- About Us Images End --> */}
                  </div>
                  
                  <div class="col-lg-6">
                      {/* <!-- About Us Content Start --> */}
                      <div class="about-us-content">
                          {/* <!-- Section Title Start --> */}
                          <div class="section-title">
                              <h3 class="wow fadeInUp">about us</h3>
                              <h2 class="text-anime-style-2" data-cursor="-opaque">Trusted guidance for <span>financial growth</span></h2>
                              <p class="wow fadeInUp" data-wow-delay="0.2s">With years of expertise in finance and consulting, we provide tailored strategies to help you achieve sustainable growth. Our commitment is to guide you  integrity, insight, and a personalized approach.</p>
                          </div>
                          {/* <!-- Section Title End --> */}
  
                          {/* <!-- About Content body Start --> */}
                          <div class="about-content-body">
                              <div class="row align-items-center">
                                  <div class="col-md-6">
                                      {/* <!-- About Content Info Start --> */}
                                      <div class="about-content-info">
                                          {/* <!-- About Goal Box Start --> */}
                                          <div class="about-goal-box wow fadeInUp" data-wow-delay="0.4s">
                                              <div class="icon-box">
                                                  <img src="images/icon-financial-strategies.svg" alt=""/>
                                              </div>
              
                                              <div class="about-goal-box-content">
                                                  <h3>financial strategies</h3>
                                                  <p>Tailored plans to meet your unique financial needs and goals.</p>
                                              </div>
                                          </div>
                                          {/* <!-- About Goal Box End --> */}
                  
                                          {/* <!-- About Contact Box Start --> */}
                                          <div class="about-contact-box wow fadeInUp" data-wow-delay="0.6s">
                                              <div class="icon-box">
                                                  <img src="images/icon-phone.svg" alt=""/>
                                              </div>
  
                                              <div class="about-contact-content">
                                                  <p><a >+(658) 456-975</a></p>
                                              </div>
                                          </div>
                                          {/* <!-- About Contact Box End --> */}
                                      </div>
                                      {/* <!-- About Content Info End --> */}
                                  </div>
  
                                  <div class="col-md-6">
                                      {/* <!-- About Author Box Start --> */}
                                      <div class="about-author-box wow fadeInUp" data-wow-delay="0.4s">
                                          {/* <!-- About Info Box Start --> */}
                                          <div class="about-info-box">
                                              <figure class="image-anime ">
                                                  <img src="images/author-1.jpg" alt=""/>
                                              </figure>
              
                                              <div class="about-author-content">
                                                  <h3>Sarah T.</h3>
                                                  <p>Co. founder</p>
                                              </div>
                                          </div>
                                          {/* <!-- About Info Box End --> */}
                                          
                                          {/* <!-- About Info List Start --> */}
                                          <div class="about-info-list">
                                              <ul>
                                                  <li>risk management</li>
                                                  <li>communication</li>
                                                  <li>24/7 support</li>
                                              </ul>
                                          </div>
                                          {/* <!-- About Info List End --> */}
                                      </div>
                                      {/* <!-- About Author Box End --> */}
                                  </div>
                              </div>
                          </div>
                          {/* <!-- About Content body End --> */}
                      </div>
                      {/* <!-- About Us Content End --> */}
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default HeroAbout