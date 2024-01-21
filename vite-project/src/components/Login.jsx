import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { client_URL } from "../utils/constants";
import {Link} from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  // const client = axios.create({
  //   baseURL: client_URL
  // })

  const handleApi = (e) => {
    e.preventDefault();
    console.log(email, password)
    axios.post(client_URL + "/login",{  //client.post("",{})
      email: email,
      password: password
    }).then((response)=>{
      // alert("Success")
      console.log(response.data)
      localStorage.setItem('token', response.data.token)
      navigate('/blog')
    }).catch(error=>{
      alert("Wrong Input!")
      console.error(error)
    })
    // const ApiCall = async () => {
    //   try {
    //     const response = await client.post("/login", {
    //       email: email,
    //       password: password,
    //     });

    //     localStorage.setItem("token", response.data.token);
    //     navigate("/blog");

    //     console.log(response.data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // ApiCall();
  };

  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={handleApi}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setemail(e.target.value)}
            // value={email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
        <Link to="/registration">Don't have an account?</Link>
    </>
  );
};

export default Login;
