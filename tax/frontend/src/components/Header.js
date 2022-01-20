import React from "react";
import { Fragment } from "react";
import { Img } from "react-image";

import {
  SearchIcon,
  //   CartIcon,
  // MenuIcon,
  //   UserCircleIcon,
  //   GlobeAltIcon,
  //   UsersIcon,
} from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";

import { ShoppingCartIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { signout } from "../actions/userActions";

function Header() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  //   const signoutHandler = () => {
  //     dispatch(signout());
  //   };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <a href="/">
          <Img
            src="/images/logo1.png"
            alt="logo"
            className="h-full w-full 2xl:h-3/12 2xl:w-3/12 lg:h-6/12 lg:w-6/12 object-contain object-left "
            // layout="fill"
            // objectFit="contain"
            // objectPosition="left"
          />
        </a>
      </div>

      {/* Middle */}

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className=" hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2 " />
      </div>

      {/* Right */}

      <div className="flex items-center justify-end text-gray-500">
        <ShoppingCartIcon className="h-6 cursor-pointer" />

        {/* Profile dropdown */}
        <div className="flex items-center">
          {userInfo ? (
            <Menu as="div" className="ml-3 relative">
              <div>
                <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/"
                        className={
                          (active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700")
                        }
                      >
                        Your Profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/"
                        className={
                          (active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700")
                        }
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="#signout"
                        // onClick={signoutHandler}
                        className={
                          (active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700")
                        }
                      >
                        Sign out
                      </Link>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            <Menu as="div" className="ml-3 relative">
              <div>
                <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <Link to="/signin">Sign in</Link>
                </Menu.Button>
              </div>
            </Menu>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
