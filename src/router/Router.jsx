import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Dashboard,
  Login,
  Registeres,
  Detailibuhamil,
  Notfound,
  Tambahibuhamil,
  Tambahanak,
  Pemantauankehamilan,
  Pemantauananak,
  Pemantauannifas,
  Editibuhamil,
  Formanak,
  Formibuhamil,
  Formpemantauankehamilan,
  Formprofile,
  Editanak,
} from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="registeres" element={<Registeres />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="formprofile/:id" element={<Formprofile />} />
          <Route path="pemantauan">
            <Route index element={<Pemantauankehamilan />} />
            <Route path="kehamilan" element={<Pemantauankehamilan />} />
            <Route
              path="kehamilan/formpemantauankehamilan"
              element={<Formpemantauankehamilan />}
            />
            <Route path="nifas" element={<Pemantauannifas />} />
            <Route path="anak" element={<Pemantauananak />} />
          </Route>
          <Route path="tambah">
            <Route index element={<Tambahibuhamil />} />
            <Route path="ibuhamil" element={<Tambahibuhamil />} />
            <Route path="anak" element={<Tambahanak />} />
            <Route path="anak/form" element={<Formanak />} />
            <Route path="ibuhamil/form" element={<Formibuhamil />} />
          </Route>
          <Route path="detail">
            <Route path="ibuhamil/:uuid" element={<Detailibuhamil />} />
          </Route>
          <Route path="edit">
            <Route path="ibuhamil/:uuid" element={<Editibuhamil />} />
            <Route path="anak/:id" element={<Editanak />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
