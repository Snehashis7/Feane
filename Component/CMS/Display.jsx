import React, { useEffect,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Details, removetitleupdate} from '../../Redux/CrudSlice';
import { DeleteProduct } from '../../Redux/CrudSlice';
import {image} from '../../Redux/Helper';
import { reset_redirectTo } from "../../Redux/AuthSlice";
import { Addredirect } from "../../Redux/CrudSlice"
import { updatere } from "../../Redux/CrudSlice"
import SweetAlertComponent from "../Sweetaleart/Delete";
import "../CMS/Display.css"


export default function Display() {
  const [delete_id, setDelete_id] = useState();
  const [isDelete, setIsDelete] = useState(false);
  const Dispatch=useDispatch();
  const {data} = useSelector((s)=>s.Crud);
  const { redirectTo } = useSelector((s) => s.contents);
  const { AddredirectTo } = useSelector((s) => s.Crud);
  const { updateredirect } = useSelector((s) => s.Crud);
  useEffect(() => {
    Dispatch(Details())
    
  }, [])
  let formdata = new FormData();
  formdata.append("id", delete_id);

  const delete_func = () => {
    if (delete_id != "") {
      Dispatch(DeleteProduct(formdata)).then(Dispatch(Details()));
    }
    setDelete_id("");
    setIsDelete(false);
  };
  useEffect(() => {
    Dispatch(reset_redirectTo(null))
  }, [redirectTo])

  useEffect(()=>{
    Dispatch(Addredirect(null))
},[AddredirectTo])


useEffect(()=>{
  Dispatch(updatere(null))
},[updateredirect])

useEffect(() => {
  Dispatch(removetitleupdate())
})

  console.log(data);
  return (
    <>
    {/* <div class="all-cards">
      <div className='container' >
        <div className="all-cards-wpr">
              <div className='all-cards-only' style={{display:"flex"}}>
              
                {data?.data?.map((user) => {
                  return(
                    <div className="card-1" style={{ margin:"7px",width:"33.33%"}}>
                  <div class="card " style={{ textAlign: "center", fontSize: "20px",width:"24rem", }}>
                    

                    <div class="card-body">
                      <img 
                      height="300px"
                        width="300px"
                        src={
                          user?.image
                            ? image(user?.image)
                            : "error"
                        }
                        alt="No Image"
                      />
                      <div  >
                        <h5 class="card-title ">{user.title}</h5>
                        <p class="card-text pb-3">


                          {user.description}

                        </p>

                        <Link to={`/Edit/${user._id}`} class="btn btn-primary mr" style={{ marginRight: "30px", paddingRight: "30px" }}>
            Edit
          </Link>
          
          <Link
          to=""
          onClick={() => {
            setDelete_id(user?._id);
            setIsDelete(true);
          }}
          class="btn btn-primary mr"
          >
          Delete
          </Link>
          {isDelete && (
          <SweetAlertComponent
          confirm={delete_func}
          cancle={() => setIsDelete(false)}
          title={"Are you sure?"}
          subtitle={"You will not be able to recover!"}
          />
          )}

                      </div>
                    </div>
                  </div>
                  </div>
                  )
                })}
             


              </div>
              </div>
            </div>
            </div> */}

<div className="container">
<div class="blog_sec_cards">
            <div class="row all-cards">
            {data?.data?.map((user) => {
                  return(
                    
              <div class="bl_card_1 col-lg-4" style={{padding:"40px 0"}}>
                <div class="bl_card_1_top">
                <img 
                      height="300px"
                        width="300px"
                        src={
                          user?.image
                            ? image(user?.image)
                            : "error"
                        }
                        alt="No Image"
                      />
                     
               
              </div>
              <div  >
                        <h5 class="card-title " style={{padding:"15px 0 0 0"}}>{user.title}</h5>
                        <p class="card-text pb-3">


                          {user.description}

                        </p>
                </div>
                <Link to={`/Edit/${user._id}`} class="btn btn-primary mr" style={{ marginRight: "30px", paddingRight: "30px" }}>
            Edit
          </Link>
          
          <Link
          to=""
          onClick={() => {
            setDelete_id(user?._id);
            setIsDelete(true);
          }}
          class="btn btn-primary mr"
          >
          Delete
          </Link>
          {isDelete && (
          <SweetAlertComponent
          confirm={delete_func}
          cancle={() => setIsDelete(false)}
          title={"Are you sure?"}
          subtitle={"You will not be able to recover!"}
          />
          )}
          </div>
            )}
            )}
           </div>
          </div>
          
</div>
               
    </>

  )
}
