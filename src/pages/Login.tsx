import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      Login Form
      <Link to={"/Admin"}>
        <button>Admin</button>
      </Link>
      <Link to={"/Player"}>
        <button>Player</button>
      </Link>
    </div>
  );
};

export default Login;
