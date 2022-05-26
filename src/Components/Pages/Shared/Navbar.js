import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  return (
    <div>
      <div className="navbar bg-base-100 flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <>
                <li className="text-white">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-white">
                  <Link to="about">About</Link>
                </li>
                <li className="text-white">
                  <Link to="portfolio">Portfolio</Link>
                </li>
                <li className="text-white">
                  <Link to="blog">Blog</Link>
                </li>

                <li className="text-white">
                  {user && <Link to="dashboard">Dashboard</Link>}
                </li>
                <li>
                  {user ? (
                    <button onClick={logout} className="btn btn-ghost">
                      Sign Out
                    </button>
                  ) : (
                    <Link to="/login">Login</Link>
                  )}
                </li>
              </>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl text-white px-12">
            Bentley
          </a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal p-0 px-12">
            <>
              <li className="text-white">
                <Link to="/">Home</Link>
              </li>
              <li className="text-white">
                <Link to="about">About</Link>
              </li>
              <li className="text-white">
                <Link to="portfolio">Portfolio</Link>
              </li>
              <li className="text-white">
                <Link to="blog">Blog</Link>
              </li>

              <li className="text-white">
                {user ? <Link to="dashboard">Dashboard</Link> : null}
              </li>
              <li>
                {user && <h2>{user.displayName}</h2>}
              </li>

              <li>
                {user ? (
                  
                  <button onClick={logout} className="btn btn-ghost">
                    Sign Out
                  </button>
                  
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </li>
            </>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
