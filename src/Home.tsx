import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./Home.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { IoDocumentText } from "react-icons/io5";
import { MdOutlineBookmark } from "react-icons/md";

function Home() {
  
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Header />
      <div className="symbols-4">
        <div className="small-symbols-4">
          <div className="sti-container">
            <div className="sti-img">
              <img
                className="symbol-icon"
                src="../src/assets/Images/vector22.svg"
                alt="vector22"
              />
            </div>
            <div className="sti-text">Best Stimulations</div>
          </div>
          <div className="sti-container">
            <div className="sti-img">
              <img
                className="symbol-icon"
                src="../src/assets/Images/vector19.svg"
                alt="vector19"
              />
            </div>
            <div className="sti-text">Group Seminars</div>
          </div>
          <div className="sti-container">
            <div className="sti-img">
              <img
                className="symbol-icon"
                src="../src/assets/Images/vector20.svg"
                alt="vector20"
              />
            </div>
            <div className="sti-text">Analysed Syllabus</div>
          </div>
          <div className="sti-container">
            <div className="sti-img">
              <img
                className="symbol-icon"
                src="../src/assets/Images/vector21.svg"
                alt="vector21"
              />
            </div>
            <div className="sti-text">Pratical Training</div>
          </div>
        </div>

        <div className="courses-container">
          <div className="courses-top">
            <div className="courses-top-left">
              <h1>COURSES</h1>
              <span className="fk-line-2"></span>
            </div>
            <div className="courses-top-right">
              <a
                href="#"
                className="prev"
                role="button"
                aria-label="previous slide"
              >
                <img
                  className="vector7"
                  src="../src/assets/Images/vector25.svg"
                  alt="vector25"
                />
              </a>
              <a
                href="#"
                className="next"
                role="button"
                aria-label="next slide"
              >
                <img
                  className="vector7"
                  src="../src/assets/Images/vector26.svg"
                  alt="vector7"
                />
              </a>
            </div>
          </div>

          <div className="courses-body">
            <div className="about-courses">
              <h2>About Courses</h2>
              <p>
                Student Registration and Administration Nemo enim ipsam
                voluptatem quia voluptas sit atur aut odit aut fugit, sed quia
                consequuntur magni res eos qui ratione voluptatem sequi
                nesciunt.
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised believable.
              </p>
              <a href="#">
                <span>View All Courses</span>
              </a>
            </div>
            <div className="img-courses">
              <div className="img-card">
                <img
                  className="swiper-img"
                  src="../src/assets/Images/Courses-listing-image-1.jpg"
                  alt="vector25"
                />
                <div className="free">Free</div>
                <div className="power">Power Electronics</div>
                <div className="container-edu-curri">
                <div>Education</div> |
                <div>7 Curriculum</div>
                </div>  
                <span className="fk-line-3"></span>
                <div className="stars-container">
                  <div className="time"><i className="far fa-clock"/>1d 1h 50m</div>
                  <div className="many-many-stuffs"><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_half.gif" alt="vector25"/> <a></a> 
                  <a className="many-many-texts">(<strong>3</strong> votes, average: <strong>4.33</strong> out of 5)<br/></a></div> 
                  
                </div>
              </div>
              <div className="img-card">
                <img
                  className="swiper-img"
                  src="../src/assets/Images/Courses-listing-image-2.jpg"
                  alt="vector25"
                />
                <div className="free">Free</div>
                <div className="power">Introduce to Calculus</div>
                <div className="container-edu-curri">
                <div>Mathematics</div> |
                <div>5 Curriculum</div>
                </div>  
                <span className="fk-line-3"></span>
                <div className="stars-container">
                  <div className="time"><i className="far fa-clock"/>1m 22d 22h</div>
                  <div className="many-many-stuffs"><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_half.gif" alt="vector25"/> <a></a> 
                  <a className="many-many-texts">(<strong>6</strong> votes, average: <strong>4.67</strong> out of 5)<br/></a></div>   
                </div>
              </div>
            </div>
          </div>
          <div className="courses-bottom">
            <img className="lms-banner" src="../src/assets/Images/lms-banner1.jpg" alt="vector25"/>
            <img className="lms-banner" src="../src/assets/Images/lms-banner2.jpg" alt="vector25"/>
            <img className="lms-banner" src="../src/assets/Images/lms-banner3.jpg" alt="vector25"/>
          </div>
          <div className="blog">
            <div className="blog-title-container">
                <h2 className="blog-title">BLOG</h2>
                <span className="fk-line-4"></span>
            </div>
            <div className="blog-holder">
                <div className="blog-swiper">
                    <img className="lms-banner" src="../src/assets/Images/blog12.jpg" alt="vector25"/>
                        <div className="small-blog-holder">
                            <div className="grid-container">
                                <p>30 Thu</p>
                                <div className="entry-format">
                                    <IoDocumentText className="ico-format"/>
                                </div>
                            </div>
                            <div className="text-blog-holder">
                                <a>Contrary to popular</a>
                                <div className="entry-meta-group">
                                    <a className="entry-author">dtlmsele</a>  |
                                    <div className="entry-tags">
                                        <MdOutlineBookmark />
                                        <a>blog,</a> 
                                        <a>chat</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="blog-swiper">
                <img className="lms-banner" src="../src/assets/Images/blog7.jpg" alt="vector25"/>
                        <div className="small-blog-holder">
                            <div className="grid-container">
                                <p>30 Thu</p>
                                <div className="entry-format">
                                    <IoDocumentText className="ico-format"/>
                                </div>
                            </div>
                            <div className="text-blog-holder">
                                <a>Omnis voluptas assumenda</a>
                                <div className="entry-meta-group">
                                    <a className="entry-author">dtlmsele</a>  |
                                    <div className="entry-tags">
                                        <MdOutlineBookmark />
                                        <a>blog,</a> 
                                        <a>chat</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="blog-swiper">
                <img className="lms-banner" src="../src/assets/Images/blog11.jpg" alt="vector25"/>
                        <div className="small-blog-holder">
                            <div className="grid-container">
                                <p>30 Thu</p>
                                <div className="entry-format">
                                    <IoDocumentText className="ico-format"/>
                                </div>
                            </div>
                            <div className="text-blog-holder">
                                <a>Piece of classical</a>
                                <div className="entry-meta-group">
                                    <a className="entry-author">dtlmsele</a>  |
                                    <div className="entry-tags">
                                        <MdOutlineBookmark />
                                        <a>blog,</a> 
                                        <a>chat</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="elementer-section">
              <div className="elementer-container">
                  <div className="elementer-small-container">
                      <div className="elementer-img-container-1">
                      <img className="vector" src="../src/assets/Images/vector3.svg" alt="vector"/>
                      </div>
                      <h5>HTML</h5>
                  </div>
                  <div className="elementer-small-container">
                      <div className="elementer-img-container-2">
                      <img className="vector" src="../src/assets/Images/vector2.svg" alt="vector"/>
                      </div>
                      <h5>CSS</h5>
                  </div>
                  <div className="elementer-small-container">
                  <div className="elementer-img-container-3">
                      <img className="vector" src="../src/assets/Images/vector.svg" alt="vector"/>
                      </div>
                      <h5>Android</h5>
                  </div>
                  <div className="elementer-small-container">
                  <div className="elementer-img-container-4">
                      <img className="vector" src="../src/assets/Images/vector4.svg" alt="vector"/>
                      </div>
                      <h5>Photoshop</h5>
                  </div>
                  <div className="elementer-small-container">
                  <div className="elementer-img-container-5">
                      <img className="vector" src="../src/assets/Images/vector4.svg" alt="vector"/>
                      </div>
                      <h5>jQuery</h5>
                  </div>
                  <div className="elementer-small-container">
                        <div className="elementer-img-container-6">
                          <img className="vector" src="../src/assets/Images/vector4.svg" alt="vector"/>
                        </div>
                        <h5>Ruby</h5>
                  </div>
              </div>
      </div>
      <div className="event">
        <div className="event-container">
          <div className="upcoming-event">
              <div className="text-event-container">
                <span>UPCOMING EVENTS</span> 
                <span className="fk-line-5"></span>
              </div>  
              <div className="top-left-event">
                <div className="left-arrow-event">
                  <img className="vector5" src="../src/assets/Images/vector5.svg" alt="vector"/>
                </div>
                <div className="right-arrow-event">
                  <img className="vector5" src="../src/assets/Images/vector6.svg" alt="vector"/>
                </div>
              </div>
          </div>
          <div className="welcome-batch">
              <img className="event-img" src="../src/assets/Images/event.jpg" alt="vector"/>
              <div className="text-welcome-batch">
                <a>Welcoming 25th Batch</a>
                <p className="small-text-welcome">
                  <span>December 12, 2024 @ 8:00 am
                    -  
                  December 13, 2025 @ <br/>5:00 pm</span>
                </p>
                  <div>Peppard Hill, Unites States</div>
              </div>
          </div>
        </div>
      </div>
      <div className="email-sub">
          <div className="email-sub-background">
              <div className="email-sub-container">
                  <span>GET TOUCH WITH US</span>
                      <div>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which Ipsum slightly believable</div>
                  <form className="form">
                      <input type="email" className="email-id" placeholder="Your Email Address" ></input>
                      <button className="sub-button"><span>SUBSCRIBE</span></button>
                  </form>
              </div>
          </div>
      </div>
      <div className="process">
          <div className="process-container">
              <div className="process-title">
                <span>OUR PROCESS</span>
                <span className="fk-line-5"></span>
              </div>
              <div className="step-1">
                <div className="step-1-left">
                    <h5>Step 01</h5>
                    <div className="step-1-left-text-search">Search for your course</div>
                    <div className="step-1-search">
                        <div>Nemo enim ipsam voluptatem quia voluptas sit atur aut odit aut fugit, sed <br/>
                          quia consequuntur magni res.</div>
                        <img className="vector23" src="../src/assets/Images/vector23.svg" alt="vector"/>
                    </div>
                </div>
                  <div className="step-1-ball-bar">
                    <div className="step-1-ball"></div> 
                    <div className="step-1-bar"></div>
                    <div className="step-1-ball-2"></div>
                    <div className="step-1-bar-2"></div>
                  </div>
                    <div className="step-1-right"></div>
              </div>
              <div className="step-2">
                  <div className="step-2-right"></div>
                    <div className="step-2-ball-bar">
                    <div className="step-1-ball-2"></div>
                    <div className="step-1-bar-2"></div>
                  </div>
                    <div className="step-2-left">
                    <h5>Step 02</h5>
                    <div className="step-1-left-text-search">Take a Sample Lesson</div>
                    <div className="step-1-search">
                        <img className="vector23" src="../src/assets/Images/vector18.svg" alt="vector"/>
                        <div>Nemo enim ipsam voluptatem quia voluptas sit atur aut odit aut fugit, sed <br/>
                          quia consequuntur magni res.</div>
                    </div>
                </div>
              </div>
              <div className="step-3">
              <div className="step-3-left">
                    <h5>Step 03</h5>
                    <div className="step-1-left-text-search">Preview the Syllabus</div>
                    <div className="step-1-search">
                        <div>Nemo enim ipsam voluptatem quia voluptas sit atur aut odit aut fugit, sed <br/>
                          quia consequuntur magni res.</div>
                        <img className="vector23" src="../src/assets/Images/vector17.svg" alt="vector"/>
                    </div>
                </div>
                  <div className="step-1-ball-bar">
                    <div className="step-1-ball-2"></div>
                    <div className="step-1-bar-2"></div>
                  </div>
                    <div className="step-1-right"></div>
              </div>
              <div className="step-2">
                        <div className="step-2-right"></div>
                          <div className="step-2-ball-bar">
                          <div className="step-1-ball-2"></div>
                          <div className="step-1-bar-2"></div>
                          <div className="step-1-ball"></div> 
                        </div>
                        <div className="step-2-left">
                          <h5>Step 04</h5>
                          <div className="step-1-left-text-search">Purchase the Course</div>
                          <div className="step-1-search">
                              <img className="vector23" src="../src/assets/Images/vector16.svg" alt="vector"/>
                              <div>Nemo enim ipsam voluptatem quia voluptas sit atur aut odit aut fugit, sed <br/>
                                quia consequuntur magni res.</div>
                          </div>
                      </div>
              </div>  
          </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
