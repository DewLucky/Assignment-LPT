import React from "react";
import messageFill from "../../images/message-fill.svg";
import bellFill from "../../images/bell-fill.svg";
import points from "../../images/points.svg";
import userAcc from "../../images/account.png";
import rocket from "../../images/rocket.png";
import account from "../../images/account.png";
import brand from '../../images/brand-logo.svg'
import search from '../../images/search-icon.svg'

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="left-menu">
            <img className="brand-logo" src={brand} alt="branch-logo" />
            <div className="search-bar">
              <img src={search} alt="" />
              <input
                type="text"
                placeholder='Type for Search'
              />
            </div>
          </div>
          <div className="right-menu">
            <div className="right-menu-item">
              <span className="unvisited">3</span>
              <img src={messageFill} alt="" />
            </div>
            <div className="right-menu-item">
              <span className="unvisited">8</span>
              <img src={bellFill} alt="" />
            </div>
            <div className="right-menu-item">
              <span className="unvisited"></span>
              <img src={points} alt="" />
            </div>
            <div className="user-container">
              <img className="user-img" src={account} alt="" />
              <div>
              <p className="user-name">Aakash Mishra</p>
              <button className="edit-btn">Edit My Profile</button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
