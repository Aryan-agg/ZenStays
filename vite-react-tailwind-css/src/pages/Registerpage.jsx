import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Registerpage() {
  const[name,setname]= useState("");
  const[email,setemail]= useState("");
  const[password,setpassword]= useState("");
  
  async function registerUser(ev) {
    ev.preventDefault();
    try{
    await axios
      .post("/register",{
        name,
        email,
        password,
      });
      alert('Registration successfull. Now you can log in')
    }
    catch(e){
      alert('Registration failed. Please try again')
    }
      // .then((response) => {
      //   console.log(response.data); // Handle the response data here
      // })
      // .catch((error) => {
      //   console.log(error); // Handle the error here
      

     
  };

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-lg mx-auto " onSubmit={registerUser}>
          <input type="text" placeholder="Name" 
          value={name}
           onChange={ev =>setname(ev.target.value)} />
          <input type="email" placeholder="your email"         
          value={email}
           onChange={ev =>setemail(ev.target.value)}/>
          <input type="password" placeholder="password" 
             value={password}
           onChange={ev =>setpassword(ev.target.value)}
          />
          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            Already a member?{" "}
            <Link className="underline text-black" to={"/login"}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
