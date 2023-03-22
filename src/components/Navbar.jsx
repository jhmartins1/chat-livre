import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat Livre</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/15798715/pexels-photo-15798715.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
        <span>João</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
