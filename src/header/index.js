import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { logotext } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link  className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>

          <div className="d-flex align-items-center">
            <Link  className="navbar-brand nav_ac" to="/">
             Home
            </Link>
            <Link  className="navbar-brand nav_ac" to="https://blog.artsofbaniya.com" target="_blank" rel="noopener noreferrer">
             Blog Posts
            </Link>
            <Link  className="navbar-brand nav_ac" to="/about">
             About
            </Link>
            { false && <>
            <Link  className="navbar-brand nav_ac" to="/contact">
             Contact
            </Link>
            </>
            }
          </div>

          <div className="d-flex align-items-center">
            <Themetoggle />
          </div>
        </div>
      </header>

      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right">
      </div>
      
    </>
  );
};

export default Headermain;
