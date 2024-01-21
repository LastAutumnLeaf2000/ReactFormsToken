import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import { IMAGE_URL } from '../utils/constants'

const Blog = () => {

  const [card, setcard] = useState(null)

  const navigate = useNavigate()

  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate('/login')
    }
    else{
      fetchData();
    }
  },[])

  const fetchData = async () => {
    const raw = await fetch("https://corefitserver.onrender.com/getblog");
    const json = await raw.json();
    setcard(json.data);
  };

  console.log(card);

  if (card === null) {
    return <h1>LOADING....</h1>;
  }
  return (


    <div className="card-container">
      <form> {/*Either use form for reload or use no dependency in the useEffect for local storage remove token to work and redirect to login page*/}
      <button className="btn btn-danger" 
      onClick={()=>{localStorage.removeItem('token')}}>
      LOG OUT
      </button>
      </form>
      {card.map((data) => (
        <div className="card" key={data._id}>
          <img className="res-logo" src={IMAGE_URL + data.image} alt={"img"} />
          <h5>{data.title}</h5>
          <h6>{data.subtitle}</h6>
          <div>{data.content}</div>
        </div>
      ))}
    </div>
  );
}

export default Blog