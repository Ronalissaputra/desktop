import React from "react";
import { NavLink } from "react-router-dom";
import { Layout } from "../../components";

const Tambah = (props) => {
  return (
    <Layout>
      <div className="sticky top-20 border-gray-200 bg-white text-center text-sm font-medium text-gray-500">
        <ul className="-mb-px flex flex-wrap">
          <li className="mr-2">
            <NavLink
              to="/tambah/ibuhamil"
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? "inline-block rounded-t-lg border-b-2 border-blue-600 p-4 text-blue-600"
                  : "inline-block rounded-t-lg border-b-2 p-4"
              }
            >
              Form ibu hamil
            </NavLink>
          </li>
          <NavLink
            to="/tambah/anak"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "inline-block rounded-t-lg border-b-2 border-blue-600 p-4 text-blue-600"
                : "inline-block rounded-t-lg border-b-2 p-4"
            }
          >
            Form anak
          </NavLink>
        </ul>
      </div>
      {props.children}
    </Layout>
  );
};

export default Tambah;
