import React, { useState } from "react";
import "../NavbarAnim/navAnim.css";
import JKL from "./JK Lucent.svg";
import timeSheet from "./timesheet.svg";
import timestatus from "./timestatus.svg";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function NavAnime() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuitem = [
    {
      path: "/employe/timeSheet",
      name: "timesSheet",
      icons: timeSheet,
    },

    {
      path: "/employe/timeStatus",
      name: "timestatus",
      icons: timestatus,
    },
  ];

  return (
    <>
      <div className="container1">
        <div style={{ width: isOpen ? "185px" : "50px" }} className="sidebar">
          <div className="top_section">
            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
            <img
              src={JKL}
              alt="jkl"
              style={{ display: isOpen ? "block" : "none" }}
              className="logo"
            />
          </div>
          {menuitem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassName="active"
            >
              <img className="icon" src={item.icons} alt="item" />
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        {/* <main>{children}</main> */}
      </div>
    </>
  );
}

export default NavAnime;
