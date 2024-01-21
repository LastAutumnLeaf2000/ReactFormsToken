import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { client_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Login2 = () => {
  const navigate = useNavigate();

  const handleApi = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    console.log(formData) //array of arrays

    const data=Object.fromEntries(formData) //gets all the data given by the user
    console.log(data)// in object form

    
    axios
      .post(client_URL + "/login", data)//OR  ,{ ...data })
      .then((response) => {
        // alert("Success")
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        navigate("/blog");
      })
      .catch((error) => {
        alert("Wrong Input!");
        console.error(error);
      });
  };

  return (
    <>
      <h1>Log In 2</h1>
      <form onSubmit={handleApi}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            // onChange={(e) => setemail(e.target.value)}
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
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            // onChange={(e) => setpassword(e.target.value)}
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

export default Login2;
