import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeroWhat = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div class="what-we-do">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            {/* <!-- What We Do Content Start --> */}
                            <div class="what-we-do-content">
                                {/* <!-- Section Title Start --> */}
                                <div class="section-title">
                                    <h3 class="wow fadeInUp">what we do</h3>
                                    <h2 class="text-anime-style-2" data-cursor="-opaque">EXPERT BUSINESS <span>GROWTH CONSULTING</span></h2>
                                    {/* <p class="wow fadeInUp" data-wow-delay="0.2s">We provide expert financial and consulting solutions designed to foster growth, stability, and long-term success.</p> */}
                                </div>
                                {/* <!-- Section Title End --> */}

                                {/* <!-- What We Do List Start --> */}
                                <div class="what-we-do-list wow fadeInUp" data-wow-delay="0.4s">
                                    <ul>
                                        <li>Sales Growth : By finding
                                            right Digital Marketing, reel
                                            marketing, Ads Marketing
                                            etc</li>
                                        <li>Consulting and
                                            building Strategies for
                                            your Business
                                        </li>
                                        <li>Finance and Compliance
                                            Management : Help on
                                            finding funds meeting
                                            Regulatory compliance</li>
                                        <li>Website Develpoment,
                                            Lead Generation and
                                            Talent Acquisition.</li>
                                    </ul>
                                </div>
                                {/* <!-- What We Do List End --> */}

                                {/* <!-- What We Do Button Start --> */}
                                <div class="what-we-do-btn wow fadeInUp" data-wow-delay="0.6s">
                                    <a onClick={()=>navigate('/contact')} class="btn-default">contact now</a>
                                </div>
                                {/* <!-- What We Do Button End --> */}
                            </div>
                            {/* <!-- What We Do Content End --> */}
                        </div>

                        <div class="col-lg-6">
                            {/* <!-- What We Do Images Start --> */}
                            <div class="what-we-do-images">
                                {/* <!-- What We Do Image 1 Start --> */}
                                <div class="what-do-we-img-1">
                                    <figure class="image-anime ">
                                        <img src="images/what-we-do-img-1.jpg" alt="" />
                                    </figure>
                                </div>
                                {/* <!-- What We Do Image 1 End --> */}

                                {/* <!-- What We Do Image 2 Start --> */}
                                <div class="what-do-we-img-2">
                                    <figure class="image-anime ">
                                        <img src="images/what-we-do-img-2.jpg" alt="" />
                                    </figure>
                                </div>
                                {/* <!-- What We Do Image 2 End --> */}

                                {/* <!-- Experience Counter Box Start --> */}
                                <div class="experience-counter-box">
                                    <div class="experience-counter-no">
                                        <h2><span class="counter">01</span>+</h2>
                                    </div>
                                    <div class="experience-counter-content">
                                        <p>Years of experience in Business Consulting</p>
                                    </div>
                                </div>
                                {/* <!-- Experience Counter Box Start End --> */}
                            </div>
                            {/* <!-- What We Do Images End --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroWhat