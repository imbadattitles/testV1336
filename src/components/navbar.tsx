import React, { FC } from "react";
import { RouteNames } from "../routes";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  const routes = [
    { path: RouteNames.FIRST, name: "Первая страница" },
    { path: RouteNames.SECOND, name: "Вторая страница" },
  ];
  return (
    <header>
      <nav>
        <ul>
          {routes.map((route) => (
            <li>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
