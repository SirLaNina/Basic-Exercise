import './Teachers.css'
import Header1 from "../Components/Header1";
import Footer from '../Components/Footer';
import { LuClock9 } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

function Teachers(){
    return(
        <>
            <Header1 />
            <div className="courses-background-cover">
                <div className="course-template-container">
                    <h1 className="courses-template-title">Teachers</h1>
                    <div className="courses-template-text">
                    <a>Home</a>
                    /
                    <span>Teachers</span>
                    </div>
                </div>
            </div>
            <div className='grid-background-cover'>
                    <div className="courses-template-body">
                        <div className='courses-template-teachers-container'>
                            <div className='teachers-categories'>
                                <div className='categories-container'>
                                    <h2>Categories</h2>
                                    <span className="fk-line-cate"></span>
                                </div>
                                <a>Uncategorized (7)</a>
                            </div>
                            <div className='recent-comments'>
                                <div className='recent-comments-container'>
                                    <div className='categories-container'>
                                        <h2>Recent Comments</h2>
                                        <span className="fk-line-cate"></span>
                                    </div>
                                </div>
                                <div className='recent-comments-text'>
                                    <div className='comments-text-1'>
                                        <a>dtlmsele</a>
                                        <span>on</span>
                                        <a>Application Development</a>
                                    </div>
                                </div>
                                <div className='recent-comments-text'>
                                    <div className='comments-text-1'>
                                        <span>dummy on</span>
                                        <a>Power Electronics</a>
                                    </div>
                                </div>
                                <div className='recent-comments-text'>
                                    <div className='comments-text-1'>
                                        <span>kowsi on</span>
                                        <a>Video Game Technologies</a>
                                    </div>
                                </div>
                                <div className='recent-comments-text'>
                                    <div className='comments-text-1'>
                                        <span>ram on</span>
                                        <a>Advanced Programming</a>
                                    </div>
                                </div>
                                <div className='recent-comments-text'>
                                    <div className='comments-text-2'>
                                        <span>ram on</span>
                                        <a>Processing Digital Signal</a>
                                    </div>
                                </div>
                            </div>
                            <div className='teachers-categories'>
                                <div className='categories-container'>
                                    <h2>Archives</h2>
                                    <span className="fk-line-cate"></span>
                                </div>
                                <a>November 2023</a>
                            </div>
                            <div className='recent-comments'>
                                <div className='recent-comments-container'>
                                    <div className='categories-container'>
                                        <h2>Tags</h2>
                                        <span className="fk-line-cate"></span>
                                    </div>
                                </div>
                                    <div className='three-boxes'>
                                        <div className='blog-chat'>
                                            <a>BLOG</a>
                                            <a>CHAT</a>
                                        </div>
                                        <a className='tips'>TIPS</a>
                                    </div>
                            </div>
                            <div className='recent-comments'>
                                <div className='recent-comments-container'>
                                    <div className='contrary'>
                                        <a>Contrary to popular</a>
                                        <div className='contrary-bottom'>
                                            <p>
                                                <LuClock9 className='contrary-bottom-p-icon'/>
                                                30 Thu
                                            </p>
                                            <a>
                                                <FaRegComment className='contrary-bottom-a-icon'/>
                                                0
                                            </a>
                                        </div>
                                    </div>
                                    <div className='contrary'>
                                        <a>Omnis voluptas assumenda</a>
                                        <div className='contrary-bottom'>
                                            <p>
                                                <LuClock9 className='contrary-bottom-p-icon'/>
                                                30 Thu
                                            </p>
                                            <a>
                                                <FaRegComment className='contrary-bottom-a-icon'/>
                                                0
                                            </a>
                                        </div>
                                    </div>
                                    <div className='contrary'>
                                        <a>Piece of classical</a>
                                        <div className='contrary-bottom'>
                                            <p>
                                                <LuClock9 className='contrary-bottom-p-icon'/>
                                                30 Thu
                                            </p>
                                            <a>
                                                <FaRegComment className='contrary-bottom-a-icon'/>
                                                0
                                            </a>
                                        </div>
                                    </div>
                                    <div className='contrary'>
                                        <a>Latin professor at Hampden</a>
                                        <div className='contrary-bottom'>
                                            <p>
                                                <LuClock9 className='contrary-bottom-p-icon'/>
                                                30 Thu
                                            </p>
                                            <a>
                                                <FaRegComment className='contrary-bottom-a-icon'/>
                                                0
                                            </a>
                                        </div>
                                    </div>
                                    <div className='contrary'>
                                        <a>Latin words Ipsum</a>
                                        <div className='contrary-bottom'>
                                            <p>
                                                <LuClock9 className='contrary-bottom-p-icon'/>
                                                30 Thu
                                            </p>
                                            <a>
                                                <FaRegComment className='contrary-bottom-a-icon'/>
                                                0
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="teachers-template-main">
                            <div className='teachers-template-top'>
                            <div className='teachers-avatar'>
                                <img className="teacher-img" src="../src/assets/Images/Teacher-image-3.jpg" />
                                <div className='teachers-info'>
                                    <div className='teachers-title'>
                                        <a>DAMIE GLENDELL</a>
                                        <h5>Co-Director</h5>
                                        <span className='teachers-fk-line'></span>
                                    </div>
                                    <div className='teachers-social'> 
                                        <TiSocialFacebook className='fb'/>
                                        <FaTwitter className='tw'/>
                                        <IoLogoInstagram />
                                    </div>
                                </div>
                            </div>
                            <div className='teachers-avatar'>
                                <img className="teacher-img" src="../src/assets/Images/Teacher-image-2.jpg" />
                                <div className='teachers-info'>
                                    <div className='teachers-title'>
                                        <a>JAMES CATWIN</a>
                                        <h5>Art Director</h5>
                                        <span className='teachers-fk-line'></span>
                                    </div>
                                    <div className='teachers-social'> 
                                        <TiSocialFacebook className='fb'/>
                                        <FaTwitter className='tw'/>
                                        <IoLogoInstagram />
                                    </div>
                                </div>
                            </div>
                            <div className='teachers-avatar'>
                                <img className="teacher-img" src="../src/assets/Images/Teacher-image-1.jpg" />
                                <div className='teachers-info'>
                                    <div className='teachers-title'>
                                        <a>JENNY SHEEN</a>
                                        <h5>Digital Media Programming</h5>
                                        <span className='teachers-fk-line'></span>
                                    </div>
                                    <div className='teachers-social'> 
                                        <TiSocialFacebook className='fb'/>
                                        <FaTwitter className='tw'/>
                                        <IoLogoInstagram />
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className='teachers-avatar-bottom'>
                                <img className="teacher-img" src="../src/assets/Images/Teacher-image-4.jpg" />
                                <div className='teachers-info'>
                                    <div className='teachers-title'>
                                        <a>JIM MORRISON</a>
                                        <h5>Chief Programmer</h5>
                                        <span className='teachers-fk-line'></span>
                                    </div>
                                    <div className='teachers-social'> 
                                        <TiSocialFacebook className='fb'/>
                                        <FaTwitter className='tw'/>
                                        <IoLogoInstagram />
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

export default Teachers;