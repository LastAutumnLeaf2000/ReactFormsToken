import React, { useState } from "react";
import axios from 'axios'
import { client_URL } from "../utils/constants";
import {useNavigate, Link} from "react-router-dom"

const Register = () => {
  // const [details, setdetails] = useState({
  //   email:"",
  //   name:"",
  //   image:"",
  //   phone:"",
  //   answer:"",
  //   password:""
  // })

  const [email, setemail] = useState("")
  const [name, setname] = useState("")
  const [image, setimage] = useState("")
  const [phone, setphone] = useState("")
  const [answer, setanswer] = useState("")
  const [password, setpassword] = useState("")

  const navigate = useNavigate()
  

  const handleApi=(e)=>{
    e.preventDefault()
    
    const formData = new FormData()

    formData.append("name", name)
    formData.append("email", email)
    formData.append("phone", phone)
    formData.append("password", password)
    formData.append("answer", answer)
    formData.append("image", image)

    axios.post(client_URL + "/register",formData).then(res=>{
      console.log(res)
      navigate("/login")
    }).catch(err=>{
      console.log(err)
    })

  }
  return (
    <>
      <h1>Register</h1>
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
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            onChange={(e) => setname(e.target.value)}
            // value={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Phone
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPhone1"
            aria-describedby="emailHelp"
            onChange={(e) => setphone(e.target.value)}
            // value={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Answer
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputAnswer1"
            aria-describedby="emailHelp"
            onChange={(e) => setanswer(e.target.value)}
            // value={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control"
            id="exampleInputImage1"
            aria-describedby="emailHelp"
            onChange={(e) => setimage(e.target.files[0])}
            // value={email}
          />
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
        <Link to="/login">Already have an account?</Link>
    </>
  );
};

export default Register;
