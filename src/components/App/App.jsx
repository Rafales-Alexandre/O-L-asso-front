import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, auth } from "../../actions/userActions";
import LogIn from "../LogIn";
import UserPanel from "../UserPanel";
import DataView from "../DataView";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users.getAllUsers);
  const [refused, setRefused] = useState(false);
  const [userData, setUserData] = useState([]);
  const loggedInUserInTheStore = useSelector(
    (state) => state.user.loggedInUser
  );
  const loggedInUser = loggedInUserInTheStore
    ? {
        ...loggedInUserInTheStore,
        id: parseInt(loggedInUserInTheStore.id, 10),
      }
    : null;

  useEffect(() => {
    if (users) {
      setUserData(Object.values(users));
    }
  }, [users]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [loggedInUser]);


  const handleLogin = (email, password) => {
    dispatch(auth(email, password))
      .then(() => {
        setRefused(false); }
      )

      .catch(() => setRefused(true));
  };
  const handleLogout = () => {
    dispatch({ type: "LOGOUT_USER" });
  };
  return (
    <div>
      <div className="App p-2">
        {loggedInUser ? (
          <div className="flex w-full flex-col md:gap-4 md:flex-row ">
            <div className="sticky  md:w-1/5 md:shadow-xl ">
              <UserPanel user={loggedInUser} onLogout={handleLogout} />
            </div>
            <div className="h-screen overflow-y-scroll md:w-4/5">
              <DataView loggedInUser={loggedInUser} />
            </div>
          </div>
        ) : (
          <LogIn onLogin={handleLogin} refused={refused} />
        )}
      </div>
    </div>
  );
}

export default App;
