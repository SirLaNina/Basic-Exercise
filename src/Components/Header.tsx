import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Header(){
    return (
        <>
        <div className="father-container">
        <div className="background-cover">
          <nav className="navigation">
            <img src="../src/assets/Images/lms-logo.png" alt="lms-logo" />
            <nav className="menu">
              <div className="mini-menu">
                <a>HOME</a>
                <a>COURSES</a>
                <a>PAGES</a>
                <a>BLOG</a>
                <a>GALLERY</a>
                <a>SHOP</a>
                <a>CONTACT</a>
              </div>
              <div className="mini-menu-2">
                <a>
                  <FontAwesomeIcon icon={faUser} id="login" />
                </a>
                <a id="login">Login</a> |<a>Register</a>
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