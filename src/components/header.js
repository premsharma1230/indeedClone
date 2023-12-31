import React from 'react';
import indeedLog from "../assets/images/indeedLogo.png";

const Header = ({ handleOpenModal }) => {
    return (
        <div className="header-wrap">
            <nav>
                <div className="left-content">
                    <figure className="logo">
                        <img src={indeedLog} alt='logo' />
                    </figure>
                    <ul>
                        <li>Home</li>
                        <li><a href='#CompanyReview'>Company review</a></li>
                        <li><a href='#SalaryGuide'>Salary guide</a></li>
                    </ul>
                </div>
                <div className="right-content">
                    <button onClick={handleOpenModal}>
                        <span className="avatar"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" class=" gnav-header-xbwdtc eac13zx0"><path d="M12 12c2.486 0 4.5-2.014 4.5-4.5S14.486 3 12 3a4.499 4.499 0 00-4.5 4.5C7.5 9.986 9.514 12 12 12zm0 2.25c-3.004 0-9 1.508-9 4.5v1.75a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-1.75c0-2.992-5.996-4.5-9-4.5z"></path></svg></span>
                        <span className="sign">Sign in</span>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Header;
