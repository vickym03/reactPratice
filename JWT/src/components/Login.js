import React from "react";
import { useState } from "react";
import HTTP from "../axiosConfig/axiosConfig";

function Login(props) {
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });
  // console.log(userData);
  
  let updateUserData = (e) => {
    setuserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  let userLogin = async () => {
    let res = await HTTP.post("api/users/login", userData);
    console.log(res.data);
    localStorage.setItem("jwt", JSON.stringify(res.data));
    props.history.push("/products");
  };
  return (
    <div>
      <input
        name="email"
        type="email"
        placeholder="Enter Email"
        value={userData.email}
        onChange={updateUserData}
      />
      <input
        name="password"
        type="password"
        placeholder="Enter Password"
        value={userData.password}
        onChange={updateUserData}
      />

      <button onClick={userLogin}>Login</button>
    </div>
  );
}

export default Login;
