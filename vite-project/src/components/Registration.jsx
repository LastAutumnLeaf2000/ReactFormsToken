import React from "react";
import axios from 'axios'
import { client_URL } from "../utils/constants";
import {useNavigate, Link} from "react-router-dom"

const Registration = () => {

  const navigate = useNavigate()
  
  const handleApi=(e)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget) //does all the work easy
    console.log(formData) //array of arrays

    const data=Object.fromEntries(formData) //gets all the data given by the user
    console.log(data)// in object form

    const values = [...formData.values()];
    console.log(values)//an array returning only the values

    const isEmpty = values.includes("")
    console.log(isEmpty)//returns false if textbox is empty else true is returned

    if(isEmpty){ //checks if textbox empty or not
      alert("Please Provide All Information!")
      return  //ends the code execution here!
    }
    //e.currentTarget.reset(); //Empties all the text box

    axios.post(client_URL + "/register",formData).then(res=>{
      console.log(res)
      navigate("/login")
    }).catch(err=>{
      console.log(err)
    })
  }
  return (
    <>
      <h1>Registration</h1>
      <form onSubmit={handleApi}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email" //important to give "name"
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
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="exampleInputName1"
            // onChange={(e) => setname(e.target.value)}
            // value={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Phone
          </label>
          <input
            type="number"
            name="phone"
            className="form-control"
            id="exampleInputPhone1"
            aria-describedby="emailHelp"
            // onChange={(e) => setphone(e.target.value)}
            // value={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Answer
          </label>
          <input
            type="text"
            name="answer"
            className="form-control"
            id="exampleInputAnswer1"
            aria-describedby="emailHelp"
            // onChange={(e) => setanswer(e.target.value)}
            // value={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Image
          </label>
          <input
            type="file"
            name="image"
            className="form-control"
            id="exampleInputImage1"
            aria-describedby="emailHelp"
            // onChange={(e) => setimage(e.target.files[0])}//gives the same output as formData gives Object.fromEntries
            // value={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            // onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
        <Link to="/login">Already have an account?</Link>
    </>
  );
};

export default Registration;
