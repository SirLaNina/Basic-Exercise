import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from 'react';
import { MdArrowDropDown } from "react-icons/md";

function Header(){
  useEffect(() => {
    const path = window.location.pathname;
    const menuItems = document.querySelectorAll('.mini-menu a');

    menuItems.forEach((item) => {
      if (item.getAttribute('href') === path) {
        item.classList.add('active');
      }
    });
  }, []);
    return (
        <>
        <div className="father-container">
        <div className="background-cover">
          <nav className="navigation">
            <a href="/">
            <img src="../src/assets/Images/lms-logo.png" alt="lms-logo"/>
            </a>
            <nav className="menu">
              <div className="mini-menu">
                <div className="dropdown">
                    <a href="/" id="home">HOME</a>
                    <MdArrowDropDown className="drop-down-icon"/>
                    <div className="dropdown-content">
                        <a href="#home1">Home II</a>
                        <a href="#home3">Home - Landing Page</a>
                        <a href="#home3">Home - Subscription</a>
                        <a href="#home3">Home - Course-Search</a>
                        <a href="#home3">Zoom Meeting</a>
                        <a href="#home3">Home - kids</a>
                        <a href="#home3" className="points-system">Points System</a>
                    </div>
                </div>
                <div className="dropdown">
                    <a href="/courses" id="courses">COURSES</a>
                    <MdArrowDropDown className="drop-down-icon"/>
                    <div className="dropdown-content">
                        <a href="#home1">Courses-Template</a>
                        <a href="#home3">Lessons</a>
                        <a href="#home3">Search-Course</a>
                        <a href="#home3">Membership</a>
                        <a href="#home3">Courses Detail</a>
                    </div>
                </div>
                <div className="dropdown">
                    <a href="/pages" id="pages">PAGES</a>
                    <MdArrowDropDown className="drop-down-icon"/>
                    <div className="dropdown-content">
                        <a href="#home1">BuddyPress</a>
                        <a href="#home3">Event</a>
                        <a href="#home3">Headers</a>
                        <a href="#home3">Side-Navigation</a>
                        <a href="#home3">About</a>
                        <a href="#home3">Teachers</a>
                        <a href="#home3">Teachers Profile</a>
                    </div>
                </div>
                <div className="dropdown">
                    <a href="/blog" id="blog">BLOG</a>
                    <MdArrowDropDown className="drop-down-icon"/>
                    <div className="dropdown-content-blog">
                        <div className="drop-down-blog-container">
                            <div className="drop-down-blog-top">
                                <div className="blog-column-1">
                                    <div className="column-1-title">
                                        <span>I COLUMN</span>
                                        <span className="fk-line-12"></span>
                                    </div>
                                    <div className="column-1-text"> 
                                        <span>FullWidth</span>
                                        <span>With Left Sidebar</span>
                                        <span>With Right Sidebar</span>
                                        <span>With Pagination</span>
                                    </div>
                                </div>
                                <div className="blog-column-1">
                                    <div className="column-1-title">
                                        <span>II COLUMN</span>
                                        <span className="fk-line-12"></span>
                                    </div>
                                    <div className="column-1-text"> 
                                        <span>FullWidth</span>
                                        <span>With Left Sidebar</span>
                                        <span>With Right Sidebar</span>
                                        <span>With Pagination</span>
                                    </div>
                                </div>
                                <div className="blog-column-1">
                                    <div className="column-1-title">
                                        <span>III COLUMN</span>
                                        <span className="fk-line-12"></span>
                                    </div>
                                    <div className="column-1-text"> 
                                        <span>FullWidth</span>
                                        <span>With Left Sidebar</span>
                                        <span>With Right Sidebar</span>
                                        <span>With Pagination</span>
                                    </div>
                                </div>
                                <div className="blog-column-1">
                                    <div className="column-1-title">
                                        <span>THUMB IMAGE</span>
                                        <span className="fk-line-12"></span>
                                    </div>
                                    <div className="column-1-text"> 
                                        <span>FullWidth</span>
                                        <span>With Left Sidebar</span>
                                        <span>With Right Sidebar</span>
                                        <span>With Pagination</span>
                                    </div>
                                </div>
                            </div>
                            <div className="drop-down-blog-body">
                                  <span>FULLWIDTH IMAGE</span>
                                  <span className="fk-line-12"></span>
                            </div>
                        </div>
                        <div className="drop-down-blog-bottom">
                            <img className="" src="../src/assets/Images/mega-menu-image-1.webp" alt="vector"/>
                        </div>
                    </div>
                </div>
                <div className="dropdown">
                    <a href="/gallery" id="gallery">GALLERY</a>
                    <MdArrowDropDown className="drop-down-icon"/>
                    <div className="dropdown-content-gallery">
                        <div className="dropdown-gallery-container">
                        <div className="drop-down-blog-top">
                                <div className="blog-column-1">
                                    <div className="column-1-title">
                                        <span>II COLUMN</span>
                                        <span className="fk-line-12"></span>
                                    </div>
                                    <div className="column-1-text"> 
                                        <span>FullWidth</span>
                                        <span>With Left Sidebar</span>
                                        <span>With Right Sidebar</span>
                                        <span>With Pagination</span>
                                        <span>Without Filter</span>
                                    </div>
                                </div>
                                <div className="blog-column-1">
                                    <div className="column-1-title">
                                        <span>III COLUMN</span>
                                        <span className="fk-line-12"></span>
                                    </div>
                                    <div className="column-1-text"> 
                                        <span>FullWidth</span>
                                        <span>With Left Sidebar</span>
                                        <span>With Right Sidebar</span>
                                        <span>With Pagination</span>
                                        <span>Without Filter</span>
                                    </div>
                                </div>
                                <div className="blog-column-1">
                                    <div className="column-1-title">
                                        <span>IV COLUMN</span>
                                        <span className="fk-line-12"></span>
                                    </div>
                                    <div className="column-1-text"> 
                                        <span>FullWidth</span>
                                        <span>With Left Sidebar</span>
                                        <span>With Right Sidebar</span>
                                        <span>With Pagination</span>
                                        <span>Without Filter</span>
                                    </div>
                                </div>
                                <div className="blog-column-1">
                                    <div className="column-1-title">
                                        <span>CONTACT US NOW</span>
                                        <span className="fk-line-12"></span>
                                    </div>
                                    <div className="column-1-text"> 
                                        <input className="column-input-name" aria-required="true" aria-invalid="false" 
                                        placeholder="Your Name" value="" type="text" name="your-name" />
                                        <input className="column-input-name" aria-required="true" aria-invalid="false" 
                                        placeholder="Email" value="" type="text" name="your-name" />
                                        <input className="column-input-message" 
                                        placeholder="Message" value="" type="text" name="your-name" />
                                        <input className="column-input-button" type="submit" value="SEND EMAIL"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown">
                    <a href="/shop" id="shop">SHOP</a>
                    <MdArrowDropDown className="drop-down-icon"/>
                    <div className="dropdown-content">
                        
                    </div>
                </div>
                <div className="dropdown">
                    <a href="/contact" id="contact">CONTACT</a>
                    <MdArrowDropDown className="drop-down-icon"/>
                    <div className="dropdown-content">
                        <a href="#home1">Contact - layout-2</a>
                        <a href="#home3">Contact - layout-3</a>
                    </div>
                </div>
              </div>
              <div className="mini-menu-2">
                <a className="login">
                  <FontAwesomeIcon icon={faUser} className="faUser"/>
                  <a>Login</a>  |
                </a>
                 <a>Register</a>
              </div>
              <div className="mini-menu-3">
                <a>
                  <FontAwesomeIcon icon={faShoppingCart} className="cart" />
                </a>
              </div>
            </nav>
          </nav>
        </div>

        <div className="container-header">
          <div className="search-container">
            <form className="search-form">
              <input className="search" type="text" placeholder="Keywords" />
              <input className="search-icon" type="submit" value="" />
            </form>
            <h1>We have the largest collection of courses</h1>
            <div className="view-courses">
              <a>View All Courses</a>
              <svg
                className="vector-24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
              >
                <path d="M22.4,47.6c-0.6,0-1.4-0.2-1.9-0.7c-1-1-1-2.6,0-3.7L38.7,25L20.5,6.9c-1-1-1-2.6,0-3.7c1-1,2.6-1,3.7,0l20,20 c0.5,0.5,0.7,1.1,0.7,1.9c0,0.7-0.2,1.4-0.7,1.9l-20,20C23.8,47.4,23,47.6,22.4,47.6L22.4,47.6z M7.6,47.6c-0.6,0-1.4-0.2-1.9-0.7 c-1-1-1-2.6,0-3.7L23.9,25L5.7,6.9c-1-1-1-2.6,0-3.7c1-1,2.6-1,3.7,0l20,20c0.5,0.5,0.7,1.1,0.7,1.9c0,0.7-0.2,1.4-0.7,1.9l-20,20 C9,47.4,8.2,47.6,7.6,47.6z" />
              </svg>
            </div>
          </div>
          <div className="number-container">
            <div className="number-row-1">
              <div className="div-number">332</div>
              <span className="fk-line"></span>
              <span className="span-number">Courses</span>
            </div>
            <div className="number-row-1">
              <div className="div-number">1403</div>
              <span className="fk-line"></span>
              <span className="span-number">Members</span>
            </div>
            <div className="number-row-1">
              <div className="div-number">60</div>
              <span className="fk-line"></span>
              <span className="span-number">Authors</span>
            </div>
            <div className="number-row-1">
            <div className="div-number">120</div>
            <span className="fk-line"></span>
            <span className="span-number">Subjects</span>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default Header;