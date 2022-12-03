/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
const List = () => {
  return (
    <div className="sidebar__list">
      <div className="sidebar__item">
        <NavLink to="/playListDay">
          <a className="sidebar__link" href="#">
            <img
              className="sidebar__img"
              src="./img/playlist01.png"
              alt="day's playlist"
            />
          </a>
        </NavLink>
      </div>

      <div className="sidebar__item">
        <NavLink to="/topDance">
          <a className="sidebar__link" href="#">
            <img
              className="sidebar__img"
              src="./img/playlist02.png"
              alt="day's playlist"
            />
          </a>
        </NavLink>
      </div>

      <div className="sidebar__item">
        <NavLink to="/indi">
          <a className="sidebar__link" href="#">
            <img
              className="sidebar__img"
              src="./img/playlist03.png"
              alt="day's playlist"
            />
          </a>
        </NavLink>
      </div>
    </div>
  );
};

export default List;
