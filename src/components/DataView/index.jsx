import React from "react";
import { Routes, Route } from "react-router-dom";
import UserView from "./UserView";
import Suits from "./Suits";
import Users from "./Users";
import Instruments from "./Instruments";
import UserEdit from "../Edit/UserEdit";

function DataView({ loggedInUser }) {
  return (
    <Routes>
      <Route path="/" element={<UserView user={loggedInUser} />} />
      <Route
        path="/profil"
        element={<UserEdit data={[loggedInUser]} onSubmitFormUser={() => {}} />}
      />
      <Route path="/instuments" element={<Instruments />} />
      <Route path="/suits" element={<Suits />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}

export default DataView;
