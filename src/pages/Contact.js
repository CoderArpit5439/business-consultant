import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

const Contact = () => {
    
  const openWhatsApp = () => {
    const phoneNumber = "+919516510364"; // Replace with your WhatsApp number (include country code)
    const message = `Hello, I would like to ask about your services.`;
    const encodedMessage = encodeURIComponent(message);
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };
    return (

        <div>
            <Header />
            <div class="page-contact-us">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="contact-info-item wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>
                                <div class="contact-info-img">
                                    <figure class="image-anime">
                                        <img src="https://img.freepik.com/free-photo/young-successful-businessman-speaking-phone-office-background_176420-5288.jpg?t=st=1742366888~exp=1742370488~hmac=0611ddb6598cb180a820910c70f3c4d8b69dfbb19abdf2af8674a97e0b4e30cf&w=996" alt="" />
                                    </figure>
                                </div>
                                <div class="contact-info-body">
                                    <div class="icon-box">
                                        <img src="images/icon-phone.svg" alt="" />
                                    </div>
                                    <div class="contact-info-content">
                                        <h3>call us any time!</h3>
                                        <p>+91 9516510364</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <div class="contact-info-item wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                                <div class="contact-info-img">
                                    <figure class="image-anime">
                                        <img src="https://img.freepik.com/free-photo/e-mail-global-communications-connection-social-networking-concept_53876-134026.jpg?t=st=1742366790~exp=1742370390~hmac=e51062991276d483d4ff937ae769fc2cd6a45c3f1ca41657c33a27a6b9a5b470&w=826" alt="" />
                                    </figure>
                                </div>
                                <div class="contact-info-body">
                                    <div class="icon-box">
                                        <img src="images/icon-mail.svg" alt="" />
                                    </div>
                                    <div class="contact-info-content">
                                        <h3>send us e-mail</h3>
                                        <p>support@zerofivegrowth.com</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="col-lg-4 col-md-6">
                            <div class="contact-info-item wow fadeInUp" data-wow-delay="0.4s" style={{ visibility: "visible", animationDelay: "0.4s", animationName: "fadeInUp" }}>
                                <div class="contact-info-img">
                                    <figure class="image-anime">
                                        <img src="https://img.freepik.com/free-photo/side-view-hand-holding-smartphone_23-2149764138.jpg?t=st=1742366992~exp=1742370592~hmac=e49ad83e5a30ae847c50526065de7f2a712b09c2b616a837a080c6984dfe57b3&w=996" alt="" />
                                    </figure>
                                </div>
                                <div class="contact-info-body">
                                    <div class="icon-box">
                                        <img src="images/icon-location.svg" alt="" />
                                    </div>
                                    <div class="contact-info-content">
                                        <h3>office address</h3>
                                        <p>Bengaluru, KA</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="col-md-12 text-center">
                            <button type="button" onClick={openWhatsApp} class="btn-default">chat on whats app</button>
                            <div id="msgSubmit" class="h3 hidden"></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact