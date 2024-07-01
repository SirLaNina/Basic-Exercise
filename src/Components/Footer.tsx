import "./Footer.css";

function Footer(){
    return (
        <>
            <div className="footer-container">
                <div className="body-footer">
                    <div className="lms-icon-footer">
                        <div className="lms-img-container">
                            <a>
                                <img className="lms-img-footer" src="https://dtlmselementor.wpengine.com/wp-content/uploads/2023/11/lms-logo.png"/>
                            </a>
                        </div>
                    </div>
                    <div className="small-body-footer">
                        <div className="about-us-footer">
                            <span>About Us</span>
                            <div className="about-us-para">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et lobortis diam.</p>
                                <p>Duis tellus enim, vestibulum eget varius id, vulputate et mi. Nullam feugiat, diam quis interdum varius</p>
                            </div>
                            <a className="about-us-a">
                                <span>START LEARNING NOW</span>
                            </a>
                        </div>
                        <div className="about-us-footer">
                            <span>Popular Courses</span>
                            <div className="popular-courses">
                                <a>Power Electronics</a>
                                <span>Free</span>
                                <div className="fk-line-8"></div>
                            </div>
                            <div className="popular-courses">
                                <a>Introduction to Calculus</a>
                                <span>Free</span>
                                <div className="fk-line-8"></div>
                            </div>
                            <div className="popular-courses">
                                <a>Basic Laws and Policies</a>
                                <span>Free</span>
                            </div>
                        </div>
                        <div className="about-us-footer">
                            <span>Quick Links</span>
                            <div className="quick-links-container">
                            <a className="quick-links">
                                <div className="links-quick">
                                <img className="vector25" src="../src/assets/Images/vector7.svg" alt="vector"/>
                                <span>All Courses</span>
                                </div>
                                <div className="fk-line-8"></div>
                            </a>
                            <a className="quick-links">
                                <div className="links-quick">
                                <img className="vector25" src="../src/assets/Images/vector7.svg" alt="vector"/>
                                <span>Summer Sessions</span>
                                </div>
                                <div className="fk-line-8"></div>
                            </a>
                            <a className="quick-links">
                                <div className="links-quick">
                                <img className="vector25" src="../src/assets/Images/vector7.svg" alt="vector"/>
                                <span>Professional Courses</span>
                                </div>
                                <div className="fk-line-8"></div>
                            </a>
                            <a className="quick-links">
                                <div className="links-quick">
                                <img className="vector25" src="../src/assets/Images/vector7.svg" alt="vector"/>
                                <span>Privacy Policy</span>
                                </div>
                                <div className="fk-line-8"></div>
                            </a>
                            <a className="quick-links">
                                <div className="links-quick">
                                <img className="vector25" src="../src/assets/Images/vector7.svg" alt="vector"/>
                                <span>Term of Use</span>
                                </div>
                            </a>
                            </div>
                        </div>
                        <div className="about-us-footer">
                            <span>Contact Us</span>
                            <div className="contact-us-container">
                                <div className="contact-us">
                                    <div className="us-contact">
                                        <img className="vector10" src="../src/assets/Images/vector10.svg" alt="vector"/>
                                        <span>The Design Themes Inc. Mary Jane St, Sydney 2233 Australia.</span>
                                    </div>
                                    <div className="fk-line-8"></div>
                                </div>
                                <div className="contact-us">
                                    <div className="us-contact">
                                        <img className="vector10" src="../src/assets/Images/vector11.svg" alt="vector"/>
                                        <span>+11 (2) 7654 2233</span>
                                    </div>
                                    <div className="fk-line-8"></div>
                                </div>
                                <div className="contact-us">
                                    <div className="us-contact">
                                        <img className="vector10" src="../src/assets/Images/vector9.svg" alt="vector"/>
                                        <span>+11 (5) 7654 2244</span>
                                    </div>
                                    <div className="fk-line-8"></div>
                                </div>
                                <div className="contact-us">
                                    <div className="us-contact">
                                        <img className="vector10" src="../src/assets/Images/vector8.svg" alt="vector"/>
                                        <span>lms@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-footer">
                    <div className="footer-bottom">
                        <div className="copyright-container">
                            <span>Copyright © 2020 LMS Theme All Rights Reserved</span> 
                            <span>|</span>
                            <span>Design Themes</span>
                        </div>
                        <div className="branch-icons">
                            <img className="vector14" src="../src/assets/Images/vector14.svg" alt="vector"/>
                            <img className="vector14" src="../src/assets/Images/vector15.svg" alt="vector"/>
                            <img className="vector14" src="../src/assets/Images/vector12.svg" alt="vector"/>
                            <img className="vector14" src="../src/assets/Images/vector13.svg" alt="vector"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;