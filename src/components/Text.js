import { useContext } from "react";
import LoginContext from "../context/LoginContext";

const Text = () => {
  const { setUserName, setShowProfile } = useContext(LoginContext);
  return (
    <>
      <input
        type="text"
        placeholder="username"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <br />
      <input type="text" placeholder="Password.." />
      <br />
      <button
        onClick={() => {
          setShowProfile(true);
        }}
      >
        Login
      </button>
    </>
  );
};

export default Text;
