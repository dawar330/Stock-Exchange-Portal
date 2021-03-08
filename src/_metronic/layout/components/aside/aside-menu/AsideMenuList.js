/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
            </span>
            <span className="menu-text">Dashboard</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* begin::1 Level link to page 1 (interested stock) */}
        <li
          className={`menu-item ${getMenuItemActive("/interests", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/interests">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/Star.svg")} />
            </span>
            <span className="menu-text">Interests</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* begin::1 Level link to page 1 (Invested stock) */}
        <li
          className={`menu-item ${getMenuItemActive("/investments", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/e-commerce">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Money.svg")}/>
            </span>
            <span className="menu-text">Investments</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

      </ul>

      {/* end::Menu Nav */}
    </>
  );
}
