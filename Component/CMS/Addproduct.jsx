import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { create } from '../../Redux/CrudSlice';
import { useDispatch, useSelector } from 'react-redux';
import '../CMS/Addproduct.css';
import { Link, useNavigate } from 'react-router-dom';
import img1 from "../CMS/logo2.png"
import img2 from "../images/blog_img1.png"

export default function Addproduct() {
    const navigate=useNavigate()
    const {AddredirectTo} = useSelector((state) => state.Crud);
    
    const [error, setError] = useState({})
    const[image,setImage]=useState()
    const [user, setUser] = useState({
        title: "",
        description: "",
        
    })
const dispatch=useDispatch();
    const handelChange = (event) => {
        // console.log(event.target);
        let name = event.target.name;
        let value = event.target.value;
        if (name === "title") {
            if (value.length == 0) {
                setError({ ...error, title: "@Title is Required" });
                setUser({ ...user, title: "" });
            } else {
                setError({ ...error, title: "" });
                setUser({ ...user, title: value });
            }
        }
       
        if (name === "description") {
            if (value.length === 0) {
                setError({ ...error, description: "@Description name required" });
                setUser({ ...user, description: "" });
            } else {
                setError({ ...error, description: "" });
                setUser({ ...user, description: value });
            }
        }
       
        
       
    }
    const sendData = (e) => {
        e.preventDefault();
        // setError()
        let formData= new FormData();
        formData.append("title",user.title);
        formData.append("description",user.description);
        formData.append("image",image);
        dispatch(create(formData));


       



    }
    const Addredirect = () => {
        let title = localStorage.getItem("title");
        let isInLoginPage = window.location.pathname.toLowerCase() === "/addproduct";
    
        if (title !== null && title !== undefined && title !== "") {
            // window.location.pathname = getPathname;
            isInLoginPage && navigate("/Display");
        }
    };
    useEffect(()=>{
        Addredirect()
      },[AddredirectTo])

    return (

        <>
        {/* <div className='container' >
            <div className='row'>
            <div className="col-md-4" style={{ margin: "40px auto" }}>
                <div  class="card">
                <h1 id="form-title">AddProduct</h1>
                <form class="container" onSubmit={sendData}>
                    <div class="card-body">
                        <div id="user-input-box">
                            <label for="title">Title</label>
                            <input type="text"
                                name="title"
                                placeholder="Enter Title"
                                value={user.first_name} onChange={handelChange} />
                        </div>

                        <div id="user-input-box">
                            <label for="email">Description</label>
                            <input type="description"
                                name="description"
                                placeholder="Enter Description"
                                value={user.description}
                                onChange={handelChange} />
                        </div>
                        <label>Img</label>
            <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    name="img"
                    accept="image/*"
                    class="form-control"
                  />
          
                              
                         </div>

                    <div id="form-submit-btn">
                    <button type="submit" class="btn btn-primary" onClick={sendData}>
          Submit
        </button>
                    </div>
                </form>
            </div>
            </div>

    </div>
    </div> */}



<div class="main">
        <div className='container'>
          <div className='row'>
            <div className="col-md-4" style={{ margin: "40px auto" }} >
              <div class="card" >
              <div className='box'style={{marginTop:"20px"}}>
            {/* <img src="" class="card-img-top" alt="..."style={{repeat:"no-repeat",height:" 100px",width:" 200px"}}/> */}
           {/* <img src={img1} style={{width: "20%"}} /> */}
            </div>
                <div class="card-body">
                <h4>AddProduct</h4>
                  <div style={{ paddingTop: "50px", textAlign: "center", fontSize: "20px" }}>
                    <form class="container" onSubmit={sendData} >
                      
                      <div class="form-group">
                        <div >
                          <label>Title</label>
                          <input type="text"
                            class="form-control"
                            name="title"
                            placeholder="Enter Title"
                                value={user.first_name} onChange={handelChange}
                          />
                        </div>
                        <div>
                          <label>description</label>
                          <textarea
                            class="form-control"
                            name="description"
                            value={user.description}
                            onChange={handelChange}

                          />

                        </div>
                        <label>Image</label>
                        <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    name="img"
                    accept="image/*"
                    class="form-control"
                  />

                       

                      </div>

                      <button type="submit" class="btn btn-primary" onClick={sendData}>
                        <Link class="btn-primary">Submit</Link>
                      </button>
                    </form>

                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

      </div>


{/* <div class="hero">
                <div class="contanier">

                

                    <div class="sign">
                        <h3>Add Product</h3>

                        <form onSubmit={sendData}>
                        <div>
            <label for="exampleInputEmail1">Title</label>
            <input type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            //   name="Title"
              value={user.first_name} onChange={handelChange}
              
            /> 
            <span style={{ color: "red", marginLeft: "24px" }}>
              {" "}
              {error.email}{" "}
            </span>
          </div>
          <div>
            <label>Description</label>
            <div>
                            
                            <input type="description"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                                name="description"
                               
                                value={user.description}
                                onChange={handelChange} />
                        </div>
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
          </div>

          <button type="submit" class="btn btn-primary" onClick={sendData}>
          Submit
        </button>

                          
                        </form>
                    </div>

                </div>
            </div> */}






{/* 
<div class="ad-product-main">
        <div class="container">

            <div class="ad-product-wpr">
                <div class="ad-product-s">
                    <h1>AddProduct</h1>
                    <form  onSubmit={sendData}>
                        <div class="main-user-info">
                            <div class="user-input-box">
                                <form>
                                    <label for="title">Title:</label>
                                    <input type="text"
                                name="title"
                                
                                value={user.first_name} onChange={handelChange}/>
                                </form>
                            </div>

                            <div id="user-input-box">
                                <form>
                                    <label for="email">Description:</label>
                                    <input  type="description"
                                name="description"
                                placeholder=""
                                value={user.description}
                                onChange={handelChange}/>
                                    </form>
                            </div>

                            <div class="user-img">
                   
                    <label>Img:</label>
                    <input type="file"
                     onChange={(e) => setImage(e.target.files[0])}
                     name="img"
                     accept="image/*"
                     class="form-control"
                    />
                    
                    </div>
                
            </div>

            <div class="form-submit-btn">
                <a href="#" class="btn btn-primary" onClick={sendData}>Submit</a>
            </div>
            </form>
        </div>
    </div>

    </div>
    </div> */}
        </>
    )
}
