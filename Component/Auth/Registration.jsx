import React from 'react';
import { useState, useEffect } from "react";
import{useNavigate} from "react-router-dom"; 
import { useDispatch,useSelector } from "react-redux";
import { register } from '../../Redux/AuthSlice';
import '../Auth/Registration.css';
export default function App() {
  const dispatch=useDispatch();
 const[image,setImage]=useState()
 const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  // const [img, setimg] = useState("");
  const [error, setError] = useState({});
  const {redirectthree}= useSelector((state) => state.contents);
  const navigate=useNavigate()
  console.log(error,"error")
  const validation = () => {
    let error = {};
    if (!user.first_name) {
      error.first_name = "First Name is Required";
    }
    if (!user.last_name) {
      error.last_name = "Last Name is Required";
    }
   

    if (!user.email) {
      error.email = "Email is Required";
    } else if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        user.email
      )
    )
      if (!user.password) {
        error.password = "Password  is Required";
      }

    return error;
  };

  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "first_name") {
      if (value.length === 0) {
        setError({ ...error, first_name: "First Name is Required" });
        setUser({ ...user, first_name: "" });
      } else {
        setError({ ...error,first_name: "" });
        setUser({ ...user, first_name: value });
      }
    }
    if (name === "last_name") {
      if (value.length === 0) {
        setError({ ...error, last_name: "Last name is Required" });
        setUser({ ...user, last_name: "" });
      } else {
        setError({ ...error, last_name: "" });
        setUser({ ...user, last_name: value });
      }
    }

    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "@Email is Required" });
        setUser({ ...user, email: "" });
      } else {
        setError({ ...error, email: "" });
        setUser({ ...user, email: value });
      }
    }

    if (name === "password") {
      if (value.length === 0) {
        setError({ ...error, password: "@Password name is Required" });
        setUser({ ...user, password: "" });
      } else {
        setError({ ...error, password: "" });
        setUser({ ...user, password: value });
      }
    }
  };

const SubmitInfo=(e)=>{
  e.preventDefault();
  let formData= new FormData();
  formData.append("first_name",user.first_name);
  formData.append("last_name",user.last_name);
  formData.append("email",user.email);
  formData.append("password",user.password);
  formData.append("image",image);
  dispatch(register(formData));
  
};
const UserRedirect = () => {
  let name = localStorage.getItem("name");
  let isInLoginPage = window.location.pathname.toLowerCase() === "/registration";

  if (name !== null && name !== undefined && name !== "") {
      // window.location.pathname = getPathname;
      isInLoginPage && navigate("/login");
  }
};
useEffect(()=>{
  UserRedirect()
},[redirectthree])


  return <>
  
 <div class="hero">
  <div class="container">
 <div class="signn">
 <form>
 <h3>Sign Up</h3>
        <div >
            <label for="exampleInputEmail1">first Name</label>
            <input
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="first_name"
              value={user.first_name}
              onChange={(e) => postUserData(e)}
            />
            <span style={{ color: "red", marginLeft: "24px" }}>
              {" "}
              {error.first_name}{" "}
            </span>
          </div>

          
          <div>
            <label for="exampleInputEmail1">Last Name</label>
            <input
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="last_name"
              value={user.last_name}
              onChange={(e) => postUserData(e)}
            />
            <span style={{ color: "red", marginLeft: "24px" }}>
              {" "}
              {error.last_name}{" "}
            </span>
          </div>

          <div>
            <label for="exampleInputEmail1">Email address</label>
            <input
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={user.email}
              onChange={(e) => postUserData(e)}
            />
            <span style={{ color: "red", marginLeft: "24px" }}>
              {" "}
              {error.email}{" "}
            </span>
          </div>

          <div>
            <label for="exampleInputEmail1">Password</label>
            <input
            type='Password'
              class="form-control"
              name="password"
              value={user.password}
              onChange={(e) => postUserData(e)}
            />
             <span style={{ color: "red", marginLeft: "24px" }}>
              {" "}
              {error.password}{" "}
            </span>
          </div>

          <div>
            <label>Img</label>
            <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    name="img"
                    accept="image/*"
                    class="form-control"
                  />
             {/* <span style={{ color: "red", marginLeft: "24px" }}>
              {" "}
              {error.password}{" "}
            </span> */}
          </div>
        
    
        <button type="submit" class="btn btn-primary" onClick={SubmitInfo}>
          Submit
        </button>
      </form>
 </div>
  
 </div>
 </div>
  
  
  </>
   
 
}