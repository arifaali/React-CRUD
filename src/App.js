import { useState, useEffect } from "react";

//import "bootstrap/dist/css/bootstrap.min.css";
import UserContext from "./components/contexts/User";
import Home from "./components/Home";
import Navbar from "./navigation/Navbar";
function App() {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedUser"));

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <div>
      {currentUser && <Navbar user={currentUser}></Navbar>}
      <Home></Home>
    </div>
  );
}

export default App;
