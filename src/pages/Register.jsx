import React from "react";
import Add from "../img/addAvatar.png";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat Livre</span>
        <span className="title">Cadastro</span>
        <form>
          <input type="text" placeholder="nome" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="senha" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Adicione um avatar</span>
          </label>
          <button>Cadastrar</button>
        </form>
        <p>Já possue uma conta? Login</p>
      </div>
    </div>
  );
};

export default Register;
