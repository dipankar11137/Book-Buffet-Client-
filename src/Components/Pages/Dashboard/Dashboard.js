import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [selectedButton, setSelectedButton] = useState("Button 1");

  return (
    <div className="bg-slate-100">
      <div>
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-sidebar"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content ">
            <Outlet></Outlet>
          </div>
          <div className="drawer-side ">
            <label for="dashboard-sidebar" className="drawer-overlay "></label>
            <ul className="menu p-4 overflow-y-auto w-56 bg-slate-900  text-white">
              <li
                onClick={() => setSelectedButton('Button 1')}
                className={
                  selectedButton === 'Button 1'
                    ? 'bg-white text-black rounded-lg'
                    : ''
                }
              >
                <Link
                  to="/dashboard"
                  className="font-bold  text-xl hover:text-orange-600"
                >
                  Add Books
                </Link>
              </li>
              <li
                onClick={() => setSelectedButton('Button 2')}
                className={
                  selectedButton === 'Button 2'
                    ? 'bg-white text-black rounded-lg mt-3'
                    : ''
                }
              >
                <Link
                  to="/dashboard/bookBooks"
                  className="font-bold text-xl hover:text-orange-600"
                >
                  Borrow Books
                </Link>
              </li>
              <li
                onClick={() => setSelectedButton('Button 3')}
                className={
                  selectedButton === 'Button 3'
                    ? 'bg-white text-black rounded-lg mt-3'
                    : ''
                }
              >
                <Link
                  to="/dashboard/buyBooks"
                  className="font-bold text-xl hover:text-orange-600"
                >
                  Buy Books
                </Link>
              </li>
              <li
                onClick={() => setSelectedButton('Button 4')}
                className={
                  selectedButton === 'Button 4'
                    ? 'bg-white text-black rounded-lg mt-3'
                    : ''
                }
              >
                <Link
                  to="/dashboard/manageItem"
                  className="font-bold text-xl hover:text-orange-600"
                >
                  Manage Books
                </Link>
              </li>
              <li
                onClick={() => setSelectedButton('Button 5')}
                className={
                  selectedButton === 'Button 5'
                    ? 'bg-white text-black rounded-lg mt-3'
                    : ''
                }
              >
                <Link
                  to="/dashboard/delivered"
                  className="font-bold text-xl hover:text-orange-600"
                >
                  Delivered
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
