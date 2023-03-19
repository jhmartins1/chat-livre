import React from "react";
import Add from "../img/addAvatar.png";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat Livre</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="senha" />
          <button>Entrar</button>
        </form>
        <p>Não possue uma conta? Registre</p>
      </div>
    </div>
  );
};

export default Login;
