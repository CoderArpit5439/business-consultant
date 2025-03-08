import React from 'react'

const HeroFact = () => {
  return (
    <div>
        <div class="fact-counter">
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-lg-6">
                      {/* <!-- Fact Counter Image Start --> */}
                      <div class="fact-counter-image">
                          {/* <!-- Fact Counter img Start --> */}
                          <div class="fact-counter-img">
                              <figure class="image-anime ">
                                  <img src="images/fact-counter-img.jpg" alt=""/>
                              </figure>
                          </div>
                          {/* <!-- Fact Counter img End --> */}
  
                          {/* <!-- Fact Counter Skillbar Start --> */}
                          <div class="fact-counter-skillbar">
                              <img src="images/fact-counter-skillbar-img.png" alt=""/>
                          </div>
                          {/* <!-- Fact Counter Skillbar End --> */}
                      </div>
                      {/* <!-- Fact Counter Image End --> */}
                  </div>
  
                  <div class="col-lg-6">
                      {/* <!-- Fact Counter Content Start --> */}
                      <div class="fact-counter-content">
                          {/* <!-- Section Title Start --> */}
                          <div class="section-title">
                              <h3 class="wow fadeInUp">some facts</h3>
                              <h2 class="text-anime-style-2" data-cursor="-opaque">Key facts our <span>expertise</span></h2>
                              <p class="wow fadeInUp" data-wow-delay="0.2s">Our expertise is built on years of industry experience, proven financial strategies and a commitment to client success.</p>
                          </div>
                          {/* <!-- Section Title End --> */}
  
                          {/* <!-- Fact Counter Box List Start --> */}
                          <div class="fact-counter-box-list">
                              {/* <!-- Fact Counter Box Start --> */}
                              <div class="fact-counter-box">
                                  <div class="icon-box">
                                      <img src="images/icon-fact-counter-1.svg" alt=""/>
                                  </div>
  
                                  <div class="fact-counter-box-content">
                                      <h2><span class="counter">25</span>+</h2>
                                      <p>Years of experience</p>
                                  </div>
                              </div>
                              {/* <!-- Fact Counter Box End --> */}
  
                              {/* <!-- Fact Counter Box Start --> */}
                              <div class="fact-counter-box">
                                  <div class="icon-box">
                                      <img src="images/icon-fact-counter-2.svg" alt=""/>
                                  </div>
  
                                  <div class="fact-counter-box-content">
                                      <h2><span class="counter">80</span>%+</h2>
                                      <p>Client success rate</p>
                                  </div>
                              </div>
                              {/* <!-- Fact Counter Box End --> */}
  
                              {/* <!-- Fact Counter Box Start --> */}
                              <div class="fact-counter-box">
                                  <div class="icon-box">
                                      <img src="images/icon-fact-counter-3.svg" alt=""/>
                                  </div>
  
                                  <div class="fact-counter-box-content">
                                      <h2><span class="counter">20</span>+</h2>
                                      <p>global research</p>
                                  </div>
                              </div>
                              {/* <!-- Fact Counter Box End --> */}
                          </div>
                          {/* <!-- Fact Counter Box List End --> */}
  
                          {/* <!-- Fact Counter List Start --> */}
                          <div class="fact-counter-list wow fadeInUp" data-wow-delay="0.4s">
                              <ul>
                                  <li>Strategic financial planning</li>
                                  <li>Expert investment advisory</li>
                              </ul>
                          </div>
                          {/* <!-- Fact Counter List End --> */}
                      </div>
                      {/* <!-- Fact Counter Content End --> */}
                  </div>
              </div>
          </div>
       </div>
    </div>
  )
}

export default HeroFact