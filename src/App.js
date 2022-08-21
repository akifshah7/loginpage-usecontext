import "./styles.css";
// import UseContext from "./context/UseContext";
import Text from "./components/Text";
import Profile from "./components/Profile";
import { useState } from "react";
import LoginContext from "./context/LoginContext";

export default function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUserName] = useState("");

  return (
    <div className="App">
      <LoginContext.Provider value={{ username, setUserName, setShowProfile }}>
        {showProfile ? <Profile /> : <Text />}
      </LoginContext.Provider>
    </div>
  );
}
