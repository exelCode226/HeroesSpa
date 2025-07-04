import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context";

export const LoginPages = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    login("Exel Agualimpia","Exel1991@hotmail.com");
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div className="container-mt5">
      <h1>LoginPages</h1>

      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
