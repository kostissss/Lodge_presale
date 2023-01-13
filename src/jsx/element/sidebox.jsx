import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import 'react-perfect-scrollbar/dist/css/styles.css';



class SideBox extends Component {

    componentDidMount() {
        window.Frost.init();
        window.Frost.load();
        window.handleSideBarMenu();
    }
    render() {

        return (
            <>
                <div class="about-sidebox">
                    <a href="javascript:void(0)" class="closebtn bg-primary">×</a>
                    <div class="about-section">
                        <div class="contact-box">
                            <div class="contact-form">
                                <form method="post" class="dzForm dezPlaceAni" action="script/contact.php">
                                    <h6 class="title">Contact Us</h6>
                                    <div class="dzFormMsg"></div>
                                    <input type="hidden" value="Contact" name="dzToDo" />
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label>Full Name</label>
                                                <input name="dzName" type="text" required class="form-control " />
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label>Your Email Address</label>
                                                <input name="dzEmail" type="email" class="form-control" required />
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label>Your Message</label>
                                                <textarea name="dzMessage" rows="4" class="form-control" required></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                                                data-callback="verifyRecaptchaCallback"
                                                data-expired-callback="expiredRecaptchaCallback"></div>
                                            <input class="form-control d-none" style={{ "display": "none" }} data-recaptcha="true"
                                                required data-error="Please complete the Captcha" />
                                        </div>
                                        <div class="col-md-12">
                                            <button name="submit" type="submit" value="Submit"
                                                class="site-button gradient shadow radius-md button-lg black">Send
										Message</button>
                                        </div>
                                    </div>
                                </form>
                                <div class="map-box">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624477!2d75.65046970649679!3d26.88544791796718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C+Rajasthan!5e0!3m2!1sen!2sin!4v1500819483219"
                                        class="align-self-stretch radius-sm" style={{ "border": "0" }} allowfullscreen></iframe>
                                </div>
                                <a href="#" class="site-button map-btn"><span>View Map</span><span>Close</span></a>
                            </div>
                            <div class="contact-info">
                                <div class="col">
                                    <div>
                                        <h5 class="title">Location</h5>
                                        <p>8901 Marmora Road Chi Minh City, Vietnam</p>
                                    </div>
                                </div>
                                <div class="col">
                                    <div>
                                        <h5 class="title">Email</h5>
                                        <a href="#">info@example.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="gallery-area content scroll-off" style={{ "backgroundImage": "url(images/background/bg1.jpg)" }}>
                            <div class="row lightgallery" id="masonry">
                                <div class="col-md-6 col-6 card-container wow flipInX" data-wow-duration="0.80s"
                                    data-wow-delay="0.5s">
                                    <div class="gallery-box">
                                        <div class="gallery-media" data-exthumbimage="images/gallery/pic1.jpg"
                                            data-src="images/gallery/main-pic1.jpg" title="Title Come Here">
                                            <img src="images/gallery/pic1.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-6 card-container">
                                    <div class="gallery-box">
                                        <div class="gallery-media check-km" data-exthumbimage="images/gallery/pic2.jpg"
                                            data-src="images/gallery/main-pic2.jpg" title="Title Come Here">
                                            <img src="images/gallery/pic2.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-6 card-container">
                                    <div class="gallery-box">
                                        <div class="gallery-media check-km" data-exthumbimage="images/gallery/pic3.jpg"
                                            data-src="images/gallery/main-pic3.jpg" title="Title Come Here">
                                            <img src="images/gallery/pic3.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-6 card-container">
                                    <div class="gallery-box">
                                        <div class="gallery-media check-km" data-exthumbimage="images/gallery/pic4.jpg"
                                            data-src="images/gallery/main-pic4.jpg" title="Title Come Here">
                                            <img src="images/gallery/pic4.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-6 card-container">
                                    <div class="gallery-box">
                                        <div class="gallery-media check-km" data-exthumbimage="images/gallery/pic5.jpg"
                                            data-src="images/gallery/main-pic5.jpg" title="Title Come Here">
                                            <img src="images/gallery/pic5.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-6 card-container">
                                    <div class="gallery-box">
                                        <div class="gallery-media check-km" data-exthumbimage="images/gallery/pic6.jpg"
                                            data-src="images/gallery/main-pic6.jpg" title="Title Come Here">
                                            <img src="images/gallery/pic6.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-6 card-container">
                                    <div class="gallery-box">
                                        <div class="gallery-media check-km" data-exthumbimage="images/gallery/pic7.jpg"
                                            data-src="images/gallery/main-pic7.jpg" title="Title Come Here">
                                            <img src="images/gallery/pic7.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-6 card-container">
                                    <div class="gallery-box">
                                        <div class="gallery-media check-km" data-exthumbimage="images/gallery/pic8.jpg"
                                            data-src="images/gallery/main-pic8.jpg" title="Title Come Here">
                                            <img src="images/gallery/pic8.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

export default SideBox;