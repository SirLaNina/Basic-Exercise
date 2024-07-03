import Footer from "../Components/Footer";
import Header1 from "../Components/Header1";
import "./Courses.css";
import { FaCalendarAlt } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowRight } from "react-icons/md";

function Courses(){
    return (
        <>
            <Header1 />
            <div className="courses-background-cover">
                <div className="course-template-container">
                    <h1 className="courses-template-title">Courses-Template</h1>
                    <div className="courses-template-text">
                    <a>Home</a>
                    /
                    <span>Courses-Template</span>
                    </div>
                </div>
            </div>
            <div className="grid-background-cover">
                <div className="courses-template-body">
                    <div className="courses-template-search-container">
                        <div className="search-course">
                            <input type="text" placeholder="Search Course" className="search-course-input"/>
                            <img className="vector27" src="../src/assets/Images/vector27.svg" alt="vector25"/>
                        </div>
                        <div  className="search-course-body">
                            <div className="course-category-title">Course Categories</div>
                            <span></span>
                            <div className="list-checkbox">
                                <ul>
                                    <li>
                                        <input type="checkbox" id="checkbox-input" value="18"className="checkbox"/>
                                        <label>Education</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="checkbox-input" value="18"className="checkbox"/>
                                        <label>Engineering</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="checkbox-input" value="18"className="checkbox"/>
                                        <label>Health</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="checkbox-input" value="18"className="checkbox"/>
                                        <label>Law</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="checkbox-input" value="18"className="checkbox"/>
                                        <label>Mathematics</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div  className="search-course-bottom">
                            <div className="course-category-title">Course Categories</div>
                            <span></span>
                            <div className="list-checkbox">
                                <ul>
                                    <li>
                                        <input type="radio" id="checkbox-input" value="18"className="checkbox"/>
                                        <label>All</label>
                                    </li>
                                    <li>
                                        <input type="radio" id="checkbox-input" value="18"className="checkbox"/>
                                        <label>Free</label>
                                    </li>
                                    <li>
                                        <input type="radio" id="checkbox-input" value="18"className="checkbox"/>
                                        <label>Paid</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div  className="search-course-bottom">
                            <div className="course-category-title">Start Date :</div>
                            <span></span>
                            <div className="datepicker-container">
                                <input type="text" className="datepicker" placeholder="Start Date"></input>
                                <FaCalendarAlt className="datepicker-icon"/>
                            </div>
                        </div>
                    </div>
                    <div className="course-template-many-many-things">
                        <div className="many-things-top">
                            <div className="many-things-top-left">
                                <a className="many-things-top-left-container-grid">
                                    <BsFillGrid3X3GapFill />
                                    <a>GRID</a> 
                                </a>
                                <a className="many-things-top-left-container-list">
                                    <FaThList />
                                    <a>LIST</a>
                                </a>
                            </div>
                            <div className="many-things-top-right">
                                <label>Order by :</label>
                                <span className="many-things-top-right-container">
                                    <span className="select-order">
                                        <span>Select Order</span>
                                    </span>
                                    <span className="select-order-icon">
                                        <IoMdArrowDropdown className="arrow-dropdown"/>
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="course-template-grid-img">
                            <div className="course-template-grid-img-top-1">
                                <img className="swiper-img-1" src="../src/assets/Images/Courses-listing-image-1.jpg" 
                                alt="vector25"/>
                                <div className="free">Free</div>
                                <div className="power">Power Electronics</div>
                                <div className="container-edu-curri">
                                    <div>Education</div> |
                                    <div>7 Curriculum</div>
                                </div>  
                                <span className="fk-line-30"></span>
                                <div className="stars-container">
                                    <div className="time"><i className="far fa-clock"/>1d 1h 50m</div>
                                    <div className="many-many-stuffs"><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_half.gif" alt="vector25"/> <a></a> 
                                    <a className="many-many-texts">(<strong>3</strong> votes, average: <strong>4.33</strong> out of 5)<br/></a></div> 
                                </div>
                            </div>
                            <div className="course-template-grid-img-top-1">
                                <img className="swiper-img-1" src="../src/assets/Images/Courses-listing-image-2.jpg" 
                                alt="vector25"/>
                                <div className="free">Free</div>
                                <div className="power">Introduce to Calculuss</div>
                                <div className="container-edu-curri">
                                    <div>Mathematics</div> |
                                    <div>5 Curriculum</div>
                                </div>  
                                <span className="fk-line-30"></span>
                                <div className="stars-container">
                                    <div className="time"><i className="far fa-clock"/>1m 21d 22h</div>
                                    <div className="many-many-stuffs"><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_half.gif" alt="vector25"/> <a></a> 
                                    <a className="many-many-texts">(<strong>10</strong> votes, average: <strong>4.70</strong> out of 5)<br/></a></div> 
                                </div>
                            </div>
                            <div className="course-template-grid-img-top-1">
                                <img className="swiper-img-1" src="../src/assets/Images/Courses-listing-image-3.jpg" 
                                alt="vector25"/>
                                <div className="free">Free</div>
                                <div className="power">Basic Laws and Policies</div>
                                <div className="container-edu-curri">
                                    <div>Law</div> |
                                    <div>5 Curriculum</div>
                                </div>  
                                <span className="fk-line-30"></span>
                                <div className="stars-container">
                                    <div className="time"><i className="far fa-clock"/>20d 18h 30m</div>
                                    <div className="many-many-stuffs"><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_half.gif" alt="vector25"/> <a></a> 
                                    <a className="many-many-texts">(<strong>3</strong> votes, average: <strong>4.33</strong> out of 5)<br/></a></div> 
                                </div>
                            </div>
                        </div>
                        <div className="course-template-grid-img">
                            <div className="course-template-grid-img-top-1">
                                <img className="swiper-img-1" src="../src/assets/Images/Courses-listing-image-5.jpg" 
                                alt="vector25"/>
                                <div className="free">Free</div>
                                <div className="power">General Business Law</div>
                                <div className="container-edu-curri">
                                    <div>Law</div> |
                                    <div>7 Curriculum</div>
                                </div>  
                                <span className="fk-line-30"></span>
                                <div className="stars-container">
                                    <div className="time"><i className="far fa-clock"/>1m 25d 12h 50m</div>
                                    <div className="many-many-stuffs"><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_half.gif" alt="vector25"/> <a></a> 
                                    <a className="many-many-texts">(<strong>3</strong> votes, average: <strong>4.33</strong> out of 5)<br/></a></div> 
                                </div>
                            </div>
                            <div className="course-template-grid-img-top-1">
                                <img className="swiper-img-1" src="../src/assets/Images/Courses-listing-image-6.jpg" 
                                alt="vector25"/>
                                <div className="free">Free</div>
                                <div className="power">Emerging Trends and Technologies</div>
                                <div className="container-edu-curri">
                                    <div>Engineering</div> |
                                    <div>5 Curriculum</div>
                                </div>  
                                <span className="fk-line-30"></span>
                                <div className="stars-container">
                                    <div className="time"><i className="far fa-clock"/>1m 16d 3h</div>
                                    <div className="many-many-stuffs"><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_half.gif" alt="vector25"/> <a></a> 
                                    <a className="many-many-texts">(<strong>10</strong> votes, average: <strong>4.70</strong> out of 5)<br/></a></div> 
                                </div>
                            </div>
                            <div className="course-template-grid-img-top-1">
                                <img className="swiper-img-1" src="../src/assets/Images/Courses-listing-image-4.jpg" 
                                alt="vector25"/>
                                <div className="free">50$</div>
                                <div className="power">Healthcare Delivery</div>
                                <div className="container-edu-curri">
                                    <div>Health</div> |
                                    <div>4 Curriculum</div>
                                </div>  
                                <span className="fk-line-30"></span>
                                <div className="stars-container">
                                    <div className="time"><i className="far fa-clock"/>3d 2h 50m</div>
                                    <div className="many-many-stuffs"><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_on.gif" alt="vector25"/><img className="" src="../src/assets/Images/rating_half.gif" alt="vector25"/> <a></a> 
                                    <a className="many-many-texts">(<strong>3</strong> votes, average: <strong>4.33</strong> out of 5)<br/></a></div> 
                                </div>
                            </div>
                        </div>
                        <div className="course-template-grid-img-bottom">
                                <div className="a1-2">
                                    <div className="a1">
                                        <span>1</span>
                                    </div>
                                    <div className="a2">
                                        <span>2</span>
                                    </div>
                                </div>
                                <div className="next-right">
                                    <a>
                                        Next
                                        <span><MdArrowRight className="a3"/></span>
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Courses;