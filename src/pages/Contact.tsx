import Footer from '../Components/Footer';
import Header1 from '../Components/Header1';
import './Contact.css';
import { FaUser } from "react-icons/fa";
import { BsPhoneFill } from "react-icons/bs";
import { IoIosDocument } from "react-icons/io";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaEarthAmericas } from "react-icons/fa6";


function Contact() {
    return (
        <>
            <Header1 />
            <div className="courses-background-cover">
                <div className="course-template-container">
                    <h1 className="courses-template-title">Contact - layout-3</h1>
                    <div className="courses-template-text">
                    <a>Home</a>
                    /
                    <span>Contact - layout-3</span>
                    </div>
                </div>
            </div>
            <div className="grid-background-cover">
                <div className="courses-template-body">
                    <div className='google-map'>
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7837.10251742446!2d106.65956034052934!3d10.845612407229355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529affe2c5523%3A0x3f7470640a0d52b!2zUGjGsOG7nW5nIDE2LCBHw7IgVuG6pXAsIEhvIENoaSBNaW5oIENpdHksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1719993731157!5m2!1sen!2s"
                        width="100%"
                        height="500"
                        style={{ border: '0px' }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className='contact-template-body'>
                            <div className='last-message'>
                                <div className='last-top-message'>
                                    <span>Give Us A Message</span>
                                    <div className='last-mtfk-line'></div>
                                </div>
                                <div className='contact-message-form'>
                                    <p className='contact-message-input'>
                                        <span><FaUser className='contact-name-icon'/></span>
                                        <input className='contact-input-your-a' type="text" 
                                        placeholder='Your Name'/>
                                    </p>
                                    <p className='contact-message-input'>
                                        <span className='contact-name-icon'><img className="vector10" src="../src/assets/Images/vector28.svg" alt="vector" /></span>
                                        <input className='contact-input-your-a' type="text" 
                                        placeholder='Email'/>
                                    </p>
                                    <p className='contact-message-input'>
                                        <span><BsPhoneFill className='contact-name-icon'/></span>
                                        <input className='contact-input-your-a' type="text" 
                                        placeholder='Phone'/>
                                    </p>
                                    <p className='contact-message-input'>
                                        <span><IoIosDocument className='contact-name-icon-b'/></span>
                                        <input className='contact-input-your-b' type="text" 
                                        placeholder='Message'/>
                                    </p>
                                    <p className='contact-message-input'>
                                        <input type='submit' className='contact-message-input-submit' value="Send Email"/>
                                    </p>
                                </div>
                            </div>
                            <div className='last-contact-info'>
                                <div className='last-top-message'>
                                    <span>Contact Info</span>
                                    <div className='last-mtfk-line'></div>
                                </div>
                                <div className='contact-info-form'>
                                    <div className='contact-info-input'>
                                        <div className='contact-info-text'>
                                            <span><img className="vector29" src="../src/assets/Images/vector31.svg" alt="vector" /></span>
                                            <span className='sydney'>The Design Themes Inc. Mary Jane St, Sydney 2233 Australia.</span>
                                        </div>
                                        <div className='fk-line-storage'>
                                            <span className='orange-line'></span> <span className='next-orange-line'></span>
                                        </div>
                                    </div>
                                    <div className='contact-info-input'>
                                        <div className='contact-info-text'>
                                            <span><img className="vector29" src="../src/assets/Images/vector32.svg" alt="vector" /></span>
                                            <span className='below-text'>+1 200 258 2145</span>
                                        </div>
                                        <div className='fk-line-storage'>
                                            <span className='orange-line'></span> <span className='next-orange-line'></span>
                                        </div>
                                    </div>
                                    <div className='contact-info-input'>
                                        <div className='contact-info-text'>
                                            <span><img className="vector29" src="../src/assets/Images/vector30.svg" alt="vector" /></span>
                                            <span className='below-text'>+1 100 458 2345</span>
                                        </div>
                                        <div className='fk-line-storage'>
                                            <span className='orange-line'></span> <span className='next-orange-line'></span>
                                        </div>
                                    </div>
                                    <div className='contact-info-input'>
                                        <div className='contact-info-text'>
                                            <span><MdOutlinePhoneIphone className='i-fk-phone'/></span>
                                            <span className='below-text'>+91 12345 67890</span>
                                        </div>
                                        <div className='fk-line-storage'>
                                            <span className='orange-line'></span> <span className='next-orange-line'></span>
                                        </div>
                                    </div>
                                    <div className='contact-info-input'>
                                        <div className='contact-info-text'>
                                            <span><img className="vector29" src="../src/assets/Images/vector29.svg" alt="vector" /></span>
                                            <span className='below-text'>super@email.com</span>
                                        </div>
                                        <div className='fk-line-storage'>
                                            <span className='orange-line'></span> <span className='next-orange-line'></span>
                                        </div>
                                    </div>
                                    <div className='contact-info-input'>
                                        <div className='contact-info-text'>
                                            <span><FaEarthAmericas className='earth'/></span>
                                            <span className='below-text'>google.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact;