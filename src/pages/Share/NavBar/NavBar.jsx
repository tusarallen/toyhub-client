import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <nav className="bg-gray-100 w-full rounded-md">
      <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start md:justify-between md:items-center">
            <div className="flex-shrink-0">
              <div className="flex justify-center items-center gap-5">
                <div className="avatar">
                  <Link>
                    <div className="w-16 rounded-full">
                      <img
                        className="bg-gray-100"
                        src="https://i.ibb.co/xg31JyV/image.png"
                      />
                    </div>
                  </Link>
                </div>
                <div className="flex-shrink-0 text-center">
                  <div>
                    <h1 className="text-[#1A1919] font-extrabold text-2xl">
                      Toy
                      <span className="text-red-500">Hub</span>
                    </h1>
                  </div>
                  <div>
                    <p className="text-lg font-bold">play unlimited</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#1A1919] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium underline"
                      : "text-[#1A1919] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="/alltoys"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#1A1919] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium underline"
                      : "text-[#1A1919] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                  }
                >
                  All Toys
                </NavLink>

                <NavLink
                  to="/blog"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#1A1919] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium underline"
                      : "text-[#1A1919] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                  }
                >
                  Blog
                </NavLink>
                {user ? (
                  <>
                    <NavLink
                      to="/mytoys"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-[#1A1919] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium underline"
                          : "text-[#1A1919] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                      }
                    >
                      My Toys
                    </NavLink>
                    <NavLink
                      to="/addtoys"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-[#1A1919] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium underline"
                          : "text-[#1A1919] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                      }
                    >
                      Add A Toys
                    </NavLink>
                    <div className="dropdown dropdown-end">
                      <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          <img
                            title={user && user.displayName}
                            src={user && user.photoURL}
                          />
                        </div>
                      </label>
                      <ul
                        tabIndex={0}
                        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <Link to="/" className="justify-between">
                            Profile
                            <span className="badge">New</span>
                          </Link>
                        </li>
                        <li>
                          <Link onClick={handleLogOut} to="/">
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <NavLink
                    to="/signin"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#1A1919] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium underline"
                        : "text-[#1A1919] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                    }
                  >
                    Login
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`sm:hidden ${isOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="text-[#1A1919] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>

          <Link
            to="/alltoys"
            className="text-[#1A1919] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            All Toys
          </Link>

          <Link
            to="/blog"
            className="text-[#1A1919] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Blog
          </Link>

          {user ? (
            <>
              <Link
                to="/mytoys"
                className="text-[#1A1919] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium
                "
              >
                My Toys
              </Link>
              <Link
                to="/addtoys"
                className="text-[#1A1919] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Add A Toys
              </Link>
              <div className="dropdown dropdown-start ml-2">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      title={user && user.displayName}
                      src={user && user.photoURL}
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/" className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleLogOut} to="/">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Link
              to="/signin"
              className="text-[#1A1919] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
