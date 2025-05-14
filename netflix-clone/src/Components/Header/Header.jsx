import React from "react";
import "./header.css";
import NetflixLogo from "../../assets/images/Netflix-Logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={NetflixLogo} alt="Netflix Logo" width="100" />
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">TVShow</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">Latest</a>
            </li>
            <li>
              <a href="#">MyList</a>
            </li>
            <li>
              <a href="#">Browse by Languages</a>
            </li>
          </ul>
        </div>
        <div className="header-right">
          <ul>
            <li>
              <SearchIcon className="icon" />
            </li>
            <li>
              <NotificationsNoneIcon className="icon" />
            </li>
            <li>
              <AccountBoxIcon className="icon" />
            </li>
            <li>
              <ArrowDropDownIcon className="icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
