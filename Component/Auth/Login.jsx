import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset_login } from '../../Redux/AuthSlice';
import '../Auth/Login.css';
export default function Login() {
    const [error, setError] = useState({})
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const {redirectTo, redirectthree} = useSelector((state) => state.contents);
    const validation = () => {
        const regx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        const error = {};
        if (!user.email) {

            error.email = ("Please enter the password")
        }
        else if (!regx.test(user.email)) {
            error.email = ("enter a valid email")
        }
        if (!user.password) {


            error.password = ("please enter the password")
        }

        return error
    }




    const handelChange = (event) => {
        // console.log(event.target);
        let name = event.target.name;
        let value = event.target.value;
        if (name === "email") {
            if (value.length == 0) {
                setError({ ...error, email: "@Email is Required" });
                setUser({ ...user, email: "" });
            } else {
                setError({ ...error, email: "" });
                setUser({ ...user, email: value });
            }
        }
        if (name === "password") {
            if (value.length === 0) {
                setError({ ...error, password: "@password is Required" });
                setUser({ ...user, password: "" });
            } else {
                setError({ ...error, password: "" });
                setUser({ ...user, password: value });
            }
        }

    }
    const sendData = async (event) => {
        event.preventDefault()//prevents reload
        setError(validation())

        // let formData= new FormData();
        // formData.append("email",user.email);
        // formData.append("password",user.password);
        const formData={
            email:user.email,
            password:user.password
        }
dispatch(login(formData))
    };
    const RedirectUser = () => {
        let token = localStorage.getItem("token");
        let isInLoginPage = window.location.pathname.toLowerCase() === "/login";
    
        if (token !== null && token !== undefined && token !== "") {
            // window.location.pathname = getPathname;
            isInLoginPage && navigate("/Display");
        }
    };
    
    useEffect(()=>{
      RedirectUser()
    },[redirectTo])
    
    useEffect(()=>{
        dispatch(reset_login(null))
    },[redirectthree])
    
    
    
    return (
        <>

            



            <div class="hero">
                <div class="contanier">

                

                    <div class="sign">
                        <h3>Sign In</h3>

                        <form >
                        <div>
            <label for="exampleInputEmail1">Email address</label>
            <input
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={user.email}
              onChange={(e) => handelChange(e)}
            />
            <span style={{ color: "red", marginLeft: "24px" }}>
              {" "}
              {error.email}{" "}
            </span>
          </div>
          <div>
            <label>Password</label>
            <input
              class="form-control"
              type="password"
              name="password"
              value={user.password}
              onChange={(e) => handelChange(e)}
            />
             <span style={{ color: "red", marginLeft: "24px" }}>
              {" "}
              {error.password}{" "}
            </span>
          </div>

          <button type="submit" class="btn btn-primary" onClick={sendData}>
          Submit
        </button>

                            

                           

                            <p class="account">Don't Have an Account?</p>
                            <p class="sign-up"><Link to="/Registration">Sign up</Link> here</p>
                        </form>
                    </div>

                </div>
            </div>











        </>
    )

}
