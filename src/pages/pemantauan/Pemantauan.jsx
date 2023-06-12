import React from "react";
import Layout from "../../components/layout/Layout";
import { NavLink } from "react-router-dom";

const Pemantauan = (props) => {
  return (
    <Layout>
      <div className="sticky top-20 border-gray-200 bg-white text-center text-sm font-medium text-gray-500">
        <ul className="-mb-px flex flex-wrap">
          <li className="mr-2">
            <NavLink
              to="/pemantauan/kehamilan"
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? "inline-block rounded-t-lg border-b-2 border-blue-600 p-4 text-blue-600"
                  : "inline-block rounded-t-lg border-b-2 p-4"
              }
            >
              Pemantauan kehamilan
            </NavLink>
          </li>
          <NavLink
            to="/pemantauan/nifas"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "inline-block rounded-t-lg border-b-2 border-blue-600 p-4 text-blue-600"
                : "inline-block rounded-t-lg border-b-2 p-4"
            }
          >
            Pemantauan nifas
          </NavLink>
          <NavLink
            to="/pemantauan/anak"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "inline-block rounded-t-lg border-b-2 border-blue-600 p-4 text-blue-600"
                : "inline-block rounded-t-lg border-b-2 p-4"
            }
          >
            Pemantauan anak
          </NavLink>
        </ul>
      </div>
      {props.children}
    </Layout>
  );
};

export default Pemantauan;
