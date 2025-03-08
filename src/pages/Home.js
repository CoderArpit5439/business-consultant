import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
  return (
    <>
    {/* // <!-- Header Start --> */}
    <header class="main-header">
      <div class="header-sticky">
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            {/* <!-- Logo Start --> */}
            <a class="navbar-brand" href="index-2.html">
              <img src="images/logozfg.png" alt="Logo" height="80px" width="auto" style={{borderRadius:"100%"}} />
            </a>
            {/* <!-- Logo End --> */}
  
            <div class="navbar-toggle"></div>
          </div>
        </nav>
        <div class="responsive-menu"></div>
      </div>
    </header>
    {/* <!-- Header End --> */}
  
      {/* <!-- Hero Section Start --> */}
      <div class="hero">
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-lg-6">
                      {/* <!-- Hero Content Start --> */}
                      <div class="hero-content">
                          {/* <!-- Section Title Start --> */}
                          <div class="section-title dark-section">
                              <h3 class="wow fadeInUp">welcome to zero five growth</h3>
                              <h1 class="text-anime-style-2" data-cursor="-opaque"><span>Expert</span> MSME Business Consulting</h1>
                              <p class="wow fadeInUp" data-wow-delay="0.2s">We Act as an Associate to Boost your Revenue and minimise Cost</p>
                          </div>
                          {/* <!-- Section Title End --> */}
  
                          {/* <!-- Hero Content Body Start --> */}
                          <div class="hero-content-body wow fadeInUp" data-wow-delay="0.4s">
                              {/* <!-- Hero Button Start --> */}
                              <div class="hero-btn">
                                  <a onClick={()=>navigate('/contact')} class="btn-default">get started</a>
                              </div>
                              {/* <!-- Hero Button End --> */}
  
                              {/* <!-- Hero Introduction Video Start --> */}
                              {/* <div class="hero-introduction-video"> */}
                                  {/* <!-- Video Play Button Start --> */}
                                  {/* <div class="video-play-button">
                                      <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" class="popup-video" data-cursor-text="Play">
                                          <img src="images/icon-play.svg" alt=""/>
                                      </a>
                                      <p>introduction</p>
                                  </div> */}
                                  {/* <!-- Video Play Button End --> */}
                              {/* </div> */}
                              {/* <!-- Hero Introduction Video End --> */}
                          </div>
                          {/* <!-- Hero Content Body End --> */}
  
                          {/* <!-- Hero Content Footer Start --> */}
                         
                          {/* <!-- Hero Content Footer End --> */}
                      </div>
                      {/* <!-- Hero Content End --> */}
                  </div>
  
                  <div class="col-lg-6">
                      {/* <!-- Hero Image Start --> */}
                      <div class="hero-image">
                          {/* <!-- Hero Img Start --> */}
                          <div class="hero-img">
                              <figure>
                                  <img src="images/hero-img.png" alt=""/>
                              </figure>
                          </div>
                          {/* <!-- Hero Img End --> */}
  
                          {/* <!-- Company Experience Box Start --> */}
                          <div class="company-experience">
                              <h3><span class="counter">01</span>+</h3>
                              <p>Years of experience in Business consulting</p>
                          </div>
                          {/* <!-- Company Experience Box End -->                        */}
                      </div>
                      {/* <!-- Hero Image End --> */}
                  </div>
              </div>
          </div>
      </div>
      {/* <!-- Hero Section End --> */}
  
      {/* <!-- About Us Section Start --> */}
    
      {/* <!-- About Us Section End --> */}
  
      {/* <!-- Our Services Section Start --> */}
    
      {/* <!-- Our Services Section End --> */}
  
      {/* <!-- Why Choose Us Section Start --> */}
    
      {/* <!-- Why Choose Us Section End --> */}
  
      {/* <!-- Our Feature Section Stat --> */}
     
      {/* <!-- Our Feature Section End --> */}
  
      {/* <!-- Some Fact Section Start --> */}
      
      {/* <!-- Some Fact Section End --> */}
  
      {/* <!-- What We Do Section Start --> */}
     
      {/* <!-- What We Do Section End --> */}
  
      {/* <!-- How It Work Section Start --> */}
      
      {/* <!-- How It Work Section End --> */}
  
      {/* <!-- Our Pricing Section Start --> */}
     
      {/* <!-- Our Pricing Section End --> */}
  
      {/* <!-- Our FAQs Section Start--> */}
      
      {/* <!-- Our FAQs Section End--> */}
  
      {/* <!-- Our Testimonial Section Start --> */}
     
      {/* <!-- Our Testimonial Section End --> */}
  
      {/* <!-- Our Blog Section Start --> */}
     
      {/* <!-- Our Blog Section End  --> */}
  
      {/* <!-- Footer Section Start --> */}
      
      {/* <!-- Footer Section End --> */}
      </>
  )
}

export default Home